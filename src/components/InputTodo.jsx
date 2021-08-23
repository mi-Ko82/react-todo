import React from 'react'
import styles from '../app.module.scss'
import Button from './Button'

const InputTodo = (props) => {
  const { todoText, onChange, onClick } = props

  return (
    <div className={`${styles.todo__box} ${styles.todo__input}`}>
      <input
        className={styles.todo__textArea}
        value={todoText}
        type="text"
        placeholder="TODOを入力"
        onChange={onChange}
      />
      <Button onClick={onClick}>追加</Button>
    </div>
  )
}

export default InputTodo;