import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useContext, useEffect } from 'react'
import { UserContext } from '../contexts/UserContext'
import { Home } from '../screens/Home/Home'
import { Loading } from '../screens/Loading/Loading'
import { CommonWayPDF } from '../screens/PeriodicVisitsPDF/CommonWayPDF'
import { WayDevicesPDF } from '../screens/PeriodicVisitsPDF/WayDevicesPDF'
import { SignIn } from '../screens/SignIn/SignIn'
import { apiUrl } from '../config/apiConfig.json'

export type RouteParams = {
    Home: undefined
    WayDevicesPDF: undefined
    CommonWayPDF: undefined
    Loading: undefined
    Register: undefined
    SignIn: undefined
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
                    <Stack.Screen name="WayDevicesPDF" component={WayDevicesPDF} />
                    <Stack.Screen name="CommonWayPDF" component={CommonWayPDF} />
                </Stack.Group>
            ) : (
                <Stack.Group>
                    <Stack.Screen name="SignIn" component={SignIn} />
                </Stack.Group>
            )}
        </Stack.Navigator>
    )
}
