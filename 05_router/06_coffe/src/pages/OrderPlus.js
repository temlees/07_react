import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { getMenuDetail } from "../api/MenuApi";

//아마도 주문을 하면 코드가 매개변수로 넘어올듯 ?
export const OrderPlus =({cart,setCart})=>{

    const {id} = useParams();
// "id": 1, "name": "에스프레소", "price": 3000, "description"
    const[menu,setMenu] = useState({
        id :'',
        name :'',
        price:'',
        description:''
    });

    const plus = ()=>{
        setCart([...cart, menu])
        alert("장바구니 추가완료!");
    }

 


    useEffect(()=>{
        setMenu(getMenuDetail(id));
    },[])


    return(
        <>
            <h1>{menu.name}</h1>
            <h3>가격 :\{menu.price}</h3> 
            <h3> 설명 :{menu.description}</h3> 
            <button onClick={plus}>장바구니 추가</button>
            <Link to={"/main"}>
            <button >돌아가기</button>
            </Link>
        </>
    )
}