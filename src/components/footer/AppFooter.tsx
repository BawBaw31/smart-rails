import React from 'react'
import { TouchableOpacity } from 'react-native'
import BellIcon from '../../assets/icons/BellIcon'
import PlusIcon from '../../assets/icons/PlusIcon'
import UserIcon from '../../assets/icons/UserIcon'
import * as Styled from './AppFooter.styles'

export const AppFooter = () => {
    return (
        <Styled.AppFooterContainer>
            <TouchableOpacity
                onPress={() => {
                    console.log('bell clicked')
                    // navigation.navigate('')
                }}
            >
                <BellIcon />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    console.log('plus clicked')
                    // navigation.navigate('')
                }}
            >
                <PlusIcon />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    console.log('user clicked')
                    // navigation.navigate('')
                }}
            >
                <UserIcon />
            </TouchableOpacity>
        </Styled.AppFooterContainer>
    )
}
