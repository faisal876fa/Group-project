import React, {useState, useEffect} from 'react'
import { Table, TopNav, H2, H3, Button} from 'govuk-react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import MyFooter from '../../Components/MyFooter'
import axios from 'axios'

export default function CheckDose() {

    const [inputs,setInputs] = useState([]);
    
    const [vaccines,setVaccines] = useState([]);
    const a = vaccines.length
    const {NHSNumber} = useParams();
    const [booster,setBooster] = useState({
        NHSNumber: `${NHSNumber}`,
        Booster: "1"
    });
    let {docID} = useParams();
    let v = `/VaccinationDate`;
    let m = "";
    let dose = 1;
    var b = <Link to = {`${v}/${NHSNumber}/${docID}/${dose}`} ><Button>Edit medical record</Button></Link>;
    
                
               

        
            

    useEffect(()=>
    {
        getPatient();
        getVaccines();
    },[]
     
    )
    
    
    function getVaccines() {
        axios.get(`http://localhost:80/DB/gp_vaccines.php/${NHSNumber}`).then(function(response) {
            
            
            setVaccines(response.data);
            
        });
         

    }

    function getPatient() {

        axios.get(`http://localhost:80/DB/patient.php/${NHSNumber}`).then(function(response) {
            setInputs(response.data[0]);
        });
        

        
        
    }

    let navigate = useNavigate();

    function handleClick(event) {
        navigate(`/Message/${NHSNumber}/${docID}`);
        event.preventDefault();
        axios.put('http://localhost:80/DB/gp_vaccines.php',booster);
        axios.put('http://localhost:80/DB/nhs_vaccines.php',booster)        
    }

            
            

    

  return (
    <div>
        <TopNav/>
        
        <Link to={`/Doctor/${docID}`} className='homeNav' style={{color:"black"}}>Home</Link>
        &nbsp;&nbsp;&gt;&nbsp;&nbsp;
        <Link to={`/FindPatient/${docID}`} className='homeNav2' style={{color:"black"}}>Find Patient</Link>
        &nbsp;&nbsp;&gt;&nbsp;&nbsp;
        <Link to={`/Info/${NHSNumber}/${docID}`} className='homeNav2' style={{color:"black"}}>Patient info</Link>
        <hr/>
        <div style={{marginLeft:"18.5%", marginBottom:"11.5%"}}>
            {vaccines.length} doses are given to {inputs.Forename} {inputs.Surname}.


            
            
                {vaccines.filter((item)=>{
                var l = `/VaccinationDate`;
                var l1 = `/AddBooster`;
                if(item.Booster==0 && vaccines.length<2) {
                    v=l;           
                    dose = 2;
                    b = <Link to = {`${v}/${NHSNumber}/${docID}/${dose}`} ><Button>Edit medical record</Button></Link>
                }
                else if(item.Booster==1) {
                    m="This person has taken both vaccines and booster. As a result no new information can be added";
                    v=`/FindPatient`;
                    b = <Link to = {`${v}/${docID}`} ><Button>Back</Button></Link>                    
                }
                else if(item.Booster==0 && item.DoseNo==2)
                {

                    b = <Button onClick={handleClick}>Add booster</Button>
                }
                
                
            })
            
            }
            
            <br/><br/>
            
            <div>{m}</div>
            <div >{b}</div>
            
            

            
            

        </div>
        <div  style={{borderTop : '10px solid #1d70b8'}}>
        <MyFooter/>
      </div>

        
        
    </div>
  )
  

}
