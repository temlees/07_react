import {useState} from "react";
import movies from "../data/movie-data.json";
export const AddMovie = ()=>{

    const [list,setList] = useState({})
    const onChange = e=>{
        setList({...list,[e.target.name]:e.target.value})
    }

    const plus = ()=>{
        movies.push({
            id:movies.length+1,
            title:list.title,
            year:list.year,
            description:list.description
        })
    }

    return(
        <>
        <h1>영화추가하기</h1>
        <h3>제목<input name="title" onChange={onChange} /></h3>
        <h3>연도<input name="year" onChange={onChange} /></h3>
        <h3>설명<input name="description" onChange={onChange}/></h3>
        <button onClick={plus}>추가하기</button>

        </>
    )
}
