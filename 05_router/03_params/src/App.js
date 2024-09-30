import {BrowserRouter,Route,Routes} from "react-router-dom";
import { Layout } from "./layout/Layout";
import { Main } from "./pages/Main";
import { About } from "./pages/About";
import { Menu } from "./pages/Menu";
import MenuDetail from "./pages/MenuDetails";
import MenuSearch from "./pages/MenuSearch";

function App() {
  return (
   <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="main" element={<Main/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="menu">
        <Route index element={<Menu/>}/>
        {/* :menuCode : 요청에 넘어온 값을   menuCode에 할당한다는 뜻 
         EX)localhost:3000/menu/30-> menuCode =30 */}
        <Route path=":menuCode" element={<MenuDetail/>}/>
        <Route path="search" element={<MenuSearch/>}/>
        </Route>
      </Route>
    </Routes>
    </BrowserRouter>
   </>
  );
}


export default App;
