import React from 'react'
import * as Styled from './FormField.styles'

interface CustomButtonProps {
    text: string
    onPress(): void
    submit?: boolean
}

export const CustomButton = (props: CustomButtonProps) => {
    return (
        <Styled.SubmitButtonContainer>
            <Styled.SubmitButton onPress={props.onPress}>
                <Styled.SubmitButtonLabel>{props.text}</Styled.SubmitButtonLabel>
            </Styled.SubmitButton>
        </Styled.SubmitButtonContainer>
    )
}
