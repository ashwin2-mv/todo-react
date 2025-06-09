import { useState } from "react";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [completedTodos, setcompletedTodos] = useState([]);
  const handleMarkAsCompleted = (addedTodo) => {
    setcompletedTodos((prev) => [...prev, addedTodo]);
  };
  const handleTodos = () => {
    if (todo.length != 0) {
      setTodos((prev) => [...prev, { title: todo, id: crypto.randomUUID() }]);
      setTodo("");
    }
  };
  const handleDeleteTodo = (addedTodo) => {
    const updatedTodos = todos.filter((todo, key) => todo.id !== addedTodo.id);
    setTodos(updatedTodos);
    const updatedCompletedTodos = completedTodos.filter(
      (todo) => todo.id !== addedTodo.id
    );
    setcompletedTodos(updatedCompletedTodos);
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
                <li key={todo.id}>
                  <div className="grid">
                    <div>
                      <strong>
                        {key + 1}. {todo.title}
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
                    </div>
                    <div>
                      <button
                        className="secondary outline"
                        onClick={() => handleDeleteTodo(todo)}
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
