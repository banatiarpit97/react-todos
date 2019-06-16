import React, { useState } from 'react';

export const GlobalContext = React.createContext();

export const GlobalProvider = (props) => {
    const [loggedIn, setLoginState] = useState(false);

    const changeStatus = (status) => {
        setLoginState(status)
    }

    return (
        <GlobalContext.Provider 
            value={{loggedIn: loggedIn, changeStatus: changeStatus}}
        >
            {props.children}
        </GlobalContext.Provider>
    );
}
