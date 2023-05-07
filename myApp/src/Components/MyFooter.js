import React from 'react'
import {Footer} from 'govuk-react'

export default function MyFooter() {
  return (
    <Footer>
        <div className='footer'>
            <p className='col'>
                NHS website
                <br/>
                <br/>
                Donations
            </p>
            <p className='col'>
                Technical problem
                <br/>
                <br/>
                COVID news
                <br/>
                <br/>
                Our policy
            </p>
            <p className='col'>
                About us
                <br/>
                <br/>
                Cookies
                
            </p>
        </div>
        <small>&#169;Crown copyright</small>
    </Footer>
  )
}
