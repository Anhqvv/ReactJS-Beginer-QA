import React, { Component } from "react";
import axios from "axios";
import "./ListUser.scss";
import { withRouter } from "react-router";

export class ListUser extends Component {
   state = {
      ListUsers: {},
   };
   async componentDidMount() {
    //   console.log("This props from list User", this.props);
      let res = await axios.get("https://reqres.in/api/users?page=1");
      //   console.log(">>>response", res.data.data);
      this.setState({
         ListUsers: res && res.data && res.data.data,
      });
   }
   handleShowDetailUser = (user) => {
    //   console.log("handleShowDetailUser", user);
    this.props.history.push(`/user/${user.id}`)

   };

   render() {
      const { ListUsers } = this.state;
      //    console.log(">>>listUsers: ",ListUsers);
      return (
         <div className="list-user-container">
            <table>
               <tr>
                  <th>ID user</th>
                  <th>First Name</th>
                  <th>Last Name</th>
               </tr>
               {ListUsers &&
                  ListUsers.length > 0 &&
                  ListUsers.map((user, index) => (
                     <tr
                        key={user.id}
                        onClick={() => this.handleShowDetailUser(user)}
                     >
                        <td>{index + 1}</td>
                        <td>{user.first_name}</td>
                        <td>{user.last_name}</td>
                     </tr>
                  ))}
            </table>
         </div>
      );
   }
}

export default withRouter(ListUser);
