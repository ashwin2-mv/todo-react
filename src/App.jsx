import { useEffect, useState } from "react";

const App = () => {
  // const [value, setValue] = useState(initialValue)
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [completedTodos, setcompletedTodos] = useState([]);
  const handleMarkAsCompleted = (addedTodo) => {
    setcompletedTodos((prev) => [...prev, addedTodo]);
  };
  // console.log(to do)
  console.log(completedTodos);
  const handleTodos = () => {
    if (todo.length != 0) {
      setTodos((prev) => [...prev, todo]);
      setTodo("");
    }

    // setTodos((prev) => [...prev, todo]);
    // []
    // ['todo1','todo2']
    // [['todo1','todo2']]
  };
  const handleDeleteTodo = (addedKey) => {
    const updatedTodos = todos.filter((todo, key) => key !== addedKey);
    setTodos(updatedTodos);
    setcompletedTodos(updatedTodos);
  };
  return (
    <>
      <div>
        <main className="container " style={{ marginTop: 40 }}>
          <header>
            <h1>Todo App </h1>
          </header>

          <section>
            <h2>Add New Todo</h2>
            <div className="grid">
              <input
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                type="text"
                placeholder="Enter your todo..."
                aria-label="Todo input"
              />
              <button onClick={handleTodos}>Add Todo</button>
            </div>
          </section>

          <section>
            <h2>Added Todos</h2>
            <ul>
              {todos.map((todo, key) => (
                <li key={key}>
                  <div className="grid">
                    <div>
                      <strong>
                        {key + 1}. {todo}
                      </strong>
                    </div>
                    <div>
                      {completedTodos.includes(todo) ? (
                        <button className="secondary outline">Completed</button>
                      ) : (
                        <button onClick={() => handleMarkAsCompleted(todo)}>
                          Mark As Completed
                        </button>
                      )}
                      <button
                        className="secondary outline"
                        onClick={() => handleDeleteTodo(key)}
                      >
                        Delete{" "}
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </>
  );
};

export default App;
