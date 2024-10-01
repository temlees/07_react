import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Layout } from "./layout/Layout";
import { Main } from "./pages/Main";
import { Menu } from "./pages/Menu";
import { Order } from "./pages/Order";
import { OrderPlus } from "./pages/OrderPlus";
import { useState } from "react";

function App() {

  const [cart,setCart] = useState([]);
  return (
<>
<BrowserRouter>
<Routes>
    <Route path="/" element={<Layout/>}>
    <Route path="/main" element={<Main/>}/>
    <Route path="menu">
      <Route index element={<Menu />}/>
   <Route path=":id" element={<OrderPlus cart={cart} setCart={setCart} />} /> 
      </Route>
    <Route path="/order" element={<Order cart={cart}/>}/>

    </Route>

</Routes>
</BrowserRouter>

</>
  );
}

export default App;
