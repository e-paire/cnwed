import React from "react"
import {Link} from "react-router"

import CedNoush from "../components/CedNoush"
import Content from "../components/Content"

const Contact = () => (
  <Content>
    <Link to="/" style={{width: "100%"}}>
      <CedNoush />
    </Link>
    <p>We received your message. Thank you very much. We will contact soon !</p>
  </Content>
)

export default Contact
