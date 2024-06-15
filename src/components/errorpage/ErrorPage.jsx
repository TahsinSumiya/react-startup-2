import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
      404 error ! page not found
      <br />
      <Link to='/'>go to home</Link>
    </div>
  )
}

export default ErrorPage
