import React from 'react'
import styles from '../app.module.scss'
import Button from './Button'

const IncompleteTodoList = (props) => {
  const { incompleteTodos, onClickFixBtn, onClickDeleteBtn } = props

  return (
    <section className={`${styles.todo__box} ${styles.todo__imcomplete}`}>
      <h2 className={styles.todo__lv2Title}>未完了のTODO</h2>
      <ul className={styles.todo__list}>
        {incompleteTodos.map((todo, index) => {
          return (
            <li key={todo} className={styles.todo__listItem}>
              <span>{todo}</span>
              <Button onClick={() => onClickFixBtn(index)}>完了</Button>
              <Button onClick={() => onClickDeleteBtn(index)}>削除</Button>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default IncompleteTodoList