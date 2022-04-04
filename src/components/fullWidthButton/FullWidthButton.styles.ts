import styled from 'styled-components'
import { Text, View } from 'react-native'
import { Colors, Font } from '../../styles/'

export const FullWidthButtonContainer = styled(View)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: ${Colors.gray};
    border-radius: 10px;
    margin-bottom: 24px;
`

export const FullWidthButtonLabel = styled(Text)`
    font-size: 30px;
    padding: 32px 16px;
    font-family: ${Font.montserratExtrabold};
    color: ${Colors.white};
`
