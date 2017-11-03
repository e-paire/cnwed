import React from "react"

import CedNoush from "../components/CedNoush"
import Content from "../components/Content"
import Nav from "../components/Nav"
import Link from "../components/Link"

const BNLink = Link.withComponent("a")

const Stay = () => (
  <Content>
    <Nav />
    <CedNoush />
    <p>
      Le mariage se déroulera sur le lieu du{" "}
      <BNLink href="https://www.boscnegre-vacances.com/" target="_blank">
        village de vacances du Bosc Nègre
      </BNLink>, chez les parents de Noushka. Vous avez la possibilité de dormir
      sur place dans l’un des gîtes. Pour réserver,{" "}
      <Link to="/contact">contactez-nous</Link>.
    </p>
    <p>
      <i>
        Wij vieren onze bruiloft op de Bosc Negre. Als jullie een huisje willen
        huren kunnen jullie dat met Noushka overleggen, zij zal iedereen in de
        huisjes verdelen. Kijk op de <Link to="/contact">
          contactpagina
        </Link>{" "}
        voor de telefoonnummer
      </i>
    </p>
  </Content>
)

export default Stay
