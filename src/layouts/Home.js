import React from "react"
import styled from "styled-components"

import Counter from "../components/Counter"
import CedNoush from "../components/CedNoush"
import ArrowDate from "../components/ArrowDate"
import NewsletterForm from "../components/NewsletterForm"
import Content from "../components/Content"
import Nav from "../components/Nav"
import Link from "../components/Link"

const ContactUsLink = styled(Link)`
  text-align: center;
`

const Home = () => (
  <Content>
    <Nav />
    <CedNoush />
    <ArrowDate />
    <Counter deadline={new Date(2018, 5, 23, 15)} />
    <NewsletterForm />
    <ContactUsLink to="/contact">
      Ou contactez nous / <i>neem contact met ons op</i>
    </ContactUsLink>
  </Content>
)

export default Home
