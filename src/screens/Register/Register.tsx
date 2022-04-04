import React, { useState } from 'react'
import { Text, TextInput, Button } from 'react-native'
import { DisconnectedLayout } from '../../components/layouts/Layouts'
import { auth } from '../../firebase/firebase-setup'
import { getDatabase, ref, set } from 'firebase/database'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { RouteParams } from '../../navigation/RootNavigator'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { useNavigation } from '@react-navigation/native'

export const Register = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const RegisterUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((res) => {
                const db = getDatabase()
                const reference = ref(db, 'players/' + res.user.uid)
                set(reference, {
                    games: [1],
                    mark: 0,
                })
            })
            .catch((err) => {
                alert(err)
            })
    }

    return (
        <DisconnectedLayout>
            <>
                <Text>Register</Text>
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

                <Button title="Submit" onPress={RegisterUser} />
                <Button title="Sign in" onPress={() => navigation.navigate('SignIn')} />
            </>
        </DisconnectedLayout>
    )
}
