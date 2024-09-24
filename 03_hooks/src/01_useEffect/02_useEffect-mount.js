import { useEffect, useState } from "react"

const UseEffectMount = () =>{
    const [time,setTime] = useState(new Date().toLocaleTimeString());

    useEffect(()=>{
        console.log("처음마운트 시점 동작");
    },
        [time]//두번째 인자로 빈배열을 넣으면 업데이트 시점에는 동작하지 않고 최초마운트에만 동작
);

return (
    <>
        <button onClick={()=>setTime(new Date().toLocaleTimeString())}>
            현재시간확인
        </button>
        <h1>{time}</h1>
    </>
    
)
}

export default UseEffectMount;