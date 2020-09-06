import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import OrderReview from './components/OrderReview/OrderReview';
import ManageInventory from './components/MangeInventory/ManageInventory';
import NoMatch from './components/NoMatch/NoMatch';
import ProductDetail from './components/ProductDetails/ProductDetail';

function App() {
  return (
    <div>
       <Header></Header>
      <Router>
        <Switch>
        <Route path="/shop">
        <Shop></Shop>
           </Route>
           <Route path="/orderReview">
        <OrderReview></OrderReview>
           </Route>
           <Route path="/manageInventory">
        <ManageInventory></ManageInventory>
           </Route>
           <Route exact path="/">
            <Shop></Shop>
           </Route>
           <Route path="/product/:ProductKey">
           <ProductDetail></ProductDetail>
           </Route>
           <Route path="*">
           <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
 
 
    </div>
  );
}

export default App;
