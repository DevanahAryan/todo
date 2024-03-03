import React from "react";

export const DisplayTodo = ({
  setTodos,
  copyTodo,
  todos,
  statusOfTodo,
}) => {
  const handleOnClick = (id, newStatus) => {
    const updatedTodo = todos.map((todo) => {
      if (todo.id === id)
        return {
          ...todo,
          status: newStatus,
        };
      return todo;
    });
    setTodos(updatedTodo);
  };

  return (
    <div className="listTodo">
      <ul>
        {copyTodo.map((todo) => {
          return (
            <li key={todo.id}>
              <span>{todo.name}</span>
              <div>
                {statusOfTodo!=="Inprogress" && <button onClick={() => handleOnClick(todo.id, "Inprogress")}>
                  In progress
                </button>}
                {statusOfTodo!=="Complete" && <button onClick={() => handleOnClick(todo.id, "Complete")}>
                  Completed
                </button>}
                {statusOfTodo!=="Backlog" && <button onClick={() => handleOnClick(todo.id, "Backlog")}>
                  Backlog
                </button>}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
