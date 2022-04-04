import React, { useState } from 'react'
import { Text, TextInput, Button } from 'react-native'
import { DisconnectedLayout } from '../../components/layouts/Layouts'
import { auth } from '../../firebase/firebase-setup'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RouteParams } from '../../navigation/RootNavigator'

export const SignIn = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const SignInUser = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                alert(err)
            })
    }

    return (
        <DisconnectedLayout>
            <>
                <Text>Sign in</Text>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                />

                <Button title="Submit" onPress={SignInUser} />
                <Button title="Register" onPress={() => navigation.navigate('Register')} />
            </>
        </DisconnectedLayout>
    )
}
