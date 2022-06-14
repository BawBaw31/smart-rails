import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { TApiResponse, useApi } from '../hooks/useApi'
import { Home } from '../screens/Home/Home'
import { Loading } from '../screens/Loading/Loading'
import { CommonWayPDF } from '../screens/PeriodicVisitsPDF/CommonWayPDF'
import { WayDevicesPDF } from '../screens/PeriodicVisitsPDF/WayDevicesPDF'
import { SignIn } from '../screens/SignIn/SignIn'

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
    const apiResponse: TApiResponse = useApi('me')

    return (
        <Stack.Navigator
            screenOptions={{
                animation: 'none',
                headerShown: false,
            }}
        >
            {apiResponse.loading ? (
                <Stack.Group>
                    <Stack.Screen name="Loading" component={Loading} />
                </Stack.Group>
            ) : apiResponse.status === 200 ? (
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
