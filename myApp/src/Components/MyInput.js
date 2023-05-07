import React from 'react'
import { Input, Label} from 'govuk-react'
export default function MyInput(props) {
  return (
    <div>
        <form>
            <Label>{props.value}</Label>
            <Input style={{width : '200px', height : '30px'}} type="text"/>
        </form>
        
    </div>
  )
}
