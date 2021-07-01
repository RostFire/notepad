import React, {createContext, useState} from 'react'

const UserContext = createContext({})

export const UserProvider = ({children}) => {
    const [auth, setAuth] = useState({
        signedIn: false,
        login: null,
    })

    const user = {
        auth,
        setter: login => {
            setAuth({
                signedIn: !!login,
                login,
            })
        },
    }

    return(
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext
