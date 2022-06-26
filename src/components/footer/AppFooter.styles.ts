import styled from 'styled-components'
import { View } from 'react-native'
import { Spacing } from '../../styles'

export const AppFooterContainer = styled(View)`
    flex-direction: row;
    width: 100%;
    position: absolute;
    bottom: 0;
    padding: ${Spacing.l} ${Spacing.xl};
    align-items: center;
    justify-content: space-between;
`
