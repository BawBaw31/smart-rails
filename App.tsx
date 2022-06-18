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
import { UserContext } from './src/contexts/UserContext'
import { User } from './src/views/User'

export default function App() {
    const [user, setUser] = React.useState<User | null>(null)
    const [fontsLoaded] = useFonts({
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_600SemiBold,
        Montserrat_700Bold,
        Montserrat_800ExtraBold,
    })

    const setUserWithLog = (user: User | null) => {
        console.log('setUserWithLog :', user)
        setUser(user)
    }

    if (!fontsLoaded) {
        return <AppLoading />
    } else {
        return (
            <UserContext.Provider value={{ user, setUser: setUserWithLog }}>
                <NavigationContainer>
                    <StatusBar style="auto" />
                    <RootNavigator />
                </NavigationContainer>
            </UserContext.Provider>
        )
    }
}
