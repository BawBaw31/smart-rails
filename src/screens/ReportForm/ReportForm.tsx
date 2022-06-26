import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import * as Print from 'expo-print'
import * as Sharing from 'expo-sharing'
import React, { Fragment, useEffect, useState } from 'react'
import { reportPdf } from '../../assets/htmlTemplates/reportPdf'
import { CustomButton } from '../../components/customButton/CustomButton'
import { FormLabel, FormTextInput } from '../../components/formComponents/FormComponents.styles'
import { TitleLayout } from '../../components/layouts/Layouts'
import { Loading } from '../../components/loading/Loading'
import { apiUrl } from '../../config/apiConfig.json'
import { RouteParams } from '../../navigation/RootNavigator'
import { ReportType, ReportValue } from '../../views/ReportFetch'
import { Report } from '../../views/ReportPost'

export const ReportForm = () => {
    const route = useRoute<RouteProp<RouteParams, 'ReportForm'>>()
    const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>()
    const [loading, setLoading] = useState(true)
    const [reportType, setReportType] = useState<ReportType | null>(null)
    const [reportValues, setReportValues] = useState<ReportValue[]>([])

    const fetchReportTypes = async () => {
        try {
            const apiResponse = await fetch(`${apiUrl}visit/type/${route.params.id}`)
            const json = await apiResponse.json()
            setReportType(json)
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchReportTypes()
    }, [])

    const SubmitReport = async () => {
        const values = reportValues.map((value) => ({
            value: parseFloat(value.stringValue.replace(',', '.')),
            measure: value.measureId,
        }))

        const apiResponse = await fetch(`${apiUrl}visit/report/new`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ visit_type: route.params.id, values: values }),
        })

        const json = await apiResponse.json()
        shareReportPdf(json)
    }

    const shareReportPdf = async (report: Report) => {
        const html = reportPdf(report)
        const { uri } = await Print.printToFileAsync({ html })
        await Sharing.shareAsync(uri)
        navigation.navigate('Home')
    }

    return (
        <TitleLayout title="New Report" goBack="Home">
            {!loading ? (
                <>
                    {reportType?.measures.map((measure, index) => (
                        <Fragment key={measure.id}>
                            <FormLabel>{measure.label}</FormLabel>
                            <FormTextInput
                                placeholder="Numeric Values Only"
                                value={reportValues[index]?.stringValue}
                                onChangeText={(text) => {
                                    const newReportValues = [...reportValues]
                                    newReportValues[index] = {
                                        ...newReportValues[index],
                                        stringValue: text,
                                        measureId: measure.id,
                                    }
                                    setReportValues(newReportValues)
                                }}
                                placeholderTextColor="black"
                                keyboardType={'numeric'}
                            />
                        </Fragment>
                    ))}
                    <CustomButton text="Submit" onPress={SubmitReport} />
                </>
            ) : (
                <Loading />
            )}
        </TitleLayout>
    )
}
