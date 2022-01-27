import React from 'react'
import style from './UserList.module.css'
function UserList(props){
    return(<div className={style.list}>
 {/* Rohit Multani 2000. */}
 {props.pos+1}{".) "} 
 
 {props.userName.name} {" , "}
 
 {props.userName.age} years old
 </div>)
};
export default UserList;