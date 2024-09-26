import UseEffectBasic from "./01_useEffect/01_useEffect-basic";
import {useState} from "react"; 
import UseEffectMount from "./01_useEffect/02_useEffect-mount";
import UseEffectUpdate from "./01_useEffect/03_useEffect-update";
import { Container } from "./01_useEffect/04_userEffect-cleanup";
import { Total } from "./01_useEffect/01_question";
import { Year } from "./01_useEffect/02_question";
import { Profile } from "./01_useEffect/03_question";
import UseReducerBasic from "./02_useReducer/01_useReducer-basic";
import { Input, ReducerFormControl } from "./02_useReducer/02_reducer-form-controll";
import { ExampleCount } from "./02_useReducer/01_question";
import HardCaculator from "./03_useMemo/01_hard-calculator";
import { ComplexCalculator } from "./03_useMemo/02_complex-calculator";
import { UseMemoCompoent } from "./03_useMemo/03_performance-useMemo";
import { LocationComponent } from "./03_useMemo/04_object-type-problem";
import { NumCalculator } from "./03_useMemo/memoQuestion";
import { SangPum } from "./03_useMemo/memoQuestion02";
import CalBackProblem from "./04_Callback/01_problem";
import { FunctionMemoization } from "./04_Callback/02_function-memorization";
import { CallbackComponent } from "./04_Callback/03_components";
import { CounterRef } from "./05_useRef/01problem";
import { UseRefCounter } from "./05_useRef/02_useRef";
import { LoginComponent } from "./05_useRef/03_inputRef";
import { Board } from "./05_useRef/board";
import Page from "./06_useContext/01_props-dribbling";
import { ContextContainer } from "./06_useContext/02_useContext";
import { HooksProblem } from "./07_custom-hooks/01_problem";


function App() {

  const [message,setMessage] = useState("안녕하세요")
  return (
    <>
    {/* <UseEffectBasic message={message}/> */}
    {/* <UseEffectMount/> */}
    {/* <UseEffectUpdate/> */}
    {/* <Container/> */}
    {/* <Total/> */}
    {/* 
     */}
     {/* <Profile/> */}
     {/* <UseReducerBasic/> */}
     {/* <ReducerFormControl/> */}
     {/* <Input/> */}
     {/* <ExampleCount/> */}
     {/* <HardCaculator/> */}
     {/* <ComplexCalculator/> */}
     {/* <UseMemoCompoent/> */}
     {/* <LocationComponent/> */}
     {/* <NumCalculator/> */}
     {/* <SangPum/> */}
     {/* <CalBackProblem/> */}
     {/* <FunctionMemoization/> */}
     {/* <CallbackComponent/> */}
     {/* <CounterRef/> */}
     {/* <UseRefCounter/> */}
     {/* <LoginComponent/> */}
      <Board/> 
     {/* <Page/> */}
     {/* <ContextContainer/> */}
     {/* <HooksProblem/> */}
    </>
  );
}

export default App;
