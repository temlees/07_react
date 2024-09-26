import { useEffect, useState } from "react"


export const Board =() =>{
    const [list,setList]=useState({
        title :"",
        detail :"",
        id:null
    });

    const [number,setNumber] = useState(1);

    const [result,setResult]=useState([]);

    const [search,setSearch]= useState("");

    const onChangeHandler =e=>{
        setList({...list,[e.target.name]:e.target.value})
      
    }

    const submit =()=>{
        setResult([...result,{...list,id:number}]);
        setList({ title: "", detail: "",id:null });
        setNumber(number+1);
    }

    const onDelete=(id)=>{
        setResult(result.filter(item=>item.id!==id));

    }

    const searchHandler = e=>{
        setSearch(e.target.value);
     // return   result.filter(item=>{item.title.includes(e.target.value)}) 
     
    }

    const searchList = result.filter(item=>item.title.includes(search)) ;
    

    return(
        <>
            <h3>게시판</h3>
            <input name="title" value={list.title} placeholder="제목" onChange={onChangeHandler}/>
            <br/>
            <br/>
            <input name="detail" value={list.detail} placeholder="내용" onChange={onChangeHandler}/>
            <br/>
            <br/>
            <button onClick={submit}>게시</button>
            <br/>
            <br/>
            <input placeholder="검색" onChange={searchHandler} />
            <br/>
            {searchList.map((current)=>(<InputContainer id={current.id} 
            title={current.title} detail={current.detail} onDelete={onDelete} />))}
               <br/>
         
           
            

        </>
    )

   
}
const InputContainer = ({ title, detail,onDelete,id }) => {
    return (
        <>
            <li>
                <strong>{title}</strong>
                <p>{detail}</p>
            </li>
            <button onClick={()=>onDelete(id)}>삭제</button><br/>
            <input placeholder="댓글 작성"/><br/>
            <button>댓글달기</button>
        </>
    );
};
