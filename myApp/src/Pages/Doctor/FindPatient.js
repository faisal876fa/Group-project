import React, {useState, useEffect} from 'react'
import MyFooter from '../../Components/MyFooter'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Button, Input, Label, TopNav, H2, H5, H3 } from 'govuk-react'
import axios from 'axios'




export default function FindPatient() {

    const [patient,setPatients] = useState([]);
    const [inputs,setInputs] = useState({
       NHSNumber1: "",
       NHSNumber: ""
    });
    const {docID} = useParams();
    const NHS = inputs.NHSNumber;
    
    useEffect(()=>
    {
        getPatients();
    },[]
     
    )

    function getPatients() {

        axios.get(`http://localhost:80/DB/patient.php`).then(function(response) {
            setPatients(response.data);
            
        });
        
    }

    
    let navigate = useNavigate();

    function handleSubmit(event) {
      if(NHS=="") {
        document.getElementById("box").style.display="block";
        document.getElementById("error-box").style.display="block";
        document.getElementById("error-message-2").style.display="none";
        document.getElementById("error-message-1").style.display="block";
        document.getElementById("normal-box").style.display="none";
        event.preventDefault();
        return;
      }
      else if(NHS.length!=11) {
        document.getElementById("box").style.display="block";
        document.getElementById("error-box").style.display="block";
        document.getElementById("error-message-1").style.display="none";
        document.getElementById("error-message-2").style.display="block";
        document.getElementById("normal-box").style.display="none";
        event.preventDefault();
        return;
      }
      else if(NHS.length==11) {
        patient.filter((item)=>{
          if(item.NHSNumber==NHS) {
            navigate(`/Info/${NHS}/${docID}`);
          }
          else {
            document.getElementById("box").style.display="block";
            document.getElementById("error-box").style.display="block";
            document.getElementById("error-message-1").style.display="none";
            document.getElementById("error-message-2").style.display="block";
            document.getElementById("normal-box").style.display="none";
            event.preventDefault();
            return;
          }
        })
        
      }
      

      
    }
    

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        setInputs({...inputs, [name] : value});
    }

    return (
        <>
        <TopNav/>


        <Link to={`/Doctor/${docID}`} className='homeNav' style={{color:"black"}}>Home</Link>
        <hr style={{marginLeft:"18.5%",width:"63%"}}/>

        
        <form style={{marginLeft:"18.5%", marginBottom:"11.5%"}} onSubmit={handleSubmit}>
          <div id='box'>
          <H5>Fix the following:<br/>
          <div>NHS number</div></H5>
        </div>
        <H2>Enter NHS number of the patient</H2>
                    <div className='info'>Enter nhs number to find a patient</div><br/>
                    <div id='error-box'>
                      <Label>
                        <H3 id='nhs'>NHS number</H3>
                        <div id="error-message-1">NHS number should not be empty</div>
                        <div id="error-message-2">NHS number is not valid</div>
                      </Label>
                      <Input id='error-input' name= 'NHSNumber' onChange={handleChange} type='text' style={{width:"300px"}}/>
                    </div>


            <div id='normal-box'>
              <Label>
                    <H5 id='nhs'>NHS number</H5>
            </Label>
            <Input id='normal' name= 'NHSNumber' onChange={handleChange} type='text' style={{width:"300px"}}/><br/><br/>
            </div>
            
            
            
          
            <Button>Continue</Button>
        </form>

            
            
        
      <div  style={{borderTop : '10px solid #1d70b8',bottom:"0",width:"100%"}}>
        <MyFooter/>
      </div>

    </>
  );
}
