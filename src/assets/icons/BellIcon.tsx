import React from 'react'
import { SvgXml } from 'react-native-svg'
import { Colors } from '../../styles'

const BellIcon = () => {
    const xml = `
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 32C17.101 32.0012 18.175 31.6937 19.0729 31.1203C19.9707 30.5468 20.6477 29.7358 21.0098 28.8H10.9902C11.3523 29.7358 12.0293 30.5468 12.9271 31.1203C13.825 31.6937 14.899 32.0012 16 32V32ZM28.4444 20.1376V12.8C28.4444 7.6528 24.56 3.3168 19.2978 2.0128C18.7769 0.832 17.504 0 16 0C14.496 0 13.2231 0.832 12.7022 2.0128C7.44 3.3184 3.55556 7.6528 3.55556 12.8V20.1376L0.520891 22.8688C0.355482 23.0171 0.224303 23.1934 0.134907 23.3876C0.0455113 23.5817 -0.000336798 23.7898 1.86253e-06 24V25.6C1.86253e-06 26.0243 0.187303 26.4313 0.520701 26.7314C0.854099 27.0314 1.30628 27.2 1.77778 27.2H30.2222C30.6937 27.2 31.1459 27.0314 31.4793 26.7314C31.8127 26.4313 32 26.0243 32 25.6V24C32.0003 23.7898 31.9545 23.5817 31.8651 23.3876C31.7757 23.1934 31.6445 23.0171 31.4791 22.8688L28.4444 20.1376Z" fill="${Colors.primary}"/>
        </svg>
    `

    return <SvgXml xml={xml} />
}

export default BellIcon
