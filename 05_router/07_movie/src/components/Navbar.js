import {NavLink} from "react-router-dom";
export const Navbar = ()=>{

    return(
        <>
            <p><NavLink to={"/home"}>홈</NavLink></p> 
            <p><NavLink to={"/movie"}>영화목록</NavLink></p> 
            <p><NavLink to={"/addmovie"}>영화추가하기</NavLink></p> 
        </>
    )
}