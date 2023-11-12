import React from 'react';
import imageProfil from '../assets/Images/img-team-3.jpg';
import Dropdown from 'react-bootstrap/Dropdown';
import Form  from 'react-bootstrap/Form';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark py-3" id='navbar'>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="bi bi-justify"></i>
            </button>
            <div className='w-50 ps-2'>
                <Form className="d-flex">
                    <Form.Control
                        type=""
                        placeholder="Search"
                        className="me-2 rounded h-75"
                        aria-label="Search"
                    />
                    <div className="searchButton">
                        <i className="bi bi-search" role="button"></i>
                    </div>
                </Form>
            </div>
            <div className="collapse navbar-collapse w-25" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ms-auto">
                    <li>
                        <span class="fs-3 me-2 me-md-4 my-auto position-relative clock"><i className="bi bi-bell"></i>
                            <span className="position-absolute start-75 translate-middle pt-2 pb-3 px-2 badge rounded-circle text-center" id="badge">
                                3
                            </span>
                        </span>
                    </li>
                    <li className='nav-item'>
                        <div class="d-flex mx-2" id="header-user-profil">
                            <div className="d-flex">
                                <div className="d-flex justify-content-center align-items-center me-md-4 lh-1 py-auto">
                                    <h6 className="fw-bold py-0 user-name">Charles Merl</h6>
                                </div>
                                <img src={imageProfil} className="rounded-circle me-2 me-md-4 my-auto" id="profil-img" alt='img' />
                            </div>
                        </div>
                    </li>
                    <li className='nav-item'>
                        <Dropdown>
                            <Dropdown.Toggle variant="" id="dropdown-basic">
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar