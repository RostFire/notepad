import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 20px auto;
  text-align: center;
`

const AppAuthor = styled.p`
    font-size: 1.2rem;
`

const AppTitle = styled.h1`
  font-family: 'Segoe UI', 'sans-serif';
  margin: 40px auto 40px;
`

const Layout = ({children}) => {

    return (
        <Container>
            <AppAuthor>Rostysław Puzankow</AppAuthor>
            <AppTitle>Simple Notepad</AppTitle>
            {children}
        </Container>
    )
}

export default Layout
