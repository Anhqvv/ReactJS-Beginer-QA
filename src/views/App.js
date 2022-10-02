import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./Example/MyComponent.js";
import ListTodo from "./Todos/ListTodo";
import Toastify from "./Todos/Toastify";
import Nav from "./Navigation/Nav";
import Home from "./Navigation/Home";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import ListUser from "./ListUser/ListUser";

function App() {
   // const  App = () =>  {
   return (
      <div className="App">
         <BrowserRouter>
            <Nav />
            <header className="App-header">
               <img src={logo} className="App-logo" alt="logo" />

               <Switch>
                  <Route path="/" exact>
                     <Home />
                  </Route>
                  <Route path="/todos">
                     <ListTodo />
                  </Route>
                  <Route path="/about">
                     <MyComponent />
                  </Route>
                  <Route path="/user">
                     <ListUser />
                  </Route>
               </Switch>
            </header>
            <Toastify />
         </BrowserRouter>
      </div>
   );
}

export default App;
