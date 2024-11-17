
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import axios from "axios";
function App() {
  const [form,setForm]=useState({});
  const [user,setUser]=useState([]);

  const handleSubmit=async (e)=>{
    e.preventDefault();
     const response=await fetch('http://localhost:8080/demo',{
      method:'POST',
      body:JSON.stringify(form),
      headers:{
        'Content-Type':'application/json'
      }

     })
   const data= await response.json()
   
  console.log(data)
 }

  useEffect(()=>{
    const getData=async ()=>{
      const response=await fetch('http://localhost:8080/demo',{
        method:'GET',
      })

        const data= await response.json();
      setUser(data);

    }
      getData();
  },[])
   const handleform=(e)=>{
    
    setForm({
      ...form,
      [e.target.name]:e.target.value,

    })
   }
  
  return ( 
    <>
      <div>
        
        <form action="" onSubmit={handleSubmit}>
          <span>username</span>
          <input type="text" name='username' onChange={handleform}/>
          <span>password</span>
          <input type="text" name='password' onChange={handleform} />
          <input type="submit" ></input>
        </form>
        <div>
          <ul>
         {user.map(users=><li key={users._id}>{users.username},{users.password}</li>)}
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
