import React from 'react'

export const Form = () => {
  return (
    <div className="form-container">
    <form className="dark-form">
      <h2 className="form-heading">Sign Up</h2>
      <div style={{width:"80%", margin:"auto"}}>
      <label className="form-label">Enter your name:</label>
      <input className="form-input" type="text" placeholder="Name" />

      <label className="form-label">Enter your email:</label>
      <input className="form-input" type="email" placeholder="example@mail.com" />

      <label className="form-label">Enter your password:</label>
      <input className="form-input" type="password" placeholder="Password" />

      <input type="submit" className="form-submit" value="Submit" />
      </div>
    </form>
  </div>
  )
}
