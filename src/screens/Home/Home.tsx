import React from 'react'
import { Button } from 'react-native'
import { TitleLayout } from '../../components/layouts/Layouts'

export const Home = () => {
    const Logout = () => {
        console.log('Logout')
    }

    return (
        <TitleLayout title="Home">
            <Button title="Logout" onPress={Logout} />
        </TitleLayout>
    )
}
