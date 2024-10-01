
import { useEffect, useState } from "react";
import { useNavigate} from "react-router-dom";
import { getMenuList } from "../api/MenuApi";
import { MenuItem } from "../component/MenuItem";


export const Menu = ({})=>{

    const [menuList,setMenuList] = useState([]);

    const navigate = useNavigate();

    useEffect(()=>{
        setMenuList(getMenuList());
    },[])


    const orderok = ()=>{
            navigate("/order");
    }
    return (
        <>
        <h3>메뉴</h3>
        {menuList.map(menu=>(<MenuItem key={menu.id} menu={menu} />))}
         <br/>
         <button onClick={orderok}>주문하기</button>

        </>
    )
}