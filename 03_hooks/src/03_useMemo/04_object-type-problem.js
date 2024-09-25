import { useEffect, useMemo, useState } from "react"


//useMemo : 메모이제이션을 통해 비용이 큰 계산을 최적화 하거나 
//참조(주소값)이 동일하는 경우에 사용한다
//의존성이 변경되지않으면 이전의 계산된값을
//재사용하여 불필요한 렌더링을 방지한다....
 export const LocationComponent = () =>{
    const [isKorea,setIsKorea] = useState(true);
    const[number,setNumber] = useState(0);

    console.log("렌더링");

    //1. 지역 변수에 문자열로 초기화 - 기본 자료형(state변화시 location 변화없음)
    //const location = isKorea?'한국':'일본';

    //2. 지역변수에 객체로 초기화
    //객체는 렌더링 시 재할당이 되어서 location의 주소값이 바뀌어서 useEffect가 발동한다.
    // const location = {
    //     contry: isKorea?'한국':'일본'
    // }

    // 3. 지역변수에 useMemo 의 반환값으로 초기화
    const location = useMemo(()=>{
            return{
                country:isKorea? '한국':'일본'
            }
    },[isKorea])


    useEffect(()=>{
        console.log("useEffect호출");
    },[location]);

    return(
        <>
            <h2>지금 당신의 위치는 ?</h2>
            <p>국가 : {location.contry}</p>
            <button onClick={()=>setIsKorea(!isKorea)}>국가변경</button>
            <hr/>
            <h2>좋아하는 숫자를 입력해 주세요</h2>
            <input type="number" value={number} onChange={e=>setNumber(e.target.value)}/>
        </>
    )
}