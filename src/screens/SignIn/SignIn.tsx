import { API_URL } from '@env'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native'
import { TitleLayout } from '../../components/layouts/Layouts'

export const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const SignInUser = async () => {
        console.log(`${API_URL}login`)
        const apiResponse = await fetch(`${API_URL}login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email, password: password }),
        })
        const json = await apiResponse.json()
        console.log(json)
    }

    return (
        <TitleLayout noFooter title={'Sign In'}>
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

                <Button title="Submit" onPress={SignInUser} />
            </>
        </TitleLayout>
    )
}
