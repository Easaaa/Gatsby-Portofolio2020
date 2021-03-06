import React from "react"
import { Link } from "gatsby"
import { createGlobalStyle } from "styled-components"

import { NavContainer, NavList } from './Layout.styles'

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Montserrat:300,400,400i,500,600,600i,700i,900&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    color: ${({ theme }) => theme.mint};
  }
  a {
    text-decoration: none;
    box-shadow: none;
    color: ${({ theme }) => theme.mint}; 
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <NavContainer>
        <NavList>
          <li>
            <Link to="/">Project</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>Contact</li>
        </NavList>
      </NavContainer>
      <main>{children}</main>
      <footer>leonardotononi@gmail.com</footer>
    </>
  )
}

export default Layout
