import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    return <AppContext.Provider value='hello'>{children}</AppContext.Provider>
}

// approach 2 for custom hook
export const useGlobalContext =() => {
    return useContext(AppContext)
}
export { AppContext, AppProvider }