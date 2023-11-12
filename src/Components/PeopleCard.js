import React from 'react';
import { Card } from 'react-bootstrap';

function PeopleCard({img, name, email, profession}) {
  return (
    <Card style={{ width: '13rem' }} className='mb-5 text-center py-3 card border-0'>
        <div className='d-flex justify-content-center '>
            <div className='d-flex justify-content-center ps-2' id='divImg'>
                <Card.Img variant="top" src={img} className='rounded-circle img-fluid' id='image'/>
            </div>
            <div className='d-flex justify-content-end'>
                <i class="bi bi-three-dots-vertical" role='button'></i>
            </div>
        </div>
      <Card.Body className='p-0 py-3'>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {email}
        </Card.Text>
        <Card.Text className='border-top pt-3 profession'>
          {profession}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default PeopleCard