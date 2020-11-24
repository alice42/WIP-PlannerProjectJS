import * as React from 'react'
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LayoutRoute from '../components/Layout/LayoutRoute'
import Layout from '../components/Layout/Layout'
import * as projectsActions from '../actions/projectsActions'
import Projects from './Projects'

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Switch>
        <Route exact path="/">
          <Redirect to="/projects/" />
        </Route>
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
        <Redirect to="/" />
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
  const { projects, lists } = state
  return {
    projects,
    lists
  }
}

const LayoutRouteConnected = connect(
  mapStateToProps,
  actionsMapDispatchToProps
)(LayoutRoute)

export default connect(mapStateToProps, actionsMapDispatchToProps)(App)
