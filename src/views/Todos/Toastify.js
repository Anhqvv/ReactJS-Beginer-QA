import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export class Toastify extends Component {
   render() {
      return (
         <div>
            <ToastContainer
               position="top-right"
               autoClose={2500}
               hideProgressBar={false}
               newestOnTop={false}
               closeOnClick
               rtl={false}
               pauseOnFocusLoss
               draggable
               pauseOnHover
            />
         </div>
      );
   }
}

export default Toastify;
