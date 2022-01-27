import React from 'react'
import style from './UserItems.module.css'
import UserList from './UserList'
function UserItems(props){
    return(
    <div className={style.ItemOuter}>
        {props.outData.map((x,index)=>(
                <UserList userName={x} key={x.key} pos={index}/>

        ))}
    </div>);
};
export default UserItems