import React, { useEffect, useState } from 'react';
import { Todo } from '@myorg/data';

export const App = () => {

  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetch('/api/todos')
      .then((_) => _.json())
      .then(setTodos)
  }, [])

  function addTodo() {
    fetch('/api/todos', {
      method: 'POST',
      body: ''
    })
      .then((_) => _.json())
      .then((newTodo) => {
        setTodos([...todos, newTodo])
      });
  }

  return (
    <>
      <h1>Todos</h1>
      <ul>
        {todos.map((t) => (
          <li className={'todo'}>{t.title}</li>
        ))}
      </ul>

      <button id={'add-todo'} onClick={addTodo}>
        Add Todo
      </button>
    </>
  );
}

export default App;
