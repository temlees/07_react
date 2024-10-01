
import {useState,useEffect} from "react";
import {  getMovieList } from "../api/MovieApi";
import { MovieItem } from "../components/MovieItem";

export const Movie =()=>{

    
    const [movieList,setMovieList] = useState([])

    useEffect(()=>{
        setMovieList(getMovieList());
    },[])


    return (
            <>
            <h3>영화목록</h3>
            {movieList.map(movie=>(<MovieItem key={movie.id} movie={movie}/>))}
            </>
    )
}