import React from 'react'
import MyButton from '../../Components/MyButton'
import MyFooter from '../../Components/MyFooter'
import {Link} from 'react-router-dom'
import { Heading, TopNav } from 'govuk-react'
export default function Home() {
  return (
    <>
      <TopNav></TopNav>
      
      <div className='nav'>
        <Heading><div className="header">Welcome</div></Heading>
        <p><small>select an action you would like to perform</small></p>
        <br/>
        <div className='nav-bars'>
              <Link to="/FindPatient"><MyButton value="Patient records"/></Link>
              <Link to="/MyAppointments"><MyButton value="Upcoming appointments"/></Link>
              <Link to="/Logout"><MyButton value="Log out"/></Link>
        </div>
      </div>
      <div  style={{borderTop : '10px solid #1d70b8',bottom:"0", position:"absolute",width:"100%"}}>
        <MyFooter/>
      </div>
    </>
  )
}
