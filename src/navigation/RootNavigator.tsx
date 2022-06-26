import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useContext, useEffect } from 'react'
import { UserContext } from '../contexts/UserContext'
import { Home } from '../screens/Home/Home'
import { Loading } from '../screens/Loading/Loading'
import { SignIn } from '../screens/SignIn/SignIn'
import { apiUrl } from '../config/apiConfig.json'
import { NewReport } from '../screens/NewReport/NewReport'

export type RouteParams = {
    Loading: undefined
    Register: undefined
    SignIn: undefined
    Home: undefined
    NewReport: undefined
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
                </Stack.Group>
            ) : (
                <Stack.Group>
                    <Stack.Screen name="SignIn" component={SignIn} />
                </Stack.Group>
            )}
        </Stack.Navigator>
    )
}
