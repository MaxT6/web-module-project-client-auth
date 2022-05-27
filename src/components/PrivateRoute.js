import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const PrivateRoute = ({componet: Componet, ... rest}) => {
  return <Route
    {...rest}
      render={() => {
        if(localStorage.getItem("token")) {
          return <Componet />;
        } else {
          return <h1>You are not allowed here!</h1>
        }
      }}
  />
}

export default PrivateRoute;