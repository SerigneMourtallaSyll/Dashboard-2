import React from 'react';
import { Carousel } from 'react-bootstrap';
import { projects } from './Utils';
import ProjectsComponent from './ProjectsComp';

function PeopleBar() {
    return (
        <div className='bg-white col-md-3 col-12'>
            <div className='border-bottom py-3 ps-5'>
                <p>SELECTED</p>
                <h4>Design Team</h4>
            </div>
            <div>
                <div className='w-100 d-flex justify-content-end'>
                    <i className="bi bi-gear-fill ms-auto"></i>
                </div>
                <div className='d-flex justify-content-center'>
                    <Carousel className='px-3-'>
                        <Carousel.Item>
                            <div className="progress-bar">
                                <progress value="74" min="0" max="100">74%</progress>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="progress-bar">
                                <progress value="50" min="0" max="100" >50%</progress>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
            <div className='pt-4'>
                <h4 className='pb-3 ps-4'>Projects</h4>
                <div className='d-flex flex-wrap justify-content-around w-100' id='projectsCard'>
                    {projects.map((elem) => (
                        <ProjectsComponent title={elem.title} num={elem.num} id={elem.id} />    
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PeopleBar