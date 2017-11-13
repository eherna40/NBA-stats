// Dependencies
import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Compoents
import App from './components/App'
import Home from './containers/Home'
import Profile from './containers/Profile'
import Page404 from './components/Page404'

const AppRoutes = () =>
    <App>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/player/:id" component={Profile} />
            <Route component={Page404} />
        </Switch>
    </App>

export default AppRoutes