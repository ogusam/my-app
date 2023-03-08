import logo from './logo.svg';
import './App.css';
import Employees from './components/Employees';
import Header from './components/Header';
import { useState } from 'react';
import Footer from './Footer';
import GroupedTeamMembers from './components/GroupedTeamMembers';
import Nav from './components/Nav';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {

  const[selectedTeam, SetTeam] = useState('TeamB');
  const [employees, setEmployees] = useState([{id:1, 
    fullName: "Samuel Ogu",
     designation: "React Engineer", 
     gender: "Male", 
     teamName:"TeamA"},
     {
    id:2,
      fullName: "Bob James",
    designation: "Node Developer", 
  gender: "Female",
   teamName: "TeamB"},
  {
    id:3,
    fullName: "James Clack",
    designation:"Python Developer",
    gender: "Male",
    teamName: "TeamC"
  },
  {
    id:4,
    fullName: "James Peters",
    designation:"Python Developer",
    gender: "Male",
    teamName: "TeamC" 
  },
  {
    id:5,
    fullName: "John Paul",
    designation:"Node Developer",
    gender: "female",
    teamName: "TeamB"
  },
  {
    id:6,
    fullName: "Bob Clack",
    designation:"React Developer",
    gender: "Male",
    teamName: "TeamA"
  },
  {
    id:7,
    fullName: "James Clack",
    designation:"Python Developer",
    gender: "Female",
    teamName: "TeamC"
  },
  {
    id:8,
    fullName: "James John",
    designation:"Node Developer",
    gender: "Male",
    teamName: "TeamB"
  }
])


function handleTeamSelectionChange(event)
{
  console.log(event.target.value);
  SetTeam(event.target.value);
}
function handleEmployeeCardClicked(){
  const transformedEmployees = employees.map((employee)=>employee.id ===parseInt(Event.currentTarget.id)
  ?(employee.TeamName === selectedTeam)?{...employee, teamName:''}:{...employee,teamName: selectedTeam}
  :employee);
  setEmployees(transformedEmployees);


}

  return (
  
    <div>
      
      <Header selectedTeam={selectedTeam}
      teamMemberCount={employees.filter((employee)=>employee.teamName===selectedTeam).length}/>
      
      <Employees employees={employees}
      selectedTeam={selectedTeam}
      handleEmployeeCardClicked={handleEmployeeCardClicked}
      handleTeamSelectionChange={handleTeamSelectionChange}/>
      
     <Footer/>

      
    </div>
    
  );
}

export default App;
