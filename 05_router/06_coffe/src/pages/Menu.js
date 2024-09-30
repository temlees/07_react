
import {Link} from "react-router-dom";

export const Menu = ({menu})=>{
    return (
        <>
        <h3>메뉴</h3>

            <Link to={`/menu/${menu.id}`}>
            <li>{menu.name} - /{menu.price}</li>
            </Link>


        </>
    )
}