import React, {useState, useEffect} from 'react'
import MyFooter from '../../Components/MyFooter'
import { useParams} from 'react-router-dom'
import { Heading, TopNav, Link } from 'govuk-react'
import axios from 'axios'


export default function Admin() {

  const {Admin_ID} = useParams();
  const [admin,setAdmin] = useState([]);

  useEffect(()=> {
            axios.get(`http://localhost:80/DB/patient.php/${Admin_ID}`).then(function(response) {
            setAdmin(response.data);
    })
    },[])

  return (
    <>

    
      <TopNav>
        <div className='navs' >
          <Link className="navlinks">Cancel appointment</Link>
          <Link className="navlinks" href ={`/ViewAppointment/${Admin_ID}`} >View appointment</Link>
          <Link className="navlinks" href ="/Logout" >Log out</Link>
        </div>
        
      </TopNav>
      
      
      <div className='nav'>
        <Heading><div className="header">Welcome {admin.map((admin,key)=>
                        <div key={key}>
                                <span>{admin.firstName} {admin.lastName}</span>
                                
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

