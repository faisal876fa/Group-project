import { TopNav, Table, Link, H3, Button } from 'govuk-react'
import React, {useState, useEffect} from 'react'
import MyFooter from '../../Components/MyFooter'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

export default function Cancel() {
    const [appointments,setAppointments] = useState([]);
    const {NHSNumber} = useParams();

    useEffect(()=>
    {
        getAppointments();
    },[]
     
    )

    function getAppointments() {

        axios.get(`http://localhost:80/DB/patientAppointment.php/${NHSNumber}`).then(function(response) {
            setAppointments(response.data);
        });
        
        
    }

    let navigate = useNavigate();

    const deleteAppointment=(NHSNumber)=> {
        navigate(`/Patient/${NHSNumber}`);
        axios.delete(`http://localhost:80/DB/patientAppointment.php/${NHSNumber}/delete`).then(function(response) {
          console.log(response);
            getAppointments();
        });
    }

  return (
    <div>
        <TopNav/>
        <div className='appoint'>
          <H3>Upcoming appointments</H3>
          
        {appointments.map((appointments,key)=>
                        <div key={key}>
                                
                                <div className='info'>Date & time:</div>{appointments.date} at {appointments.time}<br/><br/>
                                
                                <br/><br/><hr style={{width:"78%"}}/><br/><br/>
                                
                        </div>
                    )}
                    <Button onClick={()=>deleteAppointment(NHSNumber)}>Cancel</Button>
                    
      
      </div>
      
      
      <div  style={{borderTop : '10px solid #1d70b8',bottom:"0",width:"100%", marginTop:"17%"}}>
        <MyFooter/>
      </div>
        
    </div>
  )
}
