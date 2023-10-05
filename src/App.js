import "./App.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ItemView from "./components/ItemView";
import Bag from "./components/Bag";
import Checkout from "./components/Checkout";
import AddPayment from "./components/AddPayment";
import Address from "./components/Address";
import Confirmation from "./components/Confirmation";
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from "./components/Hero";
function App() {
  return (
    <>


       <BrowserRouter>
       
       <Routes>
          <Route exact path= "/" element={<Hero/>}/> 
          <Route exact path= "/products" element={<Dashboard/>}/> 
          <Route exact path="/bag" element={<Bag/>}/>
          <Route exact path="/item-view" element={<ItemView/>}/>
          <Route exact path = "/checkout" element ={<Checkout/>}/>
          <Route exact path = "/address" element ={<Address/>} />
          <Route exact path = "/addpayment" element ={<AddPayment/>} />
          <Route exact path= "/confirmation" element={<Confirmation/>}/>
         
       </Routes>
       </BrowserRouter>

     
   
    </>
  );
}

export default App;