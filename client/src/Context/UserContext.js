import { createContext, useReducer, useState } from "react";

const UserContext = createContext()

export const UserProivder = ({children}) => {
    const userStorage = JSON.parse(localStorage.getItem('user'))

    const [user, setUser] = useState(userStorage ? userStorage : null)

    return (
        <UserContext.Provider value = {{user, setUser}} >{children}</UserContext.Provider>
    )
}

export default UserContext
