import React from "react"
import styled from "styled-components"
import {Link} from "react-router"

import Counter from "../components/Counter"
import CedNoush from "../components/CedNoush"
import ArrowDate from "../components/ArrowDate"
import NewsletterForm from "../components/NewsletterForm"
import Content from "../components/Content"

const ContactUsLink = styled(Link)`
  color: #e5bc53;
  text-align: center;
`

const Home = () => (
  <Content>
    <Link to="/" style={{width: "100%"}}>
      <CedNoush />
    </Link>
    <ArrowDate />
    <Counter deadline={new Date(2018, 5, 23, 15)} />
    <NewsletterForm />
    <ContactUsLink to="/contact">Or contact us !</ContactUsLink>
  </Content>
)

export default Home
