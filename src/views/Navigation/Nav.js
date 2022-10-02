import React, { Component } from "react";
import "./Nav.scss";
import { NavLink } from "react-router-dom";

export class Nav extends Component {
   render() {
      return (
         <div>
            <ul>
               <li>
                  <NavLink to="/" activeClassName="active" exact>
                     Home
                  </NavLink>
               </li>
               <li>
                  <NavLink to="/todos" activeClassName="active">
                     Todos
                  </NavLink>
               </li>

               <li>
                  <NavLink to="/about" activeClassName="active">
                     About
                  </NavLink>
               </li>
               <li>
                  <NavLink to="/user" activeClassName="active">
                     Users
                  </NavLink>
               </li>
            </ul>
         </div>
      );
   }
}

export default Nav;
