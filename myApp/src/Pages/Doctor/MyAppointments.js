import { TopNav, Table, Link, H3 } from 'govuk-react'
import React, {useState, useEffect} from 'react'
import MyFooter from '../../Components/MyFooter'
import axios from 'axios';
import { useParams } from 'react-router-dom';



export default function MyAppointments() {

  const [appointments,setAppointments] = useState([]);
  const [inputs,setInputs] = useState([]);

  const {docID} = useParams();

    useEffect(()=>
    {
        getAppointments();
    },[]
     
    )

    function getAppointments() {

        axios.get(`http://localhost:80/DB/appointment.php/${docID}`).then(function(response) {
            setAppointments(response.data);
        });
        
    }

  return (
    <div className='myAppointments'>
      <TopNav>
        <div className='navs' >
          <Link className="navlinks" href ={`/FindPatient/${docID}`} >Patient records</Link>
          <Link className="navlinks" href ={`/MyAppointments/${docID}`} >Appointments</Link>
          <Link className="navlinks" href ="/Logout" >Log out</Link>
        </div>
        
        </TopNav>


        <Link href={`/Doctor/${docID}`} className='homeNav' style={{color:"black"}}>Home</Link>
        <hr/>
        <div className='appoint'>
          <H3>Upcoming appointments</H3>
          
        {appointments.map((appointments,key)=>
                        <div key={key}>
                                <div className='info'>Patient name: </div>{appointments.Forename} {appointments.Surname}<br/><br/>
                                <div className='info'>NHS number:</div>{appointments.NHSNumber}<br/><br/>
                                <div className='info'>Date & time:</div>{appointments.date} at {appointments.time}<br/><br/>
                                <br/><br/><hr style={{width:"78%"}}/><br/><br/>
                        </div>
                    )}
      
      </div>
      <div  style={{borderTop : '10px solid #1d70b8',bottom:"0",width:"100%", marginTop:"17%"}}>
        <MyFooter/>
      </div>
    </div>
  )
}
