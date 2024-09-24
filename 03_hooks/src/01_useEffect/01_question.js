import { useEffect, useState } from "react";

const Times = ({id,onDelete }) => {
    const [count, setCount] = useState(1);  


    useEffect(() => {
       
        const times = setInterval(() => {
            setCount(prevCount => prevCount + 1);  
        }, 1000);

   
        return () => {
            clearInterval(times);
            console.log("타이머 종료");
        };
    }, [id]);  

    return (
        <>
            <h1>타이머 {id}: {count}초</h1>  
            <button onClick={()=>onDelete(id)}>삭제</button>
        </>
    );
};

export const Total = () => {
    const [number, setNumber] = useState(1);  
      const [list,setList] =useState([]);


      const clickPlus=()=>{
        setList([...list,{id:number}])
        setNumber(number+1);
      }

      const onDelete= (id)=>{
       const add = list.filter((filter)=>filter.id !== id)
       setList(add);
      }

    return (
        <>
            <button onClick={clickPlus}>
              타이머 추가
            </button>
        {list.map((timer)=>(<Times  key={ timer.id} id={timer.id} onDelete={onDelete}/>))}

    
        </>
    );
};