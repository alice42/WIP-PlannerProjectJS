import React from 'react'
import { Route, Redirect } from 'react-router-dom'
// import { useFirebase } from 'react-redux-firebase'
import { isLoaded, isEmpty } from 'react-redux-firebase'
import { useSelector } from 'react-redux'

const LayoutRoute = ({ component: Component, layout: Layout, ...rest }) => {
  const auth = useSelector(state => state.firebase.auth)
  return (
    <Route
      {...rest}
      render={props =>
        !isLoaded(auth) ? (
          <div>Loading</div>
        ) : !isEmpty(auth) ? (
          <Layout {...rest}>
            <Component {...props} {...rest} />
          </Layout>
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  )
}
export default LayoutRoute
