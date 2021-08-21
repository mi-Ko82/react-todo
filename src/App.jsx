import React, { useState } from 'react'
import styles from './app.module.scss'

const App = () => {
  const [todoText, setTodoText] = useState('')
  const [incompleteTodos, setIncompleteTodos] = useState(['あああ', 'いいいいいい'])
  const [fixedTodos, setFixedTodos] = useState(['TODOでした'])

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
        <div className={`${styles.todo__box} ${styles.todo__input}`}>
          <input
            className={styles.todo__textArea}
            value={todoText}
            type="text"
            placeholder="TODOを入力"
            onChange={changeTodoText}
          />
          <button className={styles.todo__button} onClick={clickAddBtn}>追加</button>
        </div>
        <section className={`${styles.todo__box} ${styles.todo__imcomplete}`}>
          <h2 className={styles.todo__lv2Title}>未完了のTODO</h2>
          <ul className={styles.todo__list}>
            {incompleteTodos.map((todo, index) => {
              return (
                <li key={todo} className={styles.todo__listItem}>
                  <span>{todo}</span>
                  <button className={styles.todo__button} onClick={() => clickFixBtn(index)}>完了</button>
                  <button className={styles.todo__button} onClick={() => clickDeleteBtn(index)}>削除</button>
                </li>
              )
            })}
          </ul>
        </section>
        <section className={`${styles.todo__box} ${styles.todo__complete}`}>
          <h2 className={styles.todo__lv2Title}>完了したTODO</h2>
          <ul className={styles.todo__list}>
            {fixedTodos.map((todo, index) => {
              return (
                <li key={todo} className={styles.todo__listItem}>
                  <span>{todo}</span>
                  <button className={styles.todo__button} onClick={() => clickBackBtn(index)}>戻す</button>
                </li>
              )
            })}
          </ul>
        </section>
      </section>
    </>
  )
}

export default App
