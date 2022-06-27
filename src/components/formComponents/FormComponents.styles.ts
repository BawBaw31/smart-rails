import { Text, TextInput } from 'react-native'
import styled from 'styled-components'
import { Colors, Font, Spacing } from '../../styles'

export const FormTitle = styled(Text)`
    margin-bottom: ${Spacing.s};
    color: ${Colors.white};
    font-family: ${Font.montserratSemiBold};
    font-size: ${Spacing.xl};
`
export const FormLabel = styled(Text)`
    margin-bottom: ${Spacing.s};
    color: ${Colors.white};
    font-family: ${Font.montserratMedium};
    font-size: ${Spacing.l};
`

export const FormTextInput = styled(TextInput)`
    border-color: ${Colors.white};
    width: 100%;
    border-width: ${Spacing.xs};
    border-radius: ${Spacing.s};
    padding: ${Spacing.s};
    margin-right: ${Spacing.l};
    margin-bottom: ${Spacing.xl};
    background-color: ${Colors.white};
`

export const FormError = styled(Text)`
    color: ${Colors.error};
    margin-bottom: ${Spacing.s};
    text-align: center;
    font-family: ${Font.montserratMedium};
`
