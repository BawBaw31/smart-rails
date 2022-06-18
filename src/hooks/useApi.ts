import { useEffect, useState } from 'react'
import { apiUrl } from '../config/apiConfig.json'

export type TApiResponse = {
    status: number
    statusText: string
    data: any
    error: any
    loading: boolean
}

export const useApi = (path: string): TApiResponse => {
    const [status, setStatus] = useState<number>(0)
    const [statusText, setStatusText] = useState<string>('')
    const [data, setData] = useState<any>()
    const [error, setError] = useState<any>()
    const [loading, setLoading] = useState<boolean>(false)

    const getAPIData = async () => {
        setLoading(true)
        try {
            const apiResponse = await fetch(`${apiUrl}${path}`)
            const json = await apiResponse.json()
            setStatus(apiResponse.status)
            setStatusText(apiResponse.statusText)
            setData(json)
        } catch (error) {
            setError(error)
        }
        setLoading(false)
    }

    useEffect(() => {
        getAPIData()
    }, [])

    return { status, statusText, data, error, loading }
}
