import React from "react"

import CedNoush from "../components/CedNoush"
import Content from "../components/Content"
import Nav from "../components/Nav"

const Contact = () => (
  <Content>
    <Nav />
    <CedNoush />
    <p>
      Nous avons reçu votre message. Merci beaucoup. Nous allons vous
      recontacter bientôt
    </p>
    <p>
      <i>
        Wij hebben je bericht ontvangen. Heel erg bedankt. Wij bellen je zo snel
        mogelijk terug
      </i>
    </p>
  </Content>
)

export default Contact
