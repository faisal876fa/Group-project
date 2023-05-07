import React, {useState, useEffect} from 'react'
import MyFooter from '../../Components/MyFooter'
import { useParams} from 'react-router-dom'
import { Heading, TopNav, Link } from 'govuk-react'
import axios from 'axios'


export default function Home() {

  const {docID} = useParams();
  const [doctor,setDoctor] = useState([]);

  useEffect(()=> {
            axios.get(`http://localhost:80/DB/doctor.php/${docID}`).then(function(response) {
            setDoctor(response.data);
    })
    },[])

  return (
    <>

    
      <TopNav>
        <div className='navs' >
          <Link className="navlinks" href ={`/FindPatient/${docID}`} >Patient records</Link>
          <Link className="navlinks" href ={`/MyAppointments/${docID}`} >Appointments</Link>
          <Link className="navlinks" href ="/Logout" >Log out</Link>
        </div>
        
      </TopNav>
      
      
      <div className='nav'>
        <Heading><div className="header">Welcome {doctor.map((doctor,key)=>
                        <div key={key}>
                                <span>Dr. {doctor.firstName} {doctor.lastName}</span>
                                
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
