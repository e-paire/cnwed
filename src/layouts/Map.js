import React from "react"

import CedNoush from "../components/CedNoush"
import Content from "../components/Content"
import Nav from "../components/Nav"
import BnMap from "../components/Map"

const Map = () => (
  <Content>
    <Nav />
    <CedNoush />
    <div>
      <p>
        Le village de vacances du Bosc Nègre se trouve à Lacapelle-Biron, à la
        frontière entre le Lot-et-Garonne et la Dordogne. Pour venir sur place,
        plusieurs options :
      </p>
      <ul>
        <li>{"Voiture : à 1h d'Agen et 2h de Bordeaux ou Toulouse"}</li>
        <li>Train : la gare la plus proche est à Monsempron-Libos</li>
        <li>Avion : les aéroports les plus proches sont Bergerac et Agen</li>
      </ul>
      <p>
        <i>
          Jullie kennen allemaal wel de weg naar de Bosc Negre toe natuurlijk.
        </i>
      </p>
      <ul>
        <li>
          <i>
            Vliegtuig naar Bergerac. Dit jaar vliegt Transavia op vrijdag en
            maandag naar Nederland. Hopelijk blijft dat zo in 2018
          </i>
        </li>
        <li>
          <i>
            Vliegtuig naar Bordeaux of Toulouse kan natuurlijk ook. de twee
            steden liggen 2uur rijden van de Bosc Negre af
          </i>
        </li>
      </ul>
      <BnMap />
    </div>
  </Content>
)

export default Map
