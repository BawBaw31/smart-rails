import React, { useContext, useState } from 'react'
import { CustomButton } from '../../components/customButton/CustomButton'
import { TitleLayout } from '../../components/layouts/Layouts'
import { apiUrl } from '../../config/apiConfig.json'
import { UserContext } from '../../contexts/UserContext'
import * as Styled from './Signin.styles'

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
                <Styled.Field
                    placeholder="Email"
                    value={email}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={(text) => setEmail(text)}
                    placeholderTextColor="black"
                />
                <Styled.Field
                    placeholder="Password"
                    value={password}
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                    placeholderTextColor="black"
                />
                <CustomButton text="Submit" onPress={SignInUser} />
            </>
        </TitleLayout>
    )
}
