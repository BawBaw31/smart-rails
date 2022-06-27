import React, { useContext, useState } from 'react'
import { ScrollView } from 'react-native'
import { CustomButton } from '../../components/customButton/CustomButton'
import { FormError, FormTextInput } from '../../components/formComponents/FormComponents.styles'
import { TitleLayout } from '../../components/layouts/Layouts'
import { apiUrl } from '../../config/apiConfig.json'
import { UserContext } from '../../contexts/UserContext'

export const SignIn = () => {
    const { setUser } = useContext(UserContext)
    const [error, setError] = useState<string>('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const SignInUser = async () => {
        try {
            const apiResponse = await fetch(`${apiUrl}login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: email, password: password }),
            })
            const json = await apiResponse.json()
            setUser(json.user)
            if (apiResponse.status !== 200) {
                setError(json.error)
            }
        } catch (error) {
            console.log(error)
            setError('Server error. Please try again later.')
        }
    }

    return (
        <TitleLayout noFooter title={'Sign In'}>
            <ScrollView>
                {error !== '' && <FormError>{error}</FormError>}
                <FormTextInput
                    placeholder="Email"
                    value={email}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onChangeText={(text) => setEmail(text)}
                    placeholderTextColor="black"
                />
                <FormTextInput
                    placeholder="Password"
                    value={password}
                    secureTextEntry={true}
                    onChangeText={(text) => setPassword(text)}
                    placeholderTextColor="black"
                />
                <CustomButton text="Submit" onPress={SignInUser} />
            </ScrollView>
        </TitleLayout>
    )
}
