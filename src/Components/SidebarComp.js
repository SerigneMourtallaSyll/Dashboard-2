import React from 'react'

function SidebarComponent({title, icon, id}) {
  return (
    <a className='item py-2 col-md-12 col-2' href='#link' id={id}>
        <i className={icon}></i>
        <span className='fs-5' id='title'>{title}</span>
    </a>
  )
}

export default SidebarComponent