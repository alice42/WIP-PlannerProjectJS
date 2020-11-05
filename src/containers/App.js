import * as React from 'react'
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom'

import LayoutRoute from '../components/LayoutComponents/LayoutRoute'
import Layout from '../components/LayoutComponents/Layout'

import A from './Pages/PageA'
import B from './Pages/PageB'

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Switch>
        <Route exact path="/">
          <Redirect to="/A" />
        </Route>
        <LayoutRoute exact path={'/A'} component={A} layout={Layout} />
        <LayoutRoute exact path={'/B'} component={B} layout={Layout} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  )
}

export default App
