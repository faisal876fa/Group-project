import React, {useState, useEffect} from 'react'
import { Table, TopNav, Heading, ArrowLeft} from 'govuk-react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'


export default function Record() {

    const [inputs,setInputs] = useState([]);
    const {NHSnumber} = useParams();

    
    useEffect(()=>
    {
        getPatient();
    },[]
     
    )

    function getPatient() {

        axios.get(`http://localhost:80/DB/patient.php/${NHSnumber}`).then(function(response) {
            setInputs(response.data[0]);
            console.log(response.data);
        })
    }

  

  return (
    <div>
        <TopNav/>
        <Link to="/FindPatient"><ArrowLeft className='arrow'/></Link>
        <Heading className='header'>Record</Heading>
        <Table>

            <tr>
                <td>First name</td>
                <td>{inputs.fName}</td>
            </tr>
            <tr>
                <td>Last name</td>
                <td>{inputs.lname}</td>
            </tr>
            <tr>
                <td>NHS number</td>
                <td>{inputs.NHSnumber}</td>
            </tr>
        <tr>
            <td>Vaccination Date</td>
            <td></td>
  </tr>
        <tr>
            <td>Vaccine Manufacturer</td>
            <td></td>
        </tr>
        <tr>
            <td>Disease targeted</td>
            <td></td>
        </tr>
        <tr>
            <td>Vaccine type</td>
            <td></td>
        </tr>
        <tr>
            <td>Product</td>
            <td></td>
        </tr>
        <tr>
            <td>Vaccine Batch Number</td>
            <td></td>
        </tr>
        <tr>
            <td>Country of vaccination</td>
            <td></td>
        </tr>
        <tr>
            <td>Authority</td>
            <td></td>
        </tr>
        <tr>
            <td>Site</td>
            <td></td>
        </tr>
        <tr>
            <td>Total series of Doses</td>
            <td></td>
        </tr>
        <tr>
            <td>Display name</td>
            <td></td>
        </tr>
        <tr>
            <td>Snomed Code</td>
            <td></td>
        </tr>
        <tr>
            <td>Date entered</td>
            <td></td>
        </tr>
        <tr>
            <td>Procedure code</td>
            <td></td>
        </tr>
        <tr>
            <td>Booster</td>
            <td></td>
</tr>
        <tr>
            <td>Dose no</td>
            <td></td>
        </tr>
      </Table>
    </div>
  )
}
