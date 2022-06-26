import React from 'react'
import { ActivityIndicator } from 'react-native'
import { Colors } from '../../styles'
import * as Styled from './Loading.styles'

export const Loading = () => {
    return (
        <Styled.LoadingContainer>
            <ActivityIndicator size="large" color={Colors.primary} />
        </Styled.LoadingContainer>
    )
}
