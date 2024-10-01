import {useNavigate, useParams} from "react-router-dom";
import{useState,useEffect} from "react";
import { getMovieDetail } from "../api/MovieApi";

export const MovieDetail = ()=>{
//    { "id": 1, "title": "타이타닉", "year": 1997, "description": " },
    const [movie,setMovie] = useState({
        id:'',
        title :'',
        year:'',
        description:''
    })

    const navigate = useNavigate();

    const back = ()=>{
        navigate("/movie")
    }

    const {id} = useParams();

    useEffect(()=>{
        setMovie(getMovieDetail(id));
    },[])


    return(
    <>
    <h1>{movie.title}</h1>
    <h3>연도 : {movie.year}</h3>
    <h3>설명 : {movie.description}</h3>
    <br/>
    <button onClick={back} >돌아가기</button>
    </>
    )
}