import React from 'react'

function ProjectsComponent({title, num, id}) {
  return (
    <div className='bg-light p-4 rounded col-5 mb-3' id='projectCarte'>
        <p>{title}</p>
        <div id={id} className='px-3'>
            <h4>{num}</h4>
        </div>
    </div>
  )
}

export default ProjectsComponent