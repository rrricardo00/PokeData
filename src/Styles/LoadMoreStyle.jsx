import styled from 'styled-components'

export const LoadMoreButton = styled.button`
border: none;
min-width: 100px;
padding: 5px;
border-radius: 5px;
color: #3761A8;
background: #fff;
transition: all .5s ease;
box-shadow: 2px 2px 2px #c2c2c2, 4px 4px 4px #c2c2c2;
font-weight: 900;
cursor: pointer;

&:disabled{
    opacity: .3;
    cursor: wait;
}

&:hover{
    opacity: .7;
    box-shadow: 2px 2px 2px #3761A8, 4px 4px 4px #3761A8;
}

&:focus{
    box-shadow: 2px 2px 2px #3761A8, 4px 4px 4px #3761A8;
}

`