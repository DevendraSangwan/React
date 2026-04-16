import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null)
    return(
        <UserContext.Provider  value={{user, setUser}}>
        {/* .Provider ko use krke hi hm value ko access kr paate h  otherwise nhi  */}
        {/* value me vo sb things likhenge jis jiska access hme dena h */}
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
