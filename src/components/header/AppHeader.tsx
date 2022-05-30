import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { useState } from 'react'
import {
    NativeSyntheticEvent,
    TextInputSubmitEditingEventData,
    TouchableOpacity,
} from 'react-native'
import SearchIcon from '../../assets/icons/SearchIcon'
import { RouteParams } from '../../navigation/RootNavigator'
import * as Styled from './AppHeader.styles'

export const SearchHeader = () => {
    const [searchText, setSearchText] = useState('')

    const onSubmit = (e: NativeSyntheticEvent<TextInputSubmitEditingEventData>): void => {
        e.preventDefault()
        console.log(searchText)
    }

    return (
        <Styled.AppHeaderContainer>
            <Styled.SearchBarContainer>
                <SearchIcon />
                <Styled.SearchBar
                    onChangeText={setSearchText}
                    value={searchText}
                    placeholder="Press to search..."
                    onSubmitEditing={onSubmit}
                />
            </Styled.SearchBarContainer>
        </Styled.AppHeaderContainer>
    )
}

interface TitleHeaderProps {
    title: string
    goBack?: any
}

export const TitleHeader = ({ title, goBack }: TitleHeaderProps) => {
    const navigation = useNavigation<NativeStackNavigationProp<RouteParams>>()
    return (
        <Styled.AppHeaderContainer>
            {goBack && (
                <TouchableOpacity
                    onPress={() => {
                        navigation.canGoBack() ? navigation.goBack() : navigation.navigate(goBack)
                    }}
                >
                    <Styled.BackArrow />
                </TouchableOpacity>
            )}
            <Styled.PageTitle>{title}</Styled.PageTitle>
        </Styled.AppHeaderContainer>
    )
}
