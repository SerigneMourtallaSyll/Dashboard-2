import React from 'react';
import SidebarComponent from './SidebarComp';
import { sidebarLink } from './Utils';
import Dropdown from 'react-bootstrap/Dropdown';
function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="m-2 d-flex py-3" id='contentLogo'>
                <div className='rounded py-2 px-3 logo mx-3 d-flex justify-content-center align-items-center'>
                    <i className="bi bi-grid-fill  text-white px-2 py-1 rounded vh-50"></i>                
                </div>
                <div>
                    <Dropdown>
                        <Dropdown.Toggle variant="" id="dropdown-basic">
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
            <div className='d-flex px-3 py-4'>
                <button className='btn rounded w-75' id='button'>Request for</button>
            </div>
            <div className="group-flush w-100">
                {sidebarLink.map((elem, index) => (
                    <SidebarComponent key={index} title={elem.title} icon={elem.icon} id={elem.id}/>
                ))}
            </div>
            <div className='d-flex justify-content-center py-5' id='divLogout'>
                <span className='rounded-circle' role='button' id='logout'>
                    <i className='bi bi-power fs-4 text-white'></i>
                </span>
            </div>
        </div>
    )
}

export default Sidebar