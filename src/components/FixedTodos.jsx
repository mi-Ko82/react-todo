import React from 'react'
import styles from '../app.module.scss'
import Button from './Button'

const FixedTodoList = (props) => {
  const { fixedTodos, onClick } = props

  return (
    <section className={`${styles.todo__box} ${styles.todo__complete}`}>
      <h2 className={styles.todo__lv2Title}>完了したTODO</h2>
      <ul className={styles.todo__list}>
        {fixedTodos.map((todo, index) => {
          return (
            <li key={todo} className={styles.todo__listItem}>
              <span>{todo}</span>
              <Button onClick={() => onClick(index)}>戻す</Button>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default FixedTodoList