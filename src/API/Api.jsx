import React from 'react'

export const Api = React.createContext('')

export const ApiStorage = ({ children }) => {

    const [load, setLoad] = React.useState()

    return (
        <Api.Provider value={
            {
                get: 'https://pokeapi.co/api/v2/pokemon',
                load,
                setLoad
            }
        }>
            {children}
        </Api.Provider>
    )
}