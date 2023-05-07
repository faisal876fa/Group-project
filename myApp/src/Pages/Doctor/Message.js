import { Button, TopNav } from 'govuk-react'
import React from 'react'
import MyFooter from '../../Components/MyFooter'
import {Link, useParams} from 'react-router-dom'

export default function Message() {
    const {docID} = useParams();
  return (
    <div>
        <TopNav/>
        <div className='logout'>
        <Link to={`/Doctor/${docID}`}>
        <Button>
            <p>Patient record has been updated</p>
            <small>click anywhere on the button to go to the main page</small>
        </Button>
        </Link>
        </div>
        <div  style={{borderTop : '10px solid #1d70b8',bottom:"0", position:"absolute",width:"100%"}}>
        <MyFooter/>
        </div>
    </div>
  )
}
