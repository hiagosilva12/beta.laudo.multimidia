import React from 'react'
import { createGlobalStyle } from 'styled-components'

import { Layouts } from './components/Layouts'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: sans-serif;
    color: #141414;
    h1{font-size: 28px;}
    h2{font-size: 16px;}
  }
`

export default function App() {
  return(
    <>
      <GlobalStyle />
      <Layouts />
    </>
  )
}