import React,{useReducer  } from "react";
import './App.css';
import {Container}  from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import { TodoContext  } from "./context/TodoContext";
import TodoForm from "./componentes/TodoForm";
import TodoReducer from "./context/Reducer";
import Todos from "./componentes/Todos";


function App() {
    //useReducer
    const [todos, dispatch] = useReducer(TodoReducer, []);

  return (
    <TodoContext.Provider value={{ todos, dispatch}}>
        <Container fluid>
           <h1>Todo App with Context API</h1>
           <Todos/>
           <TodoForm/>
        </Container>
    </TodoContext.Provider>
  );
}

export default App;
