import "./MenuItem.css";
import{Link}from "react-router-dom";
export const MenuItem =({menu})=>{

    // Link클릭시 to에 해당하는 항목 전달
    return (
        <Link to={`/menu/${menu.menuCode}`}>
        <div className="MenuItem">
            <h3>이름 : {menu.menuName}</h3>
            <h3>가격 : {menu.menuPrice}</h3>
            <h3>종류 : {menu.categoryName}</h3>
        </div>
        </Link>
    )

}