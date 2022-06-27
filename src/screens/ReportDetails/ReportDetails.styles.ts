import styled from 'styled-components'
import { Text, View } from 'react-native'
import { Font, Spacing, Colors } from '../../styles'

export const ReportDetailsText = styled(Text)`
    color: ${Colors.white};
    font-family: ${Font.montserratMedium};
    font-size: ${Spacing.xl};
    margin-bottom: ${Spacing.l};
`

export const ReportDetailsValueLabel = styled(Text)`
    color: ${Colors.white};
    font-family: ${Font.montserratMedium};
    font-size: ${Spacing.l};
    color: ${Colors.black};
`

export const ReportDetailsValueValueContainer = styled(View)`
    flex-direction: row;
    justify-content: space-evenly;
    padding: ${Spacing.m};
`
export const ReportDetailsValueContainer = styled(View)`
    background-color: ${Colors.secondary};
    padding: ${Spacing.m};
    border-radius: ${Spacing.m};
    margin-bottom: ${Spacing.m};
`
