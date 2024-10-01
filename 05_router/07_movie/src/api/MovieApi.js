import movies from "../data/movie-data.json"

export function getMovieList(){
    return movies;
}

export function  getMovieDetail(id){
    return  movies.filter(item=>item.id==parseInt(id))[0];
}

// export function addMovie(){

// }