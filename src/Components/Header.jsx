import React from 'react'
import { NavLink } from 'react-router-dom'
import { Div, Section } from '../Styles/Style'
import Search from './Search'

const Header = () => {
    return (
        <Section display='flex'>
            <Div>
                <NavLink to='/' end>Home</NavLink>
            </Div>
            <Div>
                <Search />
            </Div>
        </Section>
    )
}

export default Header