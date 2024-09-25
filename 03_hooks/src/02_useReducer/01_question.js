import { useReducer, useState } from "react"

const reducer = (state,action)=>{
    console.log(action)
    switch(action.type){
        case 'DECREMENT': return{value:state.value-1}
        case 'INCREMENT': return{value:state.value+1}
        case 'text': return({...state,[action.name]: action.value})
        default:return state;

    }

}
export const ExampleCount =() =>{


    const [state,dispatch]= useReducer(reducer,{value:0})



    const clickPlus=()=>{
        dispatch({type:"INCREMENT"})

    }

    const clickMinus=()=>{
        dispatch({type:"DECREMENT"})
    }
    

    return (
        <>
        <h3>Counter : {state.value}</h3><br/>
        <button onClick={clickPlus}>+1</button>
        <button onClick={clickMinus}>-1</button> 
        <ExampleInput/>
        </>
    )
}

const ExampleInput =()=>{

    const[state,dispatch] = useReducer(reducer,{input:""})

    const onChagneHandler = e =>{
        dispatch(e.target)
    } 


    return(
        <>
   <input type="text" name="input" onChange={onChagneHandler}></input>
        <br/>
        입력하신 텍스트 : {state.input}
        </>
    )
}