import React, {useState, useEffect} from 'react'
import { Table, TopNav, H2, H3, ArrowLeft} from 'govuk-react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'


export default function Record() {

    const [inputs,setInputs] = useState([]);
    const [vaccines,setVaccines] = useState([]);
    const {NHSNumber} = useParams();
    const {docID} = useParams();
    
    useEffect(()=>
    {
        getPatient();
        
    },[]
    
     
    )

    function getPatient() {

        axios.get(`http://localhost:80/DB/patient.php/${NHSNumber}`).then(function(response) {
            setInputs(response.data[0]);
        });
        axios.get(`http://localhost:80/DB/gp_vaccines.php/${NHSNumber}`).then(function(response) {
            setVaccines(response.data);
        });
        
    }

    

  

  return (
    <div className='record' > 
        <TopNav/>
        
        <Link to={`/Doctor/${docID}`} className='homeNav' style={{color:"black"}}>Home</Link>
        &nbsp;&nbsp;&gt;&nbsp;&nbsp;
        <Link to={`/FindPatient/${docID}`} className='homeNav2' style={{color:"black"}}>Find Patient</Link>
        &nbsp;&nbsp;&gt;&nbsp;&nbsp;
        <Link to={`/Info/${NHSNumber}/${docID}`} className='homeNav2' style={{color:"black"}}>Patient info</Link>
        <hr/>
        <div style={{marginLeft:"18.5%", marginBottom:"11.5%"}}>
            
        <H2>Record</H2>
        
        
        <H3>Mr {inputs.Forename} {inputs.Surname}</H3>
        <div className='info'>Date of birth:</div>{inputs.PersonDOB}<br/><br/>
        <div className='info'>NHS number:</div>{inputs.NHSNumber}<br/><br/>
        <div className='info'>Postcode:</div>{inputs.Postcode}<br/><br/>
        <Table className="table">

            
        <tr>
            <th>Dose no</th>
            <th>Vaccination Date</th>
            <th>Vaccine Manufacturer</th>
            <th>Disease targeted</th>
            <th>Vaccine type</th>
            <th>Product</th>
            <th>Vaccine Batch Number</th>
            <th>Country of vaccination</th>
            <th>Authority</th>
            <th>Site</th>
            <th>Total series of Doses</th>
            <th>Display name</th>
            <th>Snomed Code</th>
            <th>Date entered</th>
            <th>Procedure code</th>
            <th>Booster</th>
        </tr>
        
        {vaccines.map((vaccines,key)=>
                        <tr key={key}>      
                            <td>{vaccines.DoseNo}</td>     
                            <td>{vaccines.VaccinationDate}</td>
                            <td>{vaccines.VaccineManufacturer}</td>
                            <td>{vaccines.DiseaseTargeted}</td>
                            <td>{vaccines.VaccineType}</td>
                            <td>{vaccines.Product}</td>
                            <td>{vaccines.VaccineBatchNumber}</td>
                            <td>{vaccines.CountryOfVaccination}</td>
                            <td>{vaccines.Authority}</td>
                            <td>{vaccines.Site}</td>
                            <td>{vaccines.TotalSeriesOfDoses}</td>
                            <td>{vaccines.DisplayName}</td>
                            <td>{vaccines.SnomedCode}</td>
                            <td>{vaccines.DateEntered}</td>
                            <td>{vaccines.ProcedureCode}</td>
                            <td>{vaccines.Booster}</td>
                        </tr>
        )}
      </Table>
      </div>
    </div>
  )
}
