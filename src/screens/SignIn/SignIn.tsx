import React, { useContext, useState } from 'react'
import { Button, TextInput } from 'react-native'
import { TitleLayout } from '../../components/layouts/Layouts'
import { apiUrl } from '../../config/apiConfig.json'
import { UserContext } from '../../contexts/UserContext'

export const SignIn = () => {
    const { setUser } = useContext(UserContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const SignInUser = async () => {
        const apiResponse = await fetch(`${apiUrl}login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: email, password: password }),
        })
        const json = await apiResponse.json()
        setUser(json.user)
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
