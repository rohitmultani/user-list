import React,{useState} from 'react'
import UserInput from './components/userInput'
import UserItems from './components/UserItems'
import './App.css';


function App() {
  const [userInput,setUser]=useState([])
  const UserContent=(props)=>{
    setUser((prev)=>{
      return[...prev,{name:props.name,age:props.age,key:Math.random()}]
    });
    console.log(userInput,"app")
};
  
    return (
    <div>
   <UserInput inputData={UserContent}/>
   <UserItems outData={userInput}/>
   </div>
  );
  }

export default App;
