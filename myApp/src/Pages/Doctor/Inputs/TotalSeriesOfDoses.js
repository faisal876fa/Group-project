import { TopNav, Heading, H5, Button, Radio, H3 } from 'govuk-react'
import React, {useState} from 'react'
import MyFooter from '../../../Components/MyFooter'
import {Link, useParams, useNavigate} from 'react-router-dom'
export default function TotalSeriesOfDoses() {

  const {NHSNumber} = useParams();
    const {docID} = useParams();
    const {dose} = useParams();
    const {VaccinationDate} = useParams();
    const {VaccineManufacturer} = useParams();
    const {DiseaseTargeted} = useParams();
    const {VaccineType} = useParams();
    const {Product} = useParams();
    const {VaccineBatchNumber} = useParams();
    const {CountryOfVaccination} = useParams();
    const {Authority} = useParams();
    const {Site} = useParams();

    const [inputs,setInputs] = useState({
        NHSNumber: `${NHSNumber}`,
        DoseNo : `${dose}`,
        VaccinationDate : `${VaccinationDate}`,
        VaccineManufacturer: `${VaccineManufacturer}`,
        DiseaseTargeted: `${DiseaseTargeted}`,
        VaccineType: `${VaccineType}`,
        Product: `${Product}`,
        VaccineBatchNumber: `${VaccineBatchNumber}`,
        CountryOfVaccination: `${CountryOfVaccination}`,
        Authority: `${Authority}`,
        Site: `${Site}`,
        TotalSeriesOfDoses: "",
        DisplayName: "",
        SnomedCode: "",
        DateEntered: "",
        ProcedureCode: "",
        Booster: "0"

    });

    const TotalSeriesOfDoses = inputs.TotalSeriesOfDoses;
    let navigate = useNavigate();

    function handleSubmit(event) {
      if(TotalSeriesOfDoses=="") {
        document.getElementById("box").style.display="block";
        document.getElementById("error-box").style.display="block";
        document.getElementById("error-message-1").style.display="block";
        document.getElementById("normal-box").style.display="none";
        event.preventDefault();
        return;
      }
      else{
      navigate(`/DisplayName/${NHSNumber}/${docID}/${dose}/${VaccinationDate}/${VaccineManufacturer}/${DiseaseTargeted}/${VaccineType}/${Product}/${VaccineBatchNumber}/${CountryOfVaccination}/${Authority}/${Site}/${TotalSeriesOfDoses}`);
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
              <div>Total series of Doses</div></H5>
            </div>

            <div id='error-box'>
              <H3>Total series of Doses</H3>
              <div id="error-message-1">Total series of Doses should not be empty</div>            
              <Radio name='TotalSeriesOfDoses' onChange={handleChange} value={1} >1</Radio>
              <Radio name='TotalSeriesOfDoses' onChange={handleChange} value={2} >2</Radio>
            </div>
            <div id='normal-box'>
            <H3>Total series of Doses</H3>            
            <Radio name='TotalSeriesOfDoses' onChange={handleChange} value={1} >1</Radio>
            <Radio name='TotalSeriesOfDoses' onChange={handleChange} value={2} >2</Radio>
            </div>
            <Button>Continue</Button>
        </form>
        </div>
        <div  style={{borderTop : '10px solid #1d70b8'}}>
        <MyFooter/>
      </div>
    </div>
  )
}
