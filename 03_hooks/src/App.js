import UseEffectBasic from "./01_useEffect/01_useEffect-basic";
import {useState} from "react"; 
import UseEffectMount from "./01_useEffect/02_useEffect-mount";
import UseEffectUpdate from "./01_useEffect/03_useEffect-update";
import { Container } from "./01_useEffect/04_userEffect-cleanup";
import { Total } from "./01_useEffect/01_question";
import { Year } from "./01_useEffect/02_question";


function App() {

  const [message,setMessage] = useState("안녕하세요")
  return (
    <>
    {/* <UseEffectBasic message={message}/> */}
    {/* <UseEffectMount/> */}
    {/* <UseEffectUpdate/> */}
    {/* <Container/> */}
    {/* <Total/> */}
    <Year/>
    </>
  );
}

export default App;
