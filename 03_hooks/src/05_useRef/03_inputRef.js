import { useEffect, useRef, useState } from "react"

export const LoginComponent = () =>{
    const [form,setForm] = useState({
        username:'',
        password:''
    });

    useEffect(()=>{
        console.log(userNameRef.current)
        userNameRef.current.focus();
    },[])

    const userNameRef = useRef();

    const onClickHandler=()=>{
        alert(`usename :${form.username} \n password: ${form.password}`)
    

    }

    //객체에 값 넣을때...
    const onChangeHandler =e=>{
        setForm({
            ...form,[e.target.name]:e.target.value
        });
    }

    return (
        <>
            <input type="text" name="username" placeholder="이름"
            onChange={onChangeHandler} value={form.username} ref={userNameRef}
            />
            <br/>

            <input type="password" name="password" placeholder="비밀번호"
            onChange={onChangeHandler} value={form.password} 
            />
             <br/>
             <button  onClick={onClickHandler}>로그인</button>
        </>
    )
}