import React, { useEffect } from 'react'
import { TitleLayout } from '../../components/layouts/Layouts'
import { apiUrl } from '../../config/apiConfig.json'
import { Text } from 'react-native'

export const NewReport = () => {
    async function fetchReportTypes() {
        const apiResponse = await fetch(`${apiUrl}reports`)
        const json = await apiResponse.json()
    }

    useEffect(() => {
        fetchReportTypes()
    }, [])

    return (
        <TitleLayout title="New Report" goBack="Home" noFooter>
            <Text>Hey</Text>
        </TitleLayout>
    )
}
