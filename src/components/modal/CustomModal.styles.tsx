import { Pressable, Text, View } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import styled from 'styled-components'
import { Font, Spacing } from '../../styles'

export const ModalContainer = styled(Pressable)`
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
`
export const Modal = styled(View)`
    background-color: white;
    border-radius: 10px;
    padding: ${Spacing.xxl};
    align-items: center;
    overflow: hidden;
`

export const ModalTitle = styled(Text)`
    margin-bottom: ${Spacing.l};
    color: ${Colors.black};
    font-family: ${Font.montserratSemiBold};
    font-size: 22px;
`
