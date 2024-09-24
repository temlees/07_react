import { useEffect, useState } from "react"

const UseEffectUpdate = ()=>{

    const [user,setUser] = useState({username:'',password:''});
    const onChangeHandler = e =>{
        setUser({
            ...user,[e.target.name] : e.target.value
        })
    }

    useEffect(()=>{
        console.log("username 변경감지")
    },[user.username]);

    useEffect(()=>{
        console.log("password 변경감지")
    },[user.password]);

    return(
        <>
        <label>userName:</label>
        <input type="text" name="username" onChange={onChangeHandler}/>
        <br/>
        <label>password:</label>
        <input type="password" name="password" onChange={onChangeHandler}/>
        <h3>username : {user.uesername}</h3>
        <h3>username : {user.password}</h3>

        </>
    )
}

export default UseEffectUpdate;