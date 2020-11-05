import React from 'react'
import { Route } from 'react-router-dom'

const LayoutRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Layout {...rest}>
        <Component {...props} {...rest} />
      </Layout>
    )}
  />
)

export default LayoutRoute
