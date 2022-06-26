import React from 'react'
import * as Styled from './CustomButton.styles'
import { TouchableOpacity } from 'react-native'

interface ButtonProps {
    text: string
    onPress(): void
}

export const CustomButton = (props: ButtonProps) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <Styled.CustomButtonContainer>
                <Styled.CustomButtonLabel>{props.text}</Styled.CustomButtonLabel>
            </Styled.CustomButtonContainer>
        </TouchableOpacity>
    )
}
