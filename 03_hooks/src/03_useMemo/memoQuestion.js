import { useMemo, useState } from "react"

export const NumCalculator = ()=>{

    const [numbers,setNumbers] = useState("");

    const squareNumber = useMemo(()=>{
        console.log("제곱값 계산실행");
        return numbers.split(",").map(num=>{
            return isNaN(num)? 0:num **2;
        })
    },[numbers])

    const addNumber = (e)=>{
        setNumbers(e.target.value);
    }

        return(
            <>
                <h3>숫자 제곱 계산기</h3>
                <input onChange={addNumber}/>
                <h3 >제곱값 :</h3>
                {squareNumber.map((current,index)=>(<li key={index}>{current}</li>))}
            
    
            </>
        )
    }

 
