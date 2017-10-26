import React from "react"
import {Link} from "react-router"

import CedNoush from "../components/CedNoush"
import ContactForm from "../components/ContactForm"
import Content from "../components/Content"

const Contact = () => (
  <Content>
    <Link to="/" style={{width: "100%"}}>
      <CedNoush />
    </Link>
    <p>Send us paper mail: 3 rue Colette Apt D14 31200 Toulouse,</p>
    <p>call Noushka: 06 79 89 96 23,</p>
    <p>or use the contact form below:</p>
    <ContactForm />
  </Content>
)

export default Contact
