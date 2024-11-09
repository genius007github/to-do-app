import React from 'react'
import TodoItem from "../Mycomponents/TodoItem";

export const Todos = (props) => {
  let mystyle = {
    minHeight: "70vh",
    margin: "10px auto"
  }
  return (
    <div className="container " style={mystyle}>
      <h3 className = " my-3">Todos List</h3>
      { props.todos.legth === 0 ? "No todos to display":
      props.todos.map((todo)=>{
        return <TodoItem todo = {todo} key = {todo.sno} onDelete={props.onDelete}/>
      })}
     

   
     
    </div>
  )
}

export default Todos

