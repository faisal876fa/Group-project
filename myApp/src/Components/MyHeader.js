import React from 'react';
import {TopNav, Heading} from 'govuk-react';

export default function MyHeader(props) {
  return (
    <>
    <TopNav>
    </TopNav>
    <Heading className='header'>{props.value}</Heading>
    
    </>
  );
}
