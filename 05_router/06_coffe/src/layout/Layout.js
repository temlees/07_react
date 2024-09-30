import { Header } from "../component/Header"
import { Navbar } from "../component/Navbar"
import {Outlet} from "react-router-dom";

export const Layout = ()=>{
    return(
        <>
            <Header/>
            <Navbar/>
            <Outlet/> 
            {/* 바뀌는 곳 outlet */}
        </>
    )
}