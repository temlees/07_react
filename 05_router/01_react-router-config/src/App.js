import{BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import About from "./pages/About";
import Menu from "./pages/Menu";

function App() {

  /*
    npm install react-router-dom

    라우팅 :
    어떤 요청을 어디로 안내 및 매핑을 할 것인지 정해놓고 진행하는 것으로
    리액트에서는 요청에 따라 요청된 컴포넌트를 렌더링한다.

    BrowserRouter : 라우팅이 필요한 컴포넌트들을 감싸는 컴포넌트
    Routes : Route를 묶어주는 컴포넌트
    Route : url 요청 주소와 컴포넌트를 매팡해 주는 단위
  */
  return (
<>
    <BrowserRouter>
      <Routes>
        {/* 기본요청을 main컴포넌트로 띄운다 */}
        <Route path="/"element={<Main/>} />
        <Route path="/about"element={<About/>} />
        <Route path="/menu"element={<Menu/>} />
      </Routes>
    </BrowserRouter>
</>
  );
}

export default App;
