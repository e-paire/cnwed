import React from "react"

import {Router, Route, browserHistory} from "react-router"

import HomeLayout from "./layouts/Home"
import ContactLayout from "./layouts/Contact"
import ThanksLayout from "./layouts/Thanks"
import StayLayout from "./layouts/Stay"
import MapLayout from "./layouts/Map"

const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={HomeLayout} />
    <Route path="/contact" component={ContactLayout} />
    <Route path="/stay" component={StayLayout} />
    <Route path="/map" component={MapLayout} />
    <Route path="/thanks" component={ThanksLayout} />
    <Route path="*" component={HomeLayout} />
  </Router>
)

export default Routes
