import React from 'react';

import femalepix from './images/femalepix.jpg';
import malepix from './images/malepix.jpg';


const Employees = ({employees, selectedTeam, handleEmployeeCardClicked, handleTeamSelectionChange}) => {

  
  return (
    <main className='container'>
      <div className = 'row justify-content-center'>
        
        <div className='col-8'>
          
        <select className='form-select' form-select-lg value = {selectedTeam} onChange={handleTeamSelectionChange}>
          <option>TeamA</option>
          <option>TeamB</option>
          <option>TeamC</option>
        </select>
        
      
        
          <div class = 'card-collection'>
    {
      employees.map((employee)=>(
        <div id={employee.id} className={(employee.teamName === selectedTeam? 'card m-2 standout' :'card m-2')}onClick={handleEmployeeCardClicked}>
      {(employee.gender === 'Male') ? <img src={malepix} className= 'card-img-top' alt=''/>
      :<img src={femalepix} className='card-img-top' alt=''/>}
        
        <div className='card-body'>
          <h5>Full Name: {employee.fullName}</h5>
          <p><b>Designation:</b>{employee.designation}</p>
        </div>
      </div>
      ))
    }
    </div>
    </div>
    </div>
    </main>
  )
}

export default Employees