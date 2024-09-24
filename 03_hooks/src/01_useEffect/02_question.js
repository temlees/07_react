import { useEffect, useState } from "react"


export const Year =()=>{




    const [count , setCount] =useState(10);
    const [message,setMessage] =useState("");

    const [state,setState]= useState(false);

    useEffect(()=>{
        if(count>0 && !state ){
        const time = setInterval(()=>{
            setCount((prevCount) => prevCount - 1);
        },1000)

        return()=>{
            clearInterval(time);
        }
    } else alert("시간초과");

       
    },[count])

    const inputText =(e)=>{
            setMessage(e.target.value)
    }

    const submit =(message)=>{
        if(message == 2024){
             alert("정답입니다")
            setState(!state);
        
        }else {
            return alert("틀렸습니다 다시 입력하세요~")
        }
    }

    return(
        <>
        <h3>문제 : 올해는 몇년도 인가요?</h3>
        <br/>
        <h1>남은 시간 :{count}초</h1>
        <br/>
        <input type="text" onChange={inputText} value={message} />
        <button onClick={()=>submit(message)}>제출</button>
        </>
    )

}