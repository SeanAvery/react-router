import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>Link Options</h1>
        <ul role="nav">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/Repos">Repos</Link></li>
        </ul>
      </div>
    )
  }
})