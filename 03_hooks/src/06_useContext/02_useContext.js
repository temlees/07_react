
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

    /*  
        useState 단점
        1. 성능저하 : context 는 전역상태를 공유하기 때문에 공유된 상태가 변경되면
        그 상태를 구독하는 모든 컴포넌트가 리 렌더링 된다
        만약 context를 많이 사용하고 그 상태들이 자주 변경되면, 불필요한
        리 랜더링이 발생하여 성능이 저하될 수 있다...

        2. 컴포넌트 재사용성 감소
        Context에 의존하는 컴포넌트가 많아질 수록 해당 컴포넌트는 그 Context환경안에서만
        동작 가능... 이런 컴포넌트는 독립적으로 재사용하기 어려워지며 다른부분에서 쓰기 어려움

        3. 구조적인 복잡성 증가
        Context를 많이 사용하면 프로잭트 구조가 복잡해진다... 여러 context가 중첩
        되면 코드의 가독석 떨어지고 유지보수에 힘듦
    */ 
