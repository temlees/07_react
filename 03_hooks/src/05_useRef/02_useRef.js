
/*
    useRef 를 사용하는 목적?

    1. 값 유지 - 렌더링 사이에 값을 유지할 수 있게 해준다... 렌더링시 초기화 x
    2. 렌더링 방지 - 값이 변경되더라도 렌더링 일으키지 않는다.. 성능 최적화
    3. 애니메이션 타이머등 특정값이 변경 되더라도 리렌더링을 원치 않을 때도 저장 용도
    4. dom 요소에 직접 접근하는 방법을 제공함 특정 요소 포커스등

*/

import { useRef, useState } from "react"

export const UseRefCounter = () =>{
    console.log("useRefCounter 렌더링 됨")

    const [count, setCount] = useState(0);

    let variable = 0;
    const countRef = useRef(0);

    const increseCount = () =>{
        setCount(count+1)
    }
//current 현재값
    const increseVariable = () =>{
        variable += 1;
        console.log("varialbe :" + variable);
    }

    //값이 증가는 하지만 렌더링이 되지않기때문에 
    //setCounter 가 실행될때 같이 값이바뀐다
    const increseCountRef = () =>{
        countRef.current = countRef.current+1;
        console.log("카운트 Ref :" + countRef.current);
    }

    return(
        <>
            <h1>counter: {count}</h1>
            <h1>variable: {variable}</h1>
            <h1>countRef: {countRef.current}</h1>

            <button onClick={increseCount}>카운트 증가</button>
            <button onClick={increseVariable}>variable 증가</button>
            <button onClick={increseCountRef}>카운트 ref증가</button>


        </>
    )
}