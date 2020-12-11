import * as React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LayoutRoute from '../components/Layout/LayoutRoute'
import Layout from '../components/Layout/Layout'
import * as projectsActions from '../actions/projectsActions'
import Projects from './Projects'

import SignIn from './SignIn'

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Switch>
        <LayoutRouteConnected
          exact
          path={'/projects/'}
          component={Projects}
          layout={Layout}
        />
        <LayoutRouteConnected
          exact
          path={'/projects/:id'}
          component={Projects}
          layout={Layout}
        />
        <Route path="/">
          <SignIn />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
const actionsMapDispatchToProps = dispatch => {
  return {
    projectsActions: bindActionCreators(projectsActions, dispatch)
  }
}

const mapStateToProps = state => {
  const { projects, lists, firebase, firestore } = state
  return {
    projects,
    lists,
    firebase,
    firestore
  }
}

const LayoutRouteConnected = connect(
  mapStateToProps,
  actionsMapDispatchToProps
)(LayoutRoute)

export default connect(mapStateToProps, actionsMapDispatchToProps)(App)
