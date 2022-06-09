import React from 'react'

const Head = ({ title, description }) => {
 
    React.useEffect(() => {
        document.title = `PokeData | ${title}`
        document.querySelector('meta[name="description"]').setAttribute('content', description)
    }, [title])

    return <></>
}

export default Head