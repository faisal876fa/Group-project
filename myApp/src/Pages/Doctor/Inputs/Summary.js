import { TopNav, Heading, Input, Button, Radio } from 'govuk-react'
import React, {useState} from 'react'
import MyFooter from '../../../Components/MyFooter'
import {Link, useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'

export default function Summary() {

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
    const {TotalSeriesOfDoses} = useParams();
    const {DisplayName} = useParams();
    const {SnomedCode} = useParams();
    const {DateEntered} = useParams();
    const {ProcedureCode} = useParams(); 

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
        TotalSeriesOfDoses: `${TotalSeriesOfDoses}`,
        DisplayName: `${DisplayName}`,
        SnomedCode: `${SnomedCode}`,
        DateEntered: `${DateEntered}`,
        ProcedureCode: `${ProcedureCode}`,
        Booster: "0"

    });


    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        setInputs({...inputs, [name] : value});
    }
    let navigate = useNavigate();

    function handleClick(event) {
        navigate(`/Message/${NHSNumber}/${docID}`);
        event.preventDefault();
        axios.post('http://localhost:80/DB/gp_vaccines.php',inputs);
        axios.post('http://localhost:80/DB/nhs_vaccines.php',inputs);
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
            <form>

            <div className='info'>Dose no</div> 
            {inputs.DoseNo}<br/><br/>

            <div className='info'>Vaccination Date</div> 
            {inputs.VaccinationDate}<br/><br/>
        
        
            <div className='info'>Vaccine Manufacturer</div>
            {inputs.VaccineManufacturer}<br/><br/>
        
            <div className='info'>Disease targeted</div>
            {inputs.DiseaseTargeted}<br/><br/>
        
            <div className='info'>Vaccine type</div>
            {inputs.VaccineType}<br/><br/>
         
            <div className='info'>Product</div>
            {inputs.Product}<br/><br/>
         
            <div className='info'>Vaccine Batch Number</div>
            {inputs.VaccineBatchNumber}<br/><br/>
         
            <div className='info'>Country of vaccination</div>
            {inputs.CountryOfVaccination}<br/><br/>
         
            <div className='info'>Authority</div>
            {inputs.Authority}<br/><br/>
         
            <div className='info'>Site</div>
            {inputs.Site}<br/><br/>
         
            <div className='info'>Total series of Doses</div>  
            {inputs.TotalSeriesOfDoses}<br/><br/>          
            

            <div className='info'>Display name</div>
            {inputs.DisplayName}<br/><br/>
         
            <div className='info'>Snomed Code</div>
            {inputs.SnomedCode}<br/><br/>
         
            <div className='info'>Date entered</div>
            {inputs.DateEntered}<br/><br/>
         
            <div className='info'>Procedure code</div>
            {inputs.ProcedureCode}<br/><br/>

            <Button onClick={handleClick}>Update</Button><br/>
            
        </form>
        </div>
        <div  style={{borderTop : '10px solid #1d70b8'}}>
        <MyFooter/>
      </div>
    </div>
  )
}
