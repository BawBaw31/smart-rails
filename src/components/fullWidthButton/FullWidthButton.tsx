import React from 'react'
import * as Styled from './FullWidthButton.styles'
import { TouchableOpacity } from 'react-native'

interface ButtonProps {
    text: string
    onPress(): void
}

export const FullWidthButton = (props: ButtonProps) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <Styled.FullWidthButtonContainer>
                <Styled.FullWidthButtonLabel>{props.text}</Styled.FullWidthButtonLabel>
            </Styled.FullWidthButtonContainer>
        </TouchableOpacity>
    )
}
