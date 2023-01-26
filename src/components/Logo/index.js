import React from "react";
import styled from "styled-components";

const LogoContainer = styled.div`
    display: flex;
`

const LogoText = styled.h1`
    display: flex;
    justify-content: center;
    margin: 30px 0;
`

function Logo() {
    return (
        <LogoContainer>
            <LogoText>Tech Price Brasil</LogoText>
        </LogoContainer>
    )
}

export default Logo