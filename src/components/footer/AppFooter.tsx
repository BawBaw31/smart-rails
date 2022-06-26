import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { useContext, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import HomeIcon from '../../assets/icons/HomeIcon'
import UserIcon from '../../assets/icons/UserIcon'
import { backUrl } from '../../config/apiConfig.json'
import { UserContext } from '../../contexts/UserContext'
import { RouteParams } from '../../navigation/RootNavigator'
import { CustomButton } from '../customButton/CustomButton'
import { CustomModal } from '../modal/CustomModal'
import { ModalTitle } from '../modal/CustomModal.styles'
import * as Styled from './AppFooter.styles'

export const AppFooter = () => {
    const { setUser } = useContext(UserContext)
    const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>()
    const [modalVisible, setModalVisible] = useState(false)

    const Logout = async () => {
        try {
            await fetch(`${backUrl}logout`)
            setUser(null)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Styled.AppFooterContainer>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <HomeIcon />
            </TouchableOpacity>
            <CustomModal icon={<UserIcon />} hook={[modalVisible, setModalVisible]}>
                <>
                    <ModalTitle>User Management</ModalTitle>
                    <CustomButton text="Logout" onPress={Logout} />
                </>
            </CustomModal>
        </Styled.AppFooterContainer>
    )
}
