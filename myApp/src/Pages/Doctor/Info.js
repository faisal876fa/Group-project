import { TopNav, Button, H3, ArrowLeft } from 'govuk-react'
import React, {useState, useEffect} from 'react'
import MyFooter from '../../Components/MyFooter'
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

export default function Info() {

    const [patients,setPatients] = useState([]);
    const NHSNumber = useParams();
    const {docID} = useParams();


    useEffect(()=>
    {
        getPatients();
    },[]
     
    )

    function getPatients() {

        axios.get(`http://localhost:80/DB/patient.php/${NHSNumber.NHS}`).then(function(response) {
            setPatients(response.data);
            
        });
        
    }

  return (
    <div>
        <TopNav/>
        <Link to={`/Doctor/${docID}`} className='homeNav' style={{color:"black"}}>Home</Link>
        &nbsp;&nbsp;&gt;&nbsp;&nbsp;
        <Link to={`/FindPatient/${docID}`} className='homeNav2' style={{color:"black"}}>Find Patient</Link>
        
        <hr/>
        <div className='details'>
        {patients.map((patients,key)=>
                        
                        <div key={key}>
                                <div className='info'>Patient name: </div>{patients.Forename} {patients.Surname}<br/><br/>
                                <div className='info'>NHS number:</div>{patients.NHSNumber}<br/><br/>
                                <div className='info'>Postcode:</div>{patients.Postcode}<br/><br/>
                                <br/><hr style={{width:"78%"}}/><br/>
                        </div>
                    )}
                <div id='p'></div>
                <div id='b'>
                <Link to = {`/CheckDose/${NHSNumber.NHS}/${docID}`} ><Button style={{marginRight:"3%"}}>Edit</Button></Link>
                <Link to = {`/Record/${NHSNumber.NHS}/${docID}`} ><Button>View</Button></Link>
                </div>
            </div>
        <div  style={{borderTop : '10px solid #1d70b8',bottom:"0",width:"100%"}}>
        <MyFooter/>
      </div>
    </div>
  )
}
