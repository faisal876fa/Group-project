import React, {useState, useEffect} from 'react'
import MyFooter from '../../Components/MyFooter'
import { Link } from 'react-router-dom'
import { Button, Input, Label, Table } from 'govuk-react'
import axios from 'axios'




export default function FindPatient() {

    const [search,setSearch] = useState("");
    const [patient,setPatient] = useState([]);

    useEffect(()=> {
            axios.get("http://localhost:80/DB/patient.php").then(function(response) {
            setPatient(response.data);
            console.log(response.data);
    })
    },[])


    return (
        <>
        <form>

            <Label>NHS number</Label>
            <Input name= 'NHSnumber' onChange={(e)=> setSearch(e.target.value)} type='text'/>
            {patient.filter((item)=> {
              if(search === "") {
                return ""
              }
              else if(item.NHSnumber === search) {
                return item;
              }
            }) 
            .map((item)=> {
              return <div key={item}><Table >
                <tr>
                  <th>First name</th>
                  <td>{item.fName}</td>
                  <th>Last name</th>
                  <td>{item.lname}</td>
                  <th>NHS number</th>
                  <td>{item.NHSnumber}</td>                 
                </tr>
              </Table>
             <Link to = {`/MedicalRecords/${item.NHSnumber}`} ><Button style={{marginRight: "50px", marginLeft: "35%"}}>Edit medical records</Button></Link>
             <Link to = {`/Record/${item.NHSnumber}`} ><Button>View patient record</Button></Link>
             </div>
            })}
        </form>

            
            
        
      <div  style={{borderTop : '10px solid #1d70b8',bottom:"0",position : 'absolute',width:"100%"}}>
        <MyFooter/>
      </div>

    </>
  );
}
