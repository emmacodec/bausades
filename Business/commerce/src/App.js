import {useEffect} from 'react';
import {BrowserRouter, Route, Routes, useLocation} from 'react-router-dom';
import Home from './component/home/Home';
import ItemDetails from './component/details/ItemDetails';
import CheckOutLayout from './component/checkout/CheckOutLayout';
import Confirmation from './component/checkout/Confirmation';
import Navbar from './component/global/Navbar';
import CartMenu from './component/global/CartMenu';



const ScrollToTop = () => {
  const {pathname} = useLocation();

  useEffect(() => {
    window.scrollTo(0,0);
  }, [pathname])

  return null;
}

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='item/:itemid' element={<ItemDetails />} />
          <Route path='checkout' element={<CheckOutLayout />} />
          <Route path='checkout/success' element={<Confirmation />} />
        </Routes>
        <CartMenu />
      </BrowserRouter>
    </div>
  );
}

export default App;
