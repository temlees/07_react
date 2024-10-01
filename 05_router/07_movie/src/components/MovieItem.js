import{NavLink} from "react-router-dom";

export const MovieItem = ({movie})=>{
    return(
        <>
        <NavLink to={`/movie/${movie.id}`}>
        <li>{movie.title} {movie.year}</li>
        </NavLink>
        </>
    )
}