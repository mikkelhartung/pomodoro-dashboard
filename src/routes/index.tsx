import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from '../pages/dashboard'

const Routes = () => {
  return (
    <main>
      <Switch>
        <Route component={Dashboard} path="/" exact />
      </Switch>
    </main>
  )
}

export default Routes
