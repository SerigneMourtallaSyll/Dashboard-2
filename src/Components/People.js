import React from 'react';
import { cards } from './Utils';
import PeopleCard from './PeopleCard';
import PeopleHeader from './PeopleHead';

function People() {
  return (
    <div className='bg-light col-md-8 col-12 py-3'>
      <PeopleHeader />
      <div className='d-flex justify-content-between flex-wrap people py-3'>
          {cards.map((elem, index) => (
              <PeopleCard img={elem.img} name={elem.name} email={elem.email} profession={elem.profession} key={index}/>
          ))}
      </div>
    </div>
  )
}

export default People