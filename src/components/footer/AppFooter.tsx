import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { useState } from 'react'
import PlusIcon from '../../assets/icons/PlusIcon'
import { RouteParams } from '../../navigation/RootNavigator'
import { CustomModal } from '../modal/CustomModal'
import { ModalButton, ModalButtonText, ModalTitle } from '../modal/CustomModal.styles'
import * as Styled from './AppFooter.styles'

export const AppFooter = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>()
    const [modalVisible, setModalVisible] = useState(false)

    return (
        <Styled.AppFooterContainer>
            <CustomModal icon={<PlusIcon />} hook={[modalVisible, setModalVisible]}>
                <>
                    <ModalTitle>Créer un pdf</ModalTitle>
                    <ModalButton
                        onPress={() => {
                            navigation.navigate('WayDevicesPDF')
                            setModalVisible(!modalVisible)
                        }}
                    >
                        <ModalButtonText>Visite périodique des appareils de voie</ModalButtonText>
                    </ModalButton>
                    <ModalButton
                        onPress={() => {
                            navigation.navigate('CommonWayPDF')
                            setModalVisible(!modalVisible)
                        }}
                    >
                        <ModalButtonText>Visite périodique de la voie courante</ModalButtonText>
                    </ModalButton>
                </>
            </CustomModal>
        </Styled.AppFooterContainer>
    )
}
