import React from 'react'
import styled from "styled-components/macro";

import { Header } from './Header'
import { Menu } from './Menu/Menu'

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 0px);
`

const Content = styled.div`
  max-width: 1425px;
  width: 100%;
  height: 100vh;

  @media (max-width: 1432px) {
    padding: 0 2rem;
    transition: .3s;
  }
  transition: .3s;
`

export function Layouts() {
  return (
    <Container>
      <Header />
      <Content>
        <Menu />
      </Content>
    </Container>
  )
}