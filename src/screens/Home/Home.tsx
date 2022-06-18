import React, { useContext } from 'react'
import { Button } from 'react-native'
import { TitleLayout } from '../../components/layouts/Layouts'
import { UserContext } from '../../contexts/UserContext'
import { backUrl } from '../../config/apiConfig.json'

export const Home = () => {
    const { setUser } = useContext(UserContext)
    const Logout = async () => {
        console.log('Logout')
        try {
            await fetch(`${backUrl}logout`)
            setUser(null)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <TitleLayout title="Home">
            <Button title="Logout" onPress={Logout} />
        </TitleLayout>
    )
}
