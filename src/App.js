import "./App.css";
import { useState } from "react";
import { Footer } from "./Footer";
import { DisplayTodo } from "./DisplayTodo";
import {LIST_TODO} from './constants'

function App() {
  const [text, setText] = useState("");
  const [statusOfTodo, setStatusOfTodo] = useState("Inprogress");
  const [todos, setTodos] = useState(LIST_TODO);
  const handleAddTodo = () => {
    let textTrim=text.trim();
    if(textTrim==='')
    return;
    const newTodo = [
      ...todos,
      {
        id: Date.now(),
        name: textTrim,
        status: "Inprogress",
      },
    ];
    setTodos(newTodo);
    setText("");
  };
  const handleOnChange = (e) => {
    setText(e.target.value);
  };
  const copyTodo=todos.filter((todo)=>todo.status===statusOfTodo);
  return (
    <div className="body">
      <h1>Todo App</h1>
      <div className="todolist">
        <input onChange={handleOnChange} type="text" value={text}></input>
        <span>
          <button onClick={handleAddTodo}>Add Todo</button>
        </span>
        {copyTodo.length>0 && <DisplayTodo
          setTodos={setTodos}
          copyTodo={copyTodo}
          todos={todos}
          statusOfTodo={statusOfTodo}
        />}
      </div>
      <Footer
        statusOfTodo={statusOfTodo}
        setStatusOfTodo={setStatusOfTodo}
      />
    </div>
  );
}

export default App;
