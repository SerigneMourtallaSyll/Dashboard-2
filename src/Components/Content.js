import React from 'react';
import People from './People';
import PeopleBar from './PeopleBar';

function Content() {
  return (
    <div className='content d-flex flex-wrap justify-content-between ps-3 bg-light'>
        <People />
        <PeopleBar />
    </div>
  )
}

export default Content