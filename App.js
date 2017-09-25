import React from "react"
import {createApp} from "@phenomic/preset-react-app/lib/client"

import Routes from "./src/Routes"

export default createApp(Routes)

if (module.hot) {
  module.hot.accept(() => renderApp(Routes))
}
