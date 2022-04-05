import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import PlusIcon from '../../assets/icons/PlusIcon'
import { RouteParams } from '../../navigation/RootNavigator'
import * as Styled from './AppFooter.styles'

export const AppFooter = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>()

    return (
        <Styled.AppFooterContainer>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('TestPdf')
                }}
            >
                <PlusIcon />
            </TouchableOpacity>
        </Styled.AppFooterContainer>
    )
}
