import React, { useState } from 'react'
import styles from './app.module.scss'
import InputTodo from './components/InputTodo'
import IncompleteTodoList from './components/IncompleteTodos'
import FixedTodoList from './components/FixedTodos'

const App = () => {
  const [todoText, setTodoText] = useState('')
  const [incompleteTodos, setIncompleteTodos] = useState([])
  const [fixedTodos, setFixedTodos] = useState([])

  const changeTodoText = (event) => {
    setTodoText(event.target.value);
  }

  const clickAddBtn = () => {
    if(todoText === '') return;

    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText('');
  }


  const clickDeleteBtn = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  }

  const clickFixBtn = (index) => {
    const newFixedTodo = incompleteTodos[index];
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);

    const newFixedTodos = [...fixedTodos, newFixedTodo];
    setFixedTodos(newFixedTodos);
  }

  const clickBackBtn = (index) => {
    const newIncompleteTodo = fixedTodos[index];
    const newFixedTodos = [...fixedTodos];
    newFixedTodos.splice(index, 1);
    setFixedTodos(newFixedTodos);

    const newIncompleteTodos = [...incompleteTodos, newIncompleteTodo];
    setIncompleteTodos(newIncompleteTodos);
  }

  return (
    <>
      <section className={styles.todo}>
        <h1 className={styles.todo__lv1Title}>TODOリスト</h1>
        <InputTodo
          todoText={todoText}
          onChange={changeTodoText}
          onClick={clickAddBtn}
        />
        <IncompleteTodoList
          incompleteTodos={incompleteTodos}
          onClickFixBtn={clickFixBtn}
          onClickDeleteBtn={clickDeleteBtn}
        />
        <FixedTodoList
          fixedTodos={fixedTodos}
          onClick={clickBackBtn}
        />
      </section>
    </>
  )
}

export default App
