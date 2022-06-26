import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React from 'react'
import { FullWidthButton } from '../../components/fullWidthButton/FullWidthButton'
import { TitleLayout } from '../../components/layouts/Layouts'
import { RouteParams } from '../../navigation/RootNavigator'

export const Home = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>()
    return (
        <TitleLayout title="Home">
            <>
                <FullWidthButton
                    onPress={() => navigation.navigate('NewReport')}
                    text="New Report"
                />
                <FullWidthButton onPress={() => console.log('archives')} text="Archives" />
                <FullWidthButton onPress={() => console.log('last reports')} text="Last Reports" />
            </>
        </TitleLayout>
    )
}
