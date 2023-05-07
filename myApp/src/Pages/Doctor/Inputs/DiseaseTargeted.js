import { TopNav, Heading, Input, Button, H5,H3 } from 'govuk-react'
import React, {useState} from 'react'
import MyFooter from '../../../Components/MyFooter'
import {Link, useParams, useNavigate} from 'react-router-dom'

export default function DiseaseTargeted() {

  const {NHSNumber} = useParams();
    const {docID} = useParams();
    const {dose} = useParams();
    const {VaccinationDate} = useParams();
    const {VaccineManufacturer} = useParams();

    const [inputs,setInputs] = useState({
        NHSNumber: `${NHSNumber}`,
        DoseNo : `${dose}`,
        VaccinationDate : `${VaccinationDate}`,
        VaccineManufacturer: `${VaccineManufacturer}`,
        DiseaseTargeted: "",
        VaccineType: "",
        Product: "",
        VaccineBatchNumber: "",
        CountryOfVaccination: "",
        Authority: "",
        Site: "",
        TotalSeriesOfDoses: "",
        DisplayName: "",
        SnomedCode: "",
        DateEntered: "",
        ProcedureCode: "",
        Booster: "0"

    });

    const DiseaseTargeted = inputs.DiseaseTargeted;
     let navigate = useNavigate();

    function handleSubmit(event) {
      if(DiseaseTargeted=="") {
        document.getElementById("box").style.display="block";
        document.getElementById("error-box").style.display="block";
        document.getElementById("error-message-1").style.display="block";
        document.getElementById("normal-box").style.display="none";
        event.preventDefault();
        return;
      }
      else {
      navigate(`/VaccineType/${NHSNumber}/${docID}/${dose}/${VaccinationDate}/${VaccineManufacturer}/${DiseaseTargeted}`);
      }
    }

    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        setInputs({...inputs, [name] : value});
    }
  return (
    <div>
      <TopNav/>
        <Link to={`/Doctor/${docID}`} className='homeNav' style={{color:"black"}}>Home</Link>
        &nbsp;&nbsp;&gt;&nbsp;&nbsp;
        <Link to={`/FindPatient/${docID}`} className='homeNav2' style={{color:"black"}}>Find Patient</Link>
        <hr/>
        <Heading className='header'>Medical records</Heading>
        <div  className='table-medical-records'>
            <form onSubmit={handleSubmit}>
              <div id='box'>
              <H5>Fix the following:<br/>
              <div>Disease targeted</div></H5>
            </div>

            <div id='error-box'>
              <H3>Disease targeted</H3>
              <div id="error-message-1">Disease targeted should not be empty</div>
              <Input name='DiseaseTargeted' onChange={handleChange}/>
            </div>

            <div id='normal-box'>
           <H3>Disease targeted</H3>
            <Input name='DiseaseTargeted' onChange={handleChange}/>
            </div><br/>
            <Button>Continue</Button>
        </form>
        </div>
        <div  style={{borderTop : '10px solid #1d70b8'}}>
        <MyFooter/>
      </div>
        
    </div>
  )
}
