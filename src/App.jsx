import React, { useState } from 'react'
import './App.css'

const App = () => {
  return(
    <>
      <section class="todo">
        <h1 class="todo__lv1Title">TODOリスト</h1>
        <div class="todo__box todo__input">
          <input class="todo__textArea" type="text" placeholder="TODOを入力" />
          <button class="todo__button">追加</button>
        </div>
        <section class="todo__box todo__imcomplete">
          <h2 class="todo__lv2Title">未完了のTODO</h2>
          <ul class="todo__list">
            <li class="todo__listItem">
              <span>TODOです</span>
              <button class="todo__button">完了</button>
              <button class="todo__button">削除</button>
            </li>
            <li class="todo__listItem">
              <span>TODOです</span>
              <button class="todo__button">完了</button>
              <button class="todo__button">削除</button>
            </li>
          </ul>
        </section>
        <section class="todo__box todo__complete">
          <h2 class="todo__lv2Title">完了したTODO</h2>
          <ul class="todo__list">
            <li class="todo__listItem">
              <span>TODOでした</span>
              <button class="todo__button">戻す</button>
            </li>
          </ul>
        </section>
      </section>
    </>
  )
}

export default App
