import React, { Context } from 'react'
import { User } from '../views/User'

interface UserContextInterface {
    user: User | null
    setUser: (user: User | null) => void
}

const defaultUser: UserContextInterface = {
    user: null,
    setUser: () => null,
}

export const UserContext: Context<UserContextInterface> = React.createContext(defaultUser)
