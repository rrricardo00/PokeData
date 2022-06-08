import React from 'react'

export const Api = React.createContext('')

export const ApiStorage = ({ children }) => {
    return (
        <Api.Provider value={
            {
                get: 'https://pokeapi.co/api/v2/pokemon'
            }
        }>
            {children}
        </Api.Provider>
    )
}