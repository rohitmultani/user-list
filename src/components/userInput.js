import React,{useState}from "react";
import style from "./userInput.module.css";
import ErrorHandle from "./ErrorHandling/ErrorHandling";
function UserInput(props) {
    const[name,setName]=useState('');
    const[number,setNumber]=useState('');
    const[okay,setOkay]=useState(false);
    const nameHandler=(event)=>{
        setName(event.target.value);
    }
    const numberHandler=(event)=>{
        setNumber(event.target.value);
    }
    const alterStatus=()=>{
      setOkay(false)
    }
   
   const submitHandler=(event)=>{
       event.preventDefault();
       if (number===''||name===''){
        setOkay(true);
        return;
        }
       const UserData={
           name:name,
           age:number,
       };
      props.inputData(UserData);
      setName('');
      setNumber('');
        
   }
  return (
     
    <div>
      <form className={style.outerForm} onSubmit={submitHandler}>
        <div className={style.innerForm1}>
          <label> Username </label>
          <input type="text"  onChange={nameHandler} value={name}/>
        </div>
        <div className={style.innerForm2}>
          <label> Age(Years) </label>
          <input type="number" min="0" onChange={numberHandler} value={number}/>
        </div>
        <button type="submit" className={style.button}>
          Add User  </button>
        
      </form>
      {okay && <ErrorHandle status={okay} changeStatus={alterStatus} />}
    </div>
  );
}
export default UserInput;
