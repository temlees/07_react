
/*
    context는 react 컴포넌트 트리 안에서 전역적으로 데이터를 공유할 수 있도록
    고안된 방법이다... 트리구조가 복잡해 질 수 록 하위 컴포넌트로 props를 전달하는 
    양이 많아지고 그러면 유지보수와 코드 가독성에 악 영향을 준다

    하지만 context를 사용하면 중간 컴포넌트들에게 props를 넘겨주지 않아도 되고
    유지보수도 수월하게 된다
    단,context를 사용하면 컴포넌트를 재사용하기 어려워 지기 떄문에 필요할때만 쓴다

*/

import { createContext, useContext, useState } from "react";
import { Styles } from "./style";

//컨텍스트 생성 -> 별도의 저장소를 만듦..
const DarkModeContext = createContext(null);

const Header=()=>{
    const context = useContext(DarkModeContext);

    const {isDark} =context;

    return (
        <header style={{...Styles.header,
            backgroundColor: isDark? "black":"lightgray",
            color : isDark ? "white":"black"
            }}>
                <h1>Wellcome to useContext</h1>
            </header>
    )
}

const Content=()=>{
    const context = useContext(DarkModeContext);

    const {isDark} =context;
    return (
        <div style={{...Styles.content,
            backgroundColor: isDark? "gray":"white",
            color : isDark ? "white":"black"
            }}>
                <h1> 내용입니다</h1>
            </div>
    )


}

const Footer = ()=>{
    const context = useContext(DarkModeContext);
    const {isDark,setIsDark} =context;
    const toggleHandler = ()=>setIsDark(!isDark);

    return(
        <footer style={{...Styles.footer,
             backgroundColor : isDark? "black":"white",
            color : isDark ? "white":"black"
        }}>
            <button onClick={toggleHandler}>{isDark? "black":"white"}</button>
            useContext App
        </footer>
    )

}

const Page = ()=>{
    return(
        <div style={{...Styles.page}}>
            <Header/>
            <Content/>
            <Footer/>
        </div>
    )
}

export const ContextContainer = () =>{
    const [isDark,setIsDark] = useState(false);

    return(
        // 하위컴포넌트에서도 속성 사용 가능
        <DarkModeContext.Provider value={{isDark,setIsDark}}>
            <Page/>
        </DarkModeContext.Provider>
    )
}

export default Page;