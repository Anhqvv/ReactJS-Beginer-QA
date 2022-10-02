import React, { Component } from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";

export class Home extends Component {
   componentDidMount = () => {
      // setTimeout(() => {
      //    this.props.history.push("/todos");
      // }, 2500);
   };
   render() {

      console.log(">>>this.props", this.props);
      return (
         <div>
            <p>Home Page with React.js</p>
         </div>
      );
   }
}

export default Color(Home);
// export default withRouter(Home);
