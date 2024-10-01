import {BrowserRouter,Routes,Route} from "react-router-dom";
import { LayOut } from "./layout/LayOut";
import { Home } from "./page/Home";
import { Movie } from "./page/Movie";
import { AddMovie } from "./page/AddMovie";
import { MovieDetail } from "./page/MovieDetail";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LayOut/>}>
      <Route path="/home" element={<Home/>}/>

      <Route path="movie">
      <Route index element={<Movie/>}/>
      <Route path=":id" element={<MovieDetail/>}/>
      </Route>
      <Route path="addmovie" element={<AddMovie/>}/>

      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
