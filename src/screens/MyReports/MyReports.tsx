import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { useEffect, useState } from 'react'
import { FullWidthButton } from '../../components/fullWidthButton/FullWidthButton'
import { TitleLayout } from '../../components/layouts/Layouts'
import { RouteParams } from '../../navigation/RootNavigator'
import { Report } from '../../views/ReportFetch'
import { apiUrl } from '../../config/apiConfig.json'
import { Loading } from '../../components/loading/Loading'
import { FormError } from '../../components/formComponents/FormComponents.styles'
import { ScrollView } from 'react-native'

export const MyReports = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>()
    const [myReports, setMyReports] = useState<Report[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string>('')

    const fetchMyReports = async () => {
        try {
            const apiResponse = await fetch(`${apiUrl}visit/report/get/my`)
            const json = await apiResponse.json()
            setMyReports(json)
        } catch (error) {
            console.log(error)
            setError('Server error. Please try again later.')
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchMyReports()
    }, [])

    return (
        <TitleLayout title="My Reports" goBack="Home">
            <ScrollView>
                {!loading ? (
                    <>
                        {error !== '' && <FormError>{error}</FormError>}
                        {myReports.map((report) => (
                            <FullWidthButton
                                key={report.id}
                                text={
                                    report.visitType.label +
                                    ' - ' +
                                    new Date(report.createdAt).toLocaleString()
                                }
                                onPress={() =>
                                    navigation.navigate('ReportDetails', { id: report.id })
                                }
                            />
                        ))}
                    </>
                ) : (
                    <Loading />
                )}
            </ScrollView>
        </TitleLayout>
    )
}
