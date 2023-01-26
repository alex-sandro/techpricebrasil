import React from "react"
import styled from "styled-components"
import Logo from '../Logo'

const HeaderContainer = styled.header`
    background-color: #F4F4F4;
    display: flex;
    justify-content: center;
`

function Header() {
    return (
        <HeaderContainer>
            <Logo></Logo>
        </HeaderContainer>
    )
}

export default Header