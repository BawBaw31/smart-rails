import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import * as Print from 'expo-print'
import * as Sharing from 'expo-sharing'
import React, { Fragment, useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { reportPdf } from '../../assets/htmlTemplates/reportPdf'
import { CustomButton } from '../../components/customButton/CustomButton'
import {
    FormError,
    FormLabel,
    FormTextInput,
} from '../../components/formComponents/FormComponents.styles'
import { TitleLayout } from '../../components/layouts/Layouts'
import { Loading } from '../../components/loading/Loading'
import { apiUrl } from '../../config/apiConfig.json'
import { RouteParams } from '../../navigation/RootNavigator'
import { ReportType, Report } from '../../views/ReportFetch'
import { ReportValue } from '../../views/ReportPost'

export const ReportForm = () => {
    const route = useRoute<RouteProp<RouteParams, 'ReportForm'>>()
    const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>()
    const [error, setError] = useState<string>('')
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
            setError('Server error. Please try again later.')
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchReportTypes()
    }, [])

    const SubmitReport = async () => {
        const values = reportValues
            .filter((value) => value.value)
            .map((value) => ({
                value: parseFloat(value.value.replace(',', '.')),
                measure: value.measureId,
            }))
        try {
            const apiResponse = await fetch(`${apiUrl}visit/report/new`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ visit_type: route.params.id, values: values }),
            })
            const json = await apiResponse.json()
            if (apiResponse.status !== 200) {
                setError(json.error)
                console.log(error)
            } else {
                shareReportPdf(json)
            }
        } catch (error) {
            console.log(error)
            setError('Server error. Please try again later.')
        }
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
                <ScrollView>
                    {error !== '' && <FormError>{error}</FormError>}
                    {reportType?.measures.map((measure, index) => (
                        <Fragment key={measure.id}>
                            <FormLabel>{measure.label}</FormLabel>
                            <FormTextInput
                                placeholder="Numeric Values Only"
                                value={reportValues[index]?.value}
                                onChangeText={(text) => {
                                    const newReportValues = [...reportValues]
                                    newReportValues[index] = {
                                        ...newReportValues[index],
                                        value: text,
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
                </ScrollView>
            ) : (
                <Loading />
            )}
        </TitleLayout>
    )
}
