import { RouteProp, useRoute } from '@react-navigation/native'
import * as Print from 'expo-print'
import * as Sharing from 'expo-sharing'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { reportPdf } from '../../assets/htmlTemplates/reportPdf'
import { CustomButton } from '../../components/customButton/CustomButton'
import { FormError } from '../../components/formComponents/FormComponents.styles'
import { TitleLayout } from '../../components/layouts/Layouts'
import { Loading } from '../../components/loading/Loading'
import { apiUrl } from '../../config/apiConfig.json'
import { RouteParams } from '../../navigation/RootNavigator'
import { Report } from '../../views/ReportFetch'
import * as Styled from './ReportDetails.styles'

export const ReportDetails = () => {
    const route = useRoute<RouteProp<RouteParams, 'ReportDetails'>>()
    const [report, setReport] = useState<Report>()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string>('')

    const fetchMyReports = async () => {
        try {
            const apiResponse = await fetch(`${apiUrl}visit/report/${route.params.id}`)
            const json = await apiResponse.json()
            setReport(json)
        } catch (error) {
            console.log(error)
            setError('Server error. Please try again later.')
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchMyReports()
    }, [])

    const shareReportPdf = async () => {
        if (!report) return
        const html = reportPdf(report)
        const { uri } = await Print.printToFileAsync({ html })
        await Sharing.shareAsync(uri)
    }

    return (
        <>
            <TitleLayout title="Report" goBack="Home">
                <ScrollView>
                    {!loading ? (
                        <>
                            {error !== '' && <FormError>{error}</FormError>}
                            <Styled.ReportDetailsText>
                                Visit type : {report?.visitType.label}
                            </Styled.ReportDetailsText>
                            <Styled.ReportDetailsText>
                                Created at :{' '}
                                {report && new Date(report.createdAt).toLocaleDateString()}
                            </Styled.ReportDetailsText>
                            {report?.values.map((value, index) => (
                                <Styled.ReportDetailsValueContainer key={index}>
                                    <Styled.ReportDetailsValueLabel>
                                        {value.measure.label} :
                                    </Styled.ReportDetailsValueLabel>
                                    <Styled.ReportDetailsValueValueContainer>
                                        <Styled.ReportDetailsValueLabel>
                                            {value.value}
                                        </Styled.ReportDetailsValueLabel>
                                        <Styled.ReportDetailsValueLabel>
                                            {value.measure.theoreticalValue} | -
                                            {value.measure.minValue} +{value.measure.maxValue}
                                        </Styled.ReportDetailsValueLabel>
                                    </Styled.ReportDetailsValueValueContainer>
                                </Styled.ReportDetailsValueContainer>
                            ))}
                            <CustomButton text="Download" onPress={shareReportPdf} />
                        </>
                    ) : (
                        <Loading />
                    )}
                </ScrollView>
            </TitleLayout>
        </>
    )
}
