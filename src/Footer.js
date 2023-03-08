import React from 'react'

const Footer = () => {
    var today = new Date();
  return (
    <div className='row justify-content-center'>
       Team Member Allocation App = {today.getFullYear()}
        </div>
  )
}

export default Footer