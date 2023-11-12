import React from 'react';
import Form  from 'react-bootstrap/Form';
import ButtonHeader from './ButtonHeader';
import { buttonsHeader } from './Utils';
import imgFilter from '../assets/Images/filter (1).png'


function PeopleHeader() {
    return (
        <div className='border-bottom' id='headerPeople'>
            <h2>People</h2>
            <div className='d-flex justify-content-end'>
                <Form className="d-flex w-50">
                    <Form.Control
                        type="search"
                        placeholder="Search by name"
                        className="me-2 rounded h-75 bg-light"
                        aria-label="Search"
                    />
                    <div className="searchButton">
                        <i className="bi bi-search" role="button"></i>
                    </div>
                </Form>
            </div>
            <div className='d-flex'>
                <a href="#All" className='mx-3 link-all'>All</a>
                <a href="#Organisation" className='mx-2'>Organisation</a>
            </div>

            <div className='d-flex py-4'>
                {buttonsHeader.map((elem) => (
                    <ButtonHeader title1={elem.title1} title2={elem.title2}/>    
                ))}
                <button type="button" className='btn border col-md-2 py-2 mx-3 px-2 rounded bg-white'>More <img src={imgFilter} alt="img" className='mx-2' /></button>
            </div>
        </div>
    )
}

export default PeopleHeader