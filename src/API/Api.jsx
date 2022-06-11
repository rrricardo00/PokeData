import React from 'react'

export const Api = React.createContext('')

export const ApiStorage = ({ children }) => {

    const [load, setLoad] = React.useState()
    const [limit, setLimit] = React.useState(12)

    return (
        <Api.Provider value={
            {
                get: 'https://pokeapi.co/api/v2/pokemon',
                load,
                setLoad,
                limit,
                setLimit
            }
        }>
            {children}
        </Api.Provider>
    )
}