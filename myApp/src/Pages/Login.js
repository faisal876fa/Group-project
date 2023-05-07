import React from 'react'
import MyButton from '../Components/MyButton'
import {Link} from 'react-router-dom'

export default function Login() {
  return (
    <div>
        <Link to="/Doctor"><MyButton value="Doctor"/></Link>
        <Link to="/Admin"><MyButton value="Admin"/></Link>
        <Link to="/Patient"><MyButton value="Patient"/></Link>
    </div>
  )
}
