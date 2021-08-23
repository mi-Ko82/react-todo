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

  const deleteTodo = (index, todos, setTodos) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  const addTodo = (index, todos, setTodos) => {
    const removeTodos = todos === incompleteTodos ? fixedTodos : incompleteTodos
    const newTodo = removeTodos[index];
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  }

  const clickDeleteBtn = (index) => {
    deleteTodo(index, incompleteTodos, setIncompleteTodos);
  }

  const clickFixBtn = (index) => {
    addTodo(index, fixedTodos, setFixedTodos);
    deleteTodo(index, incompleteTodos, setIncompleteTodos);
  }

  const clickBackBtn = (index) => {
    addTodo(index, incompleteTodos, setIncompleteTodos);
    deleteTodo(index, fixedTodos, setFixedTodos);
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
