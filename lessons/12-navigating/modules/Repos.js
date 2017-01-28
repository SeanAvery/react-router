import React from 'react'
import NavLink from './NavLink'
import { browserHistory } from 'react-router'

export default React.createClass({

  // ask for 'router' from context
  contextTypes: {
    router: React.PropTypes.object
  },

  // handle Submit pushes path to browserHistory and to the router
  handleSubmit(e) {
    e.preventDefault()
    console.log(e)
    const userName = e.target.elements[0].value
    const repo = e.target.elements[1].value
    const path = `/repos/${userName}/${repo}`
    browserHistory.push(path)
    this.context.router.push(path)
  },

  render() {
    return (
      <div>
        <h2>Repos</h2>
        <ul>
          <li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
          <li><NavLink to="/repos/facebook/react">React</NavLink></li>
          <li>
            <form onSubmit={this.handleSubmit}>
              <input type="text" placeholder="user_name" /> / {' '}
              <input type ="text" placeholder="repo_name" /> {' '}
              <button type="submit">Go</button>
            </form>
          </li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
