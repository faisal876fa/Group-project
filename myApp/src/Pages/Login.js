import React from 'react'
import MyButton from '../Components/MyButton'
import {Link} from 'react-router-dom'

export default function Login() {
  const {docID} = "faisal876.fa";
  console.log({docID});
  return (
    <div>
        <Link to={`/Doctor/faisal876.fa`}><MyButton value="Doctor"/></Link>
        <Link to="/Admin"><MyButton value="Admin"/></Link>
        <Link to="/Patient/92233359811"><MyButton value="Patient"/></Link>
    </div>
  )
}
