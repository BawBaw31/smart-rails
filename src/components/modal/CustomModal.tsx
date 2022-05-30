import React from 'react'
import { Modal, TouchableOpacity } from 'react-native'
import * as Styled from './CustomModal.styles'

interface CustomModelProps {
    children: JSX.Element
    icon: JSX.Element
    hook: [boolean, (value: boolean) => void]
}

export const CustomModal = (props: CustomModelProps) => {
    return (
        <>
            <Modal animationType="fade" transparent={true} visible={props.hook[0]}>
                <Styled.ModalContainer onPress={() => props.hook[1](!props.hook[0])}>
                    <Styled.Modal>{props.children}</Styled.Modal>
                </Styled.ModalContainer>
            </Modal>
            <TouchableOpacity onPress={() => props.hook[1](!props.hook[0])}>
                {props.icon}
            </TouchableOpacity>
        </>
    )
}
