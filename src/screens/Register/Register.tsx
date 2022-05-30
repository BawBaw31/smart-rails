import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { getDatabase, ref, set } from 'firebase/database'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native'
import { TitleLayout } from '../../components/layouts/Layouts'
import { auth } from '../../firebase/firebase-setup'
import { RouteParams } from '../../navigation/RootNavigator'

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
        <TitleLayout noFooter title={'Register'}>
            <>
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
        </TitleLayout>
    )
}
