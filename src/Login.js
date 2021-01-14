import React from 'react'

const Login = () => {
  return (
    <form>
      <>
        <input type="text" name="username" placeholder="username"/>
        <label htmlFor="username">username</label>
      </>
      <>
        <input type="password" name="password" placeholder="password"/>
        <label htmlFor="password">Password</label>
      </>
      <input type="submit" value="login"/>
    </form>

  )
}

export default Login
