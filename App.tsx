import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import AppLoading from 'expo-app-loading'
import { RootNavigator } from './src/navigation/RootNavigator'
import {
    useFonts,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
} from '@expo-google-fonts/montserrat'

export default function App() {
    const [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_600SemiBold,
        Montserrat_700Bold,
        Montserrat_800ExtraBold,
    })

    if (!fontsLoaded) {
        return <AppLoading />
    } else {
        return (
            <NavigationContainer>
                <StatusBar style="auto" />
                <RootNavigator />
            </NavigationContainer>
        )
    }
}
