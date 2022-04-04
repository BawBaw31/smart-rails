import React from 'react'
import { AppFooter } from '../footer/AppFooter'
import { SearchHeader, TitleHeader } from '../header/AppHeader'
import * as Styled from './Layouts.styles'

interface LayoutProps {
    children: JSX.Element
}

interface TitleLayoutProps {
    children: JSX.Element
    title: string
}

export const SearchLayout = (props: LayoutProps) => {
    return (
        <Styled.SafeAreaContainer>
            <Styled.PageContainer>
                <SearchHeader />
                <Styled.PageContent>{props.children}</Styled.PageContent>
                <AppFooter />
            </Styled.PageContainer>
        </Styled.SafeAreaContainer>
    )
}

export const DisconnectedLayout = (props: LayoutProps) => {
    return (
        <Styled.SafeAreaContainer>
            <Styled.KeyboardAvoidingContainer behavior="padding">
                {props.children}
            </Styled.KeyboardAvoidingContainer>
        </Styled.SafeAreaContainer>
    )
}

export const TitleLayout = (props: TitleLayoutProps) => {
    return (
        <Styled.SafeAreaContainer>
            <Styled.PageContainer>
                <TitleHeader title={props.title} />
                <Styled.PageContent>{props.children}</Styled.PageContent>
                <AppFooter />
            </Styled.PageContainer>
        </Styled.SafeAreaContainer>
    )
}
