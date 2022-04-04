import React from 'react'
import { SvgXml } from 'react-native-svg'
import { Colors } from '../../styles'

const UserIcon = () => {
    const xml = `
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 7.57895C8 11.7575 11.5893 15.1579 16 15.1579C20.4107 15.1579 24 11.7575 24 7.57895C24 3.40042 20.4107 0 16 0C11.5893 0 8 3.40042 8 7.57895ZM30.2222 32H32V30.3158C32 23.8164 26.416 18.5263 19.5556 18.5263H12.4444C5.58222 18.5263 0 23.8164 0 30.3158V32H30.2222Z" fill="${Colors.primary}"/>
        </svg>      
    `

    return <SvgXml xml={xml} />
}

export default UserIcon
