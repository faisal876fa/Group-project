import React from 'react'
import { Button } from 'govuk-react'
import { Link } from 'react-router-dom'

export default function MyButton(props) {
  function verifyDetails() {   

  }
  return (
    <p className='button'>
        <Button onClick={verifyDetails}>{props.value}</Button>
    </p>
  )
}
