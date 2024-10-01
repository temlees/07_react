
import { Link } from "react-router-dom"

export const MenuItem=({menu})=>{

    return(
        <Link to={`/menu/${menu.id}`}>
            <div>
                <li>{menu.name} - \{menu.price}</li>
            </div>
        </Link>

    )
}

