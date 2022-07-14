import './App.css';
import Header from './component/Header';
import Home from './component/Home'
import MyCart from './component/MyCart'
import NoPage from './component/NoPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/cart" exact  element={<MyCart />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
