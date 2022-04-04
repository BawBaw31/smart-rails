import React, { useState } from 'react'
import {
    NativeSyntheticEvent,
    TextInputSubmitEditingEventData,
    TouchableOpacity,
} from 'react-native'
import SearchIcon from '../../assets/icons/SearchIcon'
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
}

export const TitleHeader = ({ title }: TitleHeaderProps) => {
    return (
        <Styled.AppHeaderContainer>
            <TouchableOpacity
                onPress={() => {
                    console.log('back clicked')
                    // navigation.navigate('')
                }}
            >
                <Styled.BackArrow />
            </TouchableOpacity>
            <Styled.PageTitle>{title}</Styled.PageTitle>
        </Styled.AppHeaderContainer>
    )
}
