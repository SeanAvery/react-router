import React from 'react'
import { Route, InexRoute } from 'react-router'
import App from './App'
import About from './Repos'
import Repo from './Repo'
import Home from './Home'

module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/repos" component={Repos}>
      <Route path="/repos/:userName/:repoName" component={Repo} />
    </Route>
    <Route path="/about" component={About} />
  </Route>
)
