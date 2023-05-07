import { ArrowLeft, Table } from 'govuk-react'
import React, {useState, useEffect} from 'react'
import MyFooter from '../../Components/MyFooter'
import MyHeader from '../../Components/MyHeader'
import axios from 'axios';
import { Link } from 'react-router-dom';



export default function MyAppointments() {

  const [appointments,setAppointments] = useState([]);

    


    useEffect(()=>
    {
        getAppointments();
    },[]
     
    )

    function getAppointments() {


        axios.get("http://localhost:80/DB/appointment.php").then(function(response) {
            setAppointments(response.data);
            console.log(response.data);
        });
    }

  return (
    <div className='myAppointments'>
      <MyHeader value="Upcoming appointments"/>
      <Link to="/Doctor"><ArrowLeft className='arrow'/></Link>
      <Table className='table'>
        <tr>
          <th>Appointment ID</th>
          <th>Date & Time</th>
          <th>NHS number</th>
        </tr>
        {appointments.map((appointments,key)=>
                        <tr key={key}>
                                <td>{appointments.appId}</td>
                                <td>{appointments.date_booked}</td>
                                <td>{appointments.NHSnumber}</td>
                        </tr>
                    )}
      </Table>
      <div  style={{borderTop : '10px solid #1d70b8',bottom:"0", position:"absolute",width:"100%"}}>
        <MyFooter/>
      </div>
    </div>
  )
}
