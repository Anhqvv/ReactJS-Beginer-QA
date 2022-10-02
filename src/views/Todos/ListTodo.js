import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";
import { toast } from "react-toastify";

class ListTodo extends React.Component {
   state = {
      listTodos: [
         { id: "todo1", title: "Doing homework" },
         { id: "todo2", title: "Making videos" },
         { id: "todo3", title: "Fixing bugs" },
      ],
      editTodo: {},
   };

   addNewTodo = (todo) => {
      // let currentListTodo = this.state.listTodos;
      // currentListTodo.push(todo);

      this.setState({
         listTodos: [...this.state.listTodos, todo],
         // listTodos: currentListTodo
      });

      toast.success("Wow so easy!");
   };

   handleDeleteTodo = (item) => {
      //   console.log("handleDeleteTodo", item);
      let listTodosCurrent = [...this.state.listTodos];
      listTodosCurrent = listTodosCurrent.filter((todo) => todo.id !== item.id);
      //   console.log("listTodosCurrent", listTodosCurrent);
      this.setState({
         listTodos: listTodosCurrent,
      });
      toast.success("Deleting is succeeded");
   };
   handleEditTodo = (todo) => {
      //   console.log("handleEditTodo", todo);
      let { listTodos, editTodo } = this.state;
      let isCheckObj = Object.keys(editTodo).length === 0;
      const listTodosCurrent = [...listTodos];

      //Save
      if (isCheckObj === false && todo.id === editTodo.id) {
         const objIndex = listTodosCurrent.findIndex(
            (item) => item.id === todo.id
         );

         listTodosCurrent[objIndex].title = editTodo.title;
         this.setState({
            listTodos: listTodosCurrent,
            editTodo: {},
         });
         toast.success("Saving is succeeded");
         return;
      }
      this.setState({
         editTodo: todo,
      });
   };

   handleOnchangeEdit = (e) => {
      //   console.log("handleOnchangeEdit", e.target.value);
      let editTodoCurrent = { ...this.state.editTodo };
      editTodoCurrent.title = e.target.value;
      this.setState({
         editTodo: editTodoCurrent,
      });
   };
   render() {
      let { listTodos, editTodo } = this.state;
      let isCheckObj = Object.keys(editTodo).length === 0;
      //   console.log("isCheckObj", isCheckObj);

      return (
         <div className="list-todo-container">
            <AddTodo addNewTodo={this.addNewTodo} />
            <div className="list-todo-content">
               {listTodos &&
                  listTodos.length > 0 &&
                  listTodos.map((item, index) => {
                     return (
                        <div className="todo-child" key={item.id}>
                           {isCheckObj === true ? (
                              <span>
                                 {" "}
                                 {index + 1} - {item.title}{" "}
                              </span>
                           ) : (
                              <>
                                 {isCheckObj === false &&
                                 item.id === editTodo.id ? (
                                    <span>
                                       {index + 1} -{" "}
                                       <input
                                          value={editTodo.title}
                                          onChange={(e) =>
                                             this.handleOnchangeEdit(e)
                                          }
                                       />
                                    </span>
                                 ) : (
                                    <span>
                                       {" "}
                                       {index + 1} - {item.title}{" "}
                                    </span>
                                 )}
                              </>
                           )}

                           <button
                              className="edit"
                              onClick={() => this.handleEditTodo(item)}
                           >
                              {isCheckObj === false && item.id === editTodo.id
                                 ? "Save"
                                 : "Edit"}
                           </button>
                           <button
                              className="delete"
                              onClick={() => this.handleDeleteTodo(item)}
                           >
                              Delete
                           </button>
                        </div>
                     );
                  })}
            </div>
         </div>
      );
   }
}

export default ListTodo;
