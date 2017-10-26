import React from "react"

import {Router, Route, browserHistory} from "react-router"

import HomeLayout from "./layouts/Home"
import ContactLayout from "./layouts/Contact"
import ThanksLayout from "./layouts/Thanks"

const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={HomeLayout} />
    <Route path="/contact" component={ContactLayout} />
    <Route path="/thanks" component={ThanksLayout} />
    <Route path="*" component={HomeLayout} />
  </Router>
)

export default Routes
