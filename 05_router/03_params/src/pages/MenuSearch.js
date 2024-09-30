import {useSearchParams} from "react-router-dom";
import {useState,useEffect} from "react";
import { searchMenu } from "../api/MenuApi";
import { MenuItem } from "../components/MenuItem";

const MenuSearch = () =>{
    //useSearchParams ?로 넘어오는 값을 배열로받음 
    const [search] = useSearchParams();

    // search.get("menuName")쓰면 메뉴네임과 키를가진값 즉 검색한것이담긴다
    const searchMenuName = search.get("menuName");

    const [menuList,setMenuList] = useState([]);

    useEffect(()=>{
        setMenuList(searchMenu(searchMenuName));
    },[])

    return (
        <>
        <h1>검색결과</h1>
        <div className="MenuBox">
            {menuList.map(menu=><MenuItem key={menu.menuCode} menu={menu}/>)}
        </div>
        </>
    )
}

export default MenuSearch;