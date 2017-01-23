import React from 'react'
import { Link } from "react-router"

export default React.createClass({
  render() {
    return (
    <div>
      <div>Hello, React Router!</div>
      <ul role="nav">
        <Link to="/about">About</Link>
        <Link to="/repos">Repos</Link>
      </ul>
    </div>
    )
  }
})
