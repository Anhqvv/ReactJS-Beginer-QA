import React, { Component } from "react";
import axios from "axios";
import "./ListUser.scss";
export class ListUser extends Component {
   state = {
      ListUsers: {},
   };
   async componentDidMount() {
      let res = await axios.get("https://reqres.in/api/users?page=2");
      //   console.log(">>>response", res.data.data);
      this.setState({
         ListUsers: res && res.data && res.data.data,
      });
   }

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
                     <tr key={user.id}>
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

export default ListUser;
