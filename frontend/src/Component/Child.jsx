import React from 'react'
import abc from "./style.module.css"
import { Link } from 'react-router-dom'

const Child = () => {
  return (
    <div>
      <div className={abc.div1}>
        <Link to="register">Create User</Link>
        <Link to="login">Login</Link>
        <Link to="details">User Details</Link>
      </div>
    </div>
  )
}

export default Child
