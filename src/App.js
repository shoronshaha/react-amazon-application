import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Shop from './components/shop/Shop';
import Orders from './components/orders/Orders';
import Inventory from './components/inventory/Inventory';
import About from './components/about/About';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Shipment from './components/Shipment/Shipment';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/inventory" element={
          <RequireAuth>
            <Inventory />
          </RequireAuth>
        } />
        <Route path="/shipment" element={
          <RequireAuth>
            <Shipment></Shipment>
          </RequireAuth>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
