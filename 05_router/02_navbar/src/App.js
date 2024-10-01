import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Main } from "./pages/Main";
import { Mypage } from "./pages/Mypage";
import Login from "./pages/Login";
import { Layout } from "./layout/Layoutayout";
// layout 경로 변경 오류
function App() {
  //  index 요청의 기본값
  return (
   <>
   <BrowserRouter>
   <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Main/>}/>
        <Route path="/main" element={<Main/>}/>
        <Route path="/mypage" element={<Mypage/>}/>
        <Route path="/login" element={<Login/>}/>
      </Route>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
