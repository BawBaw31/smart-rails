import { signOut } from 'firebase/auth'
import React from 'react'
import { Button } from 'react-native'
import { TitleLayout } from '../../components/layouts/Layouts'
import { auth } from '../../firebase/firebase-setup'

export const Home = () => {
    const Logout = () => {
        signOut(auth)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                alert(err)
            })
    }

    return (
        <TitleLayout title="Home">
            <>
                <Button title="Logout" onPress={Logout} />
            </>
        </TitleLayout>
    )
}
