import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Shop from './components/shop/Shop';
import Orders from './components/orders/Orders';
import Inventory from './components/inventory/Inventory';
import About from './components/about/About';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
