import React, { Component } from "react";
import { withRouter } from "react-router";
import axios from "axios";

export class DetailUser extends Component {
   state = {
      dataUser: {},
   };
   async componentDidMount() {
      let id = this.props.match.params.id;
      // console.log(">>> this is ID from API", id)
      let res = await axios.get(`https://reqres.in/api/users/${id}`);
    //   console.log("Call API from DetailUSer", res.data.data);
    //   console.log("WithRouter to DetailUser", this.props);
      this.setState({
         dataUser: res && res.data && res.data.data,
      });
   }
   handleBackUSers = () => {
      this.props.history.push(`/user`);
   };
   render() {
      const { dataUser } = this.state;
    //   console.log("data user", dataUser);
      return (
         <>
            <div>
               ID: {dataUser.id} - Email: {dataUser.email}
            </div>
            <br />
            <div>
               First Name: {dataUser.first_name} - Last Name:{" "}
               {dataUser.last_name}
            </div>
            <br />

            <div>
               <img src={dataUser.avatar} alt="" />
            </div>
            <div>
               <button type="button" onClick={() => this.handleBackUSers()}>
                  Back
               </button>
            </div>
         </>
      );
   }
}

export default withRouter(DetailUser);
