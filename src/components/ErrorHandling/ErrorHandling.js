import React from 'react';
import style from './ErrorHandling.module.css';
const ErrorHandle=(props)=>{
    const clickHandler=()=>{
        props.changeStatus(0);
    }
    return (
        <div className={style.backdrop}>
    <div className={style.error}>
        <div className={style.inner1}>
            Invalid Input
        </div>
        <div className={style.inner2}>
            
        <button type="button" onClick={clickHandler}>Okay!</button>
        </div>
    </div>
</div>)
};
export default ErrorHandle;