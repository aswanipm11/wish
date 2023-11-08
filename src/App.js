import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Wishlist from './pages/Wishlist';
import Pnf from './pages/Pnf';


function App() {
  return (
    <div className="App">
      <Header></Header>
<Routes>

<Route path="/" element ={<Home></Home>}></Route>

      <Route path="/cart" element={<Cart></Cart>}></Route>
      <Route path="/wishlist" element={<Wishlist></Wishlist>}></Route>
      <Route path='*' element={<Pnf></Pnf>}></Route>


</Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
