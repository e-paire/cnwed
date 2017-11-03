import React from "react"

import CedNoush from "../components/CedNoush"
import ContactForm from "../components/ContactForm"
import Content from "../components/Content"
import Nav from "../components/Nav"
import Link from "../components/Link"

const Contact = () => (
  <Content>
    <Nav />
    <CedNoush />
    <p>
      Si vous avez une question ou simplement quelque chose à nous dire,
      n’hésitez pas à nous écrire ou à nous passer un coup de fil. Dans tous les
      cas, vous pouvez vous inscrire à notre <Link to="/">newsletter</Link> pour
      être au courant de toutes les nouvelles du mariage.
    </p>
    <p>
      <i>
        Heb je een vraag of wil je ons iets vertellen? Neem dan contact met ons
        op via de mail of via de telefoon. Schrijf je in voor onze nieuwsbrief
        om op de hoogte te blijven van al het nieuws over onze bruiloft.
      </i>
    </p>
    <p>
      3 rue Colette Apt D14<br />31200 Toulouse
    </p>
    <p>Noushka: +33 6 79 89 96 23,</p>
    <ContactForm />
  </Content>
)

export default Contact
