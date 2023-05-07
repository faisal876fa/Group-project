import React, {useState, useEffect} from 'react'
import MyFooter from '../../Components/MyFooter'
import { useParams} from 'react-router-dom'
import { Heading, TopNav, Link } from 'govuk-react'
import axios from 'axios'


export default function Patient() {

  const {NHSNumber} = useParams();
  const [patient,setPatient] = useState([]);

  useEffect(()=> {
            axios.get(`http://localhost:80/DB/patient.php/${NHSNumber}`).then(function(response) {
            setPatient(response.data);
    })
    },[])

  return (
    <>

    
      <TopNav>
        <div className='navs' >
          <Link className="navlinks" >Book appointment</Link>
          <Link className="navlinks" href ={`/Cancel/${NHSNumber}`} >Cancel appointment</Link>
          <Link className="navlinks" href ={`/UpdateRecord/${NHSNumber}`} >Record</Link>
          <Link className="navlinks" href ="/Logout" >Log out</Link>
        </div>
        
      </TopNav>
      
      
      <div className='nav'>
        <Heading><div className="header">Welcome {patient.map((patient,key)=>
                        <div key={key}>
                                <span>{patient.firstName} {patient.lastName}</span>
                                
                        </div>
                    )} </div></Heading>
        <p><small>select an action you would like to perform</small></p>
        <br/>
        
      </div>
      <div  style={{borderTop : '10px solid #1d70b8',bottom:"0", position:"absolute",width:"100%"}}>
        <MyFooter/>
      </div>
    </>
  )
}

