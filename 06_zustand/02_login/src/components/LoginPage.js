import {useState} from "react";
import { userAuthStore } from "../store";
import {useNavigate} from "react-router-dom";

export const LoginPage = () =>{
    const [input,setInput] = useState('');
    const{login} = userAuthStore();
    const navi = useNavigate();

    const handleLogin = ()=>{
        //매개변수로 username을 넘겨준다
        login(input);
        navi("/profile");
    }

    const handleMypage= ()=>{
        navi("/profile");
    }

    return(
        <div style={{textAlign:'center',marginTop:'50px'}}>
            <h1>로그인</h1>
            <input type="text" placeholder="이름을 입력하세요" value={input}
            onChange={e=>setInput(e.target.value)} />
            <button onClick={handleLogin}>로그인</button>
            <button onClick={handleMypage}>프로필</button>

        </div>
    )

}