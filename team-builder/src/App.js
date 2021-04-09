import React, {useState, useEffect} from 'react'
import Member from './member'
import initialMemberList from './MemberList'
import Form from './Form'

import './App.css';

const initialForm={
  name:'',
  email:'',
  role:''
}

function App() {
  const [team, setTeam]=useState([initialMemberList])
  const [form, setForm]=useState(initialForm)

  // useEffect(()=>{
  //   initialMemberList()res =>setTeam(res.data)
  // },[])
  
  const submit =()=>{
    setTeam([...team, form])
    setForm(initialForm)
  }

  const update=(name,value)=>{
    setForm({...form, [name]:value})
  }

  return (
    <div className="App">
      <h1>157 TEAM MEMBERS</h1>

      <Form form={form} update={update} submit={submit}/>
      
        {team.map(resp=> {
          return(
            <Member details={Member}/>
          )
        })}
    </div>
  );
}

export default App;
