import styled from 'styled-components'
import { TextInput, View, Text } from 'react-native'
import { Colors, Spacing, Font } from '../../styles'
import BackArrowIcon from '../../assets/icons/BackArrowIcon'

export const AppHeaderContainer = styled(View)`
    width: 100%;
    position: absolute;
    top: 0;
    background-color: ${Colors.background};
    padding: ${Spacing.s} ${Spacing.l};
    flex-direction: row;
    align-items: center;
`

export const SearchBarContainer = styled(View)`
    flex-direction: row;
    width: 100%;
    padding: ${Spacing.m};
    align-items: center;
    border-radius: 50px;
    background-color: ${Colors.primary};
`

export const SearchBar = styled(TextInput)`
    margin-left: ${Spacing.m};
    flex-grow: 2;
`
export const PageTitle = styled(Text)`
    font-family: ${Font.montserratExtrabold};
    font-size: 30px;
    color: ${Colors.white};
    margin-left: ${Spacing.l};
    text-transform: uppercase;
`
export const BackArrow = styled(BackArrowIcon)`
    margin-left: ${Spacing.l};
`
