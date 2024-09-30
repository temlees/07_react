import { Header } from "../components/Header"
import { Navbar } from "../components/NavBar"
import { Outlet } from "react-router-dom"


//Outlet 바뀌는 컴포넌트를 매치 시킨다... 요청이 바뀌면 아웃렛만 바뀐다
 export const Layout = () =>{
    return(
        <>
            <Header/>
            <Navbar/>
            <Outlet/>
    
        </>
    )
}