import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { onAuthStateChanged } from 'firebase/auth'
import { useState } from 'react'
import { auth } from '../firebase/firebase-setup'
import { Home } from '../screens/Home/Home'
import { Loading } from '../screens/Loading/Loading'
import { Register } from '../screens/Register/Register'
import { SignIn } from '../screens/SignIn/SignIn'
import { WayDevicesPDF } from '../screens/PeriodicVisitsPDF/WayDevicesPDF'
import { CommonWayPDF } from '../screens/PeriodicVisitsPDF/CommonWayPDF'

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
    const [isLoading, setIsLoading] = useState(true)
    const [isSignedIn, setIsSignedIn] = useState(false)

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setIsLoading(false)
            setIsSignedIn(true)
        } else {
            setIsLoading(false)
            setIsSignedIn(false)
        }
    })

    return (
        <Stack.Navigator
            screenOptions={{
                animation: 'none',
                headerShown: false,
            }}
        >
            {isLoading ? (
                <Stack.Group>
                    <Stack.Screen name="Loading" component={Loading} />
                </Stack.Group>
            ) : isSignedIn ? (
                <Stack.Group>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="WayDevicesPDF" component={WayDevicesPDF} />
                    <Stack.Screen name="CommonWayPDF" component={CommonWayPDF} />
                </Stack.Group>
            ) : (
                <Stack.Group>
                    <Stack.Screen name="SignIn" component={SignIn} />
                    <Stack.Screen name="Register" component={Register} />
                </Stack.Group>
            )}
        </Stack.Navigator>
    )
}
