import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { useEffect, useState } from 'react'
import { FullWidthButton } from '../../components/fullWidthButton/FullWidthButton'
import { TitleLayout } from '../../components/layouts/Layouts'
import { Loading } from '../../components/loading/Loading'
import { apiUrl } from '../../config/apiConfig.json'
import { RouteParams } from '../../navigation/RootNavigator'
import { ReportType } from '../../views/ReportFetch'

export const NewReport = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>()
    const [loading, setLoading] = useState(true)
    const [reportTypes, setReportTypes] = useState<ReportType[]>([])

    const fetchReportTypes = async () => {
        try {
            const apiResponse = await fetch(`${apiUrl}visit/type`)
            const json = await apiResponse.json()
            setReportTypes(json)
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchReportTypes()
    }, [])

    return (
        <TitleLayout title="New Report" goBack="Home">
            {!loading ? (
                <>
                    {reportTypes.map((reportType) => (
                        <FullWidthButton
                            key={reportType.id}
                            text={reportType.label}
                            onPress={() => navigation.navigate('ReportForm', { id: reportType.id })}
                        />
                    ))}
                </>
            ) : (
                <Loading />
            )}
        </TitleLayout>
    )
}
