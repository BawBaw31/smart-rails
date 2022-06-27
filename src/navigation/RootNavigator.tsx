import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useContext, useEffect } from 'react'
import { Loading } from '../components/loading/Loading'
import { apiUrl } from '../config/apiConfig.json'
import { UserContext } from '../contexts/UserContext'
import { Home } from '../screens/Home/Home'
import { MyReports } from '../screens/MyReports/MyReports'
import { NewReport } from '../screens/NewReport/NewReport'
import { ReportDetails } from '../screens/ReportDetails/ReportDetails'
import { ReportForm } from '../screens/ReportForm/ReportForm'
import { SignIn } from '../screens/SignIn/SignIn'

export type RouteParams = {
    Loading: undefined
    Register: undefined
    SignIn: undefined
    Home: undefined
    NewReport: undefined
    ReportForm: { id: number }
    MyReports: undefined
    ReportDetails: { id: number }
}

const Stack = createNativeStackNavigator<RouteParams>()

export const RootNavigator = () => {
    const [loading, setLoading] = React.useState(true)
    const { user, setUser } = useContext(UserContext)

    const checkIfUserIsLogedIn = async () => {
        try {
            const apiResponse = await fetch(`${apiUrl}me`)
            const data = await apiResponse.json()
            setUser(data.user)
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }

    useEffect(() => {
        checkIfUserIsLogedIn()
    }, [])

    return (
        <Stack.Navigator
            screenOptions={{
                animation: 'none',
                headerShown: false,
            }}
        >
            {loading ? (
                <Stack.Group>
                    <Stack.Screen name="Loading" component={Loading} />
                </Stack.Group>
            ) : user ? (
                <Stack.Group>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="NewReport" component={NewReport} />
                    <Stack.Screen name="ReportForm" component={ReportForm} />
                    <Stack.Screen name="MyReports" component={MyReports} />
                    <Stack.Screen name="ReportDetails" component={ReportDetails} />
                </Stack.Group>
            ) : (
                <Stack.Group>
                    <Stack.Screen name="SignIn" component={SignIn} />
                </Stack.Group>
            )}
        </Stack.Navigator>
    )
}
