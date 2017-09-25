import React from "react"
import styled from "styled-components"

import Counter from "../components/Counter"
import CedNoush from "../components/CedNoush"
import ArrowDate from "../components/ArrowDate"
import NewsletterForm from "../components/NewsletterForm"

const Content = styled.div`
  display: flex;
  padding: 100px;
  margin: auto;
  max-width: 1000px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
`
const Home = () => (
  <Content>
    <CedNoush />
    <ArrowDate />
    <Counter deadline={new Date(2018, 5, 23, 15)} />
    <NewsletterForm />
  </Content>
)

export default Home
