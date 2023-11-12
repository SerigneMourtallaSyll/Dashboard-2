import React from 'react'

function ButtonHeader({title1 , title2}) {
  return (
    <select id="mySelect" className='border col-3 py-2 mx-3 px-2 rounded'>
      <option value="option1">{title1}</option>
      <option value="option3">{title2}</option>
    </select>
    // <input type="number" name="" id="" placeholder={title} className='border col-md-2 py-2 mx-3 px-2 rounded' />
  )
}

export default ButtonHeader