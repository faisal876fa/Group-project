import { Table, TopNav, ArrowLeft, Heading, Input, Button, Label } from 'govuk-react'
import React, {useState, useEffect} from 'react'
import MyFooter from '../../Components/MyFooter'
import {Link, useParams} from 'react-router-dom'
import axios from 'axios'

export default function MedicalRecords() {

    const {NHSnumber} = useParams();

    const [inputs,setInputs] = useState({
        recordId : null,
        doseNo : null,
        NHSnumber : `${NHSnumber}`,
        vaccineManu : ""
    });

    

    /*useEffect(()=>
    {
        getPatients();
    },[]
     
    )

    function getPatients() {

        axios.get(`http://localhost:80/api/user/${NHSnumber}`).then(function(response) {
            setInputs(response.data);
            console.log(response.data);
        })
    }*/


    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        setInputs({...inputs, [name] : value});
    }

    function handleClick(event) {
        event.preventDefault();
        axios.post('http://localhost:80/DB/patient.php',inputs);
        console.log(inputs);
    }

  return (
    <div>
        <TopNav/>
        <Link to="/FindPatient"><ArrowLeft className='arrow'/></Link>
        <Heading className='header'>Medical records</Heading>
        <div  className='table-medical-records'>
            <form onSubmit={handleClick}>

            <Label>record ID</Label>
            <Input name='recordId' onChange={handleChange} type='number' />
            <Label>Dose No</Label>
            <Input name='doseNo' onChange={handleChange} type='number'/> 
            <Label>Vaccine Manufacturer</Label>
            <Input name='vaccineManu' onChange={handleChange} type='text'/>


            
            
            <Button>Save</Button>
        </form>
        
        {/*<Table>
            <tr>
                <td>NHS number</td>
                <td><Input name='NHSnumber' onChange={handleChange} value={NHSnumber} ></Input></td>
            </tr>
        <tr>
            <td>Vaccination Date</td>
            <td><MyInput/></td>
  </tr>
        <tr>
            <td>Vaccine Manufacturer</td>
            <td><Input name='vaccineManu' onChange={handleChange}/></td>
        </tr>
        <tr>
            <td>Disease targeted</td>
            <td><Input onChange={handleChange}/></td>
        </tr>
        <tr>
            <td>Vaccine type</td>
            <td><Input onChange={handleChange}/></td>
        </tr>
        <tr>
            <td>Product</td>
            <td><Input onChange={handleChange}/></td>
        </tr>
        <tr>
            <td>Vaccine Batch Number</td>
            <td><Input onChange={handleChange}/></td>
        </tr>
        <tr>
            <td>Country of vaccination</td>
            <td><Input onChange={handleChange}/></td>
        </tr>
        <tr>
            <td>Authority</td>
            <td><Input onChange={handleChange}/></td>
        </tr>
        <tr>
            <td>Site</td>
            <td><Input onChange={handleChange}/></td>
        </tr>
        <tr>
            <td>Total series of Doses</td>
            <td><Input onChange={handleChange}/></td>
        </tr>
        <tr>
            <td>Display name</td>
            <td><Input onChange={handleChange}/></td>
        </tr>
        <tr>
            <td>Snomed Code</td>
            <td><Input onChange={handleChange}/></td>
        </tr>
        <tr>
            <td>Date entered</td>
            <td><Input onChange={handleChange}/></td>
        </tr>
        <tr>
            <td>Procedure code</td>
            <td><Input onChange={handleChange}/></td>
        </tr>
        <tr>
            <td>Booster</td>
            <td><Input onChange={handleChange}/></td>
</tr>
        <tr>
            <td>Dose no</td>
            <td><Input name='doseNo' onChange={handleChange}/></td>
        </tr>
      </Table>
  <Button onClick={handleClick}>Update</Button>*/}

      
      </div>
      
      <div  style={{borderTop : '10px solid #1d70b8'}}>
        <MyFooter/>
      </div>
    </div>
  )
}
