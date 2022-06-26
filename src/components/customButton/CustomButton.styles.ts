import styled from 'styled-components'
import { Text, View } from 'react-native'
import { Colors, Font, Spacing } from '../../styles'

export const CustomButtonContainer = styled(View)`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.gray};
    border-radius: 10px;
`

export const CustomButtonLabel = styled(Text)`
    font-size: 18px;
    padding: ${Spacing.l};
    font-family: ${Font.montserratExtrabold};
    color: ${Colors.white};
`
