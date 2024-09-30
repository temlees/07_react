import { useReducer } from "react";
// reducer는 현재상태(state) 액션(action)여기서 액션은 onchangehandler에서 넘겨주는
//{name,value} 형태의 객체 

const reducer =(state,action)=>{
    console.log(action);
// [action.name]은 key값 pass 만약 입력을 1234로 입력하면 action은 { name: 'pass', value: '1234' }가 됩니다.
//state의 모든 속성을 복사하여 새로운 객체를 생성합니
    return ({...state,[action.name]: action.value})
}

export const Input = () =>{
    const [state,dispatch]= useReducer(reducer,{pass:'',passcheck:''})

    //이벤트 객체(e)에서 name과 value를 추출하고,
    // 이를 액션 객체 { name, value }로 dispatch에 전달합니다.
    const onChangeHandler = e =>dispatch(e.target);


    return(
        <>
            <label>비밀번호 :</label>
            <input type="password" name="pass" onChange={onChangeHandler}></input>
            <br/>
            <label>비밀번호 확인 :</label>
            <input type="password" name="passcheck" onChange={onChangeHandler}></input>

            <div>
                <h3>입력한 비번 :{state.pass}</h3>
                <h3>비번확인  :{state.passcheck}</h3>

            </div>
        </>
    )
    

}



//  export const ReducerFormControl = ()=>{
//     //state에 name,nickname상태
//     const [state,dispatch]=useReducer(reducer,{name:'', nickname:''});

//     const {name,nickname} = state;
    
    

//     return(
//         <>
//             <label>이름 :</label>
//             <input type="text" name="name" onChange={onChangeHandler}></input>
//             <br/>
//             <label>낙네임 :</label>
//             <input type="text" name="nickname" onChange={onChangeHandler}></input>

//             <div>
//                 <h3>입력한 이름 :{name}</h3>
//                 <h3>입력한 닉네임 :{nickname}</h3>

//             </div>
//         </>
//     )
// }