import {NavLink} from "react-router-dom";

export const Navbar = ()=>{

    return(
        <div>
            <ul>
                <li><NavLink to="/main">홈</NavLink></li>
                <li><NavLink to="/main">메뉴</NavLink></li>
                <li><NavLink to="/main">주문확인</NavLink></li>

            </ul>
        </div>
    )
}