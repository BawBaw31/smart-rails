import styled from 'styled-components'
import { Colors } from '../../styles'
import { View, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native'

export const SafeAreaContainer = styled(SafeAreaView)`
    flex: 1;
    background-color: ${Colors.background};
    padding-top: ${Platform.OS === 'android' ? '25px' : 0};
`

export const PageContainer = styled(View)`
    flex: 1;
`

export const PageContent = styled(View)`
    flex: 1;
    margin: 80px 16px 112px 16px;
`

export const KeyboardAvoidingContainer = styled(KeyboardAvoidingView)`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`
