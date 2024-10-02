import { useNavigate } from "react-router-dom";
import useStore from "../store"


export const CounterPage = ()=>{

    const{count, increment,decrement,reset} = useStore();
    const navigate = useNavigate();

    console.log("counter 랜더링");

    return(
        <div style={{textAlign:"center",marginTop:'50px'}}>
            <h1>Counter : {count}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
        <div>
            <button onClick={()=>navigate("/status")}>현재상태 보러가기</button>
        </div>

        </div>
    )
}