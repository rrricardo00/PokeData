import React from 'react'
import { LoadMoreButton } from '../../Styles/LoadMoreStyle'

const LoadMore = ({ children, funct, functionValue, disabled }) => {

    const handleClick = () => {
        funct(functionValue+12)
    }

    return (
        <LoadMoreButton disabled={disabled} onClick={handleClick}>{children}</LoadMoreButton>
    )
}

export default LoadMore