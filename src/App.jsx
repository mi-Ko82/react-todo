import React, { useState } from 'react'
import styles from './app.module.scss'

const App = () => {
  return (
    <>
      <section className={styles.todo}>
        <h1 className={styles.todo__lv1Title}>TODOリスト</h1>
        <div className={`${styles.todo__box} ${styles.todo__input}`}>
          <input className={styles.todo__textArea} type="text" placeholder="TODOを入力" />
          <button className={styles.todo__button}>追加</button>
        </div>
        <section className={`${styles.todo__box} ${styles.todo__imcomplete}`}>
          <h2 className={styles.todo__lv2Title}>未完了のTODO</h2>
          <ul className={styles.todo__list}>
            <li className={styles.todo__listItem}>
              <span>TODOです</span>
              <button className={styles.todo__button}>完了</button>
              <button className={styles.todo__button}>削除</button>
            </li>
            <li className={styles.todo__listItem}>
              <span>TODOです</span>
              <button className={styles.todo__button}>完了</button>
              <button className={styles.todo__button}>削除</button>
            </li>
          </ul>
        </section>
        <section className={`${styles.todo__box} ${styles.todo__complete}`}>
          <h2 className={styles.todo__lv2Title}>完了したTODO</h2>
          <ul className={styles.todo__list}>
            <li className={styles.todo__listItem}>
              <span>TODOでした</span>
              <button className={styles.todo__button}>戻す</button>
            </li>
          </ul>
        </section>
      </section>
    </>
  )
}

export default App
