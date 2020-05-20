import React, {useState, useEffect} from 'react';
import './App.css';
import MemberCard from './components/memberCard';
import {Row, Form} from 'reactstrap';
import NewMember from './components/MemberForm';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import {v4 as uuid} from 'uuid';

const firstMember =[{
  id: uuid(),
  username:'nick',
  email: 'nick.nick@nick.com',
  role: 'Backend'
}, 
{
  id: uuid(),
  username:'joseph',
  email:'joseph.joe@joe.com',
  role:'FrontEnd'
}
]

const originalFormValues={
  username: '',
  email: '',
  role:''
}

function App() {
  // console.log('firstMember', firstMember); 

  const [teamMembers, setTeamMembers] = useState(firstMember);
  const [inputValue, setInput] = useState(originalFormValues);
  
  // console.log('teamMember list', teamMembers);
  const [allMemberCards, createMemberCards] = useState('')

    //edit function
    const editMember = evt =>{
      evt.preventDefault();
      const name = evt.currentTarget.name;
      // console.log(`${evt} was clicked`)
      // console.log(evt.currentTarget)
      // console.log('id for nick', firstMember[0].id)
      // console.log('id for button clicked', name)

      let currentTarget = teamMembers.find(member=>{return member.id === name})
      let targetIndex = teamMembers.indexOf(member=>{return member.id === name})

      let firstHalf = teamMembers.slice(0, targetIndex-1);
      let secondHalf = teamMembers.slice(targetIndex);
      let totalArray = firstHalf.concat(secondHalf);

      // console.log('updated team members with editted one removed', totalArray)


      const newName = window.prompt("Change Name or leave if same", currentTarget.name);
      const newEmail = window.prompt('Enter new email or leave if same', currentTarget.email);
      const newRole = window.prompt('Enter new role or leave if same', currentTarget.role);

      const correctedMember = {
        username: newName,
        email: newEmail,
        role: newRole,
        id: currentTarget.id
      }

      setTeamMembers([...totalArray, correctedMember]);
      console.log(teamMembers)
    }

  //re renders the team list when a new member is added
  useEffect(()=>{
    // console.log('teamMembers was changed', teamMembers);
  createMemberCards(teamMembers.map(member=>{return <MemberCard key={member.id} username={member.username} email={member.email} role={member.role} onEdit={editMember} id={member.id}/>}))},[teamMembers]);
    // console.log(allMemberCards);




    //submit button on form
    const onSubmit =evt=>{
      evt.preventDefault();

      if(
        !inputValue.username.trim()||
        !inputValue.email.trim()||
        !inputValue.role.trim()
      ){
        return
      }
      


      const newTeamMember = {...inputValue, id:uuid()};
      setTeamMembers([...teamMembers, newTeamMember]);
      setInput(originalFormValues);
      // setTeamMembers(...teamMembers)
    }
    

    //changing values of inputs
    const onChange =evt=>{

      const {name} = evt.target;
      const {value} = evt.target;
      // console.log('name of event target', value)
      setInput({...inputValue, [name]: value})
      
    }
    
    // useEffect(()=>{console.log('current total input', inputValue);},[inputValue])


//return the app


    return (
    <div className="App">
      <h1 style={{color: 'white', fontSize: '25px'}}>Team Builder</h1>
      <NewMember value={inputValue} onInputChange={onChange} onSubmit={onSubmit} />
      <h2>All Team Members</h2>
      <Row>
      {allMemberCards}
      </Row>
    </div>
  );
}

export default App;
