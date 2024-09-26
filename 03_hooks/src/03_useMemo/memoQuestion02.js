import { useEffect, useMemo, useState } from "react"


export const SangPum =() =>{

    const [list , setList]=useState([
        {id:1,name:"아이폰 16",category:"전자제품"},
        {id:2,name:"맥북 프로",category:"전자제품"},
        {id:3,name:"에어팟",category:"전자제품"},
        {id:4,name:"삼성 갤럭시",category:"전자제품"},
        {id:5,name:"나이키 운동화",category:"의류"},
        {id:6,name:"아디다스 티셔츠",category:"의류"},
        {id:7,name:"믹서기",category:"가전제품"},
        {id:8,name:"전자레인지",category:"가전제품"},
    ]);

    const [category,setCategory]=useState("");

  //  const [result,setResult]=useState([]);

    // useEffect(()=>{
    //     if(category==""){
    //         setResult([...list])
    //     }else{
    //         setResult(list.filter(item=>item.category === category))
            
    //     }
    // },[category])
    const result = useMemo(()=>{
        if(category==""){
            return list
        }else{
           return  list.filter(item=>item.category === category)
        }
    },[category,list])



    return(
        <>
        <h3>상품 목록</h3>
        <button onClick={()=>setCategory("")}>모든 카테고리</button>
        <button onClick={()=>setCategory("전자제품")}>전자 제품</button>
        <button onClick={()=>setCategory("의류")}>의류</button>
        <button onClick={()=>setCategory("가전제품")}>가전제품</button>
        <h3>총 {result.length}개의 상품</h3>
        {result.map((current,index)=>(<li key={index}>{current.name}</li>))}

        </>
    )
}