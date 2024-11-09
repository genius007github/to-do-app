import React, { useState } from 'react'; // Correctly import useState
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Mycomponents/Header';
import AddTodo from './Addtodo';
import Todos from './Mycomponents/Todos';
import Footer from './Mycomponents/Footer';

function App() {
  // Function to handle the deletion of a todo item
  const onDelete = (todo) => {
    console.log("I am on Delete of todo", todo);

    // Update the todos state by filtering out the deleted todo
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
  }
  const addTodo1 = (title , desc)=>{
    console.log("i am adding todo",title,desc)
    let sno;
    if(todos.length===0){
      sno = 1;
    }
    else{
      sno = todos[todos.length-1].sno+1;
    }
    sno = todos[todos.length-1].sno + 1;
    const myTodo = {
      sno :sno,
      title:title,
      desc:desc,
    }
    setTodos([...todos,myTodo]);
    console.log(myTodo)
  }

  // State to hold the list of todos
  const [todos, setTodos] = useState([
    {
      Sno: 1,
      title: "Go to Market",
      desc: "bring a glass of bottle done1"
    },
    {
      Sno: 2,
      title: "Go to Market",
      desc: "bring a glass of bottle done2"
    },
    {
      Sno: 3,
      title: "Go to Market",
      desc: "bring a glass of bottle done3"
    },
  ]);

  // Return the rendered components
  return (
    <>
      <Header title="My todo List" searchbar={false} />
      <AddTodo addTodo = {addTodo1}/>
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
