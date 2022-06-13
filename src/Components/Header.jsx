import React from 'react'
import { NavLink } from 'react-router-dom'
import { Api } from '../API/Api'
import { Div, SectionHeader } from '../Styles/Style'
import Search from './Search'

const Header = () => {

    const api = React.useContext(Api)

    return (
        <SectionHeader display='flex'>
            <Div>
                <NavLink className='header-nav' to='/' end>Home</NavLink>
            </Div>
            <Div>
                <Search />
            </Div>
        </SectionHeader>
    )
}

export default Header