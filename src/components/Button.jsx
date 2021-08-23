import React from 'react'
import styles from './button.module.scss'

const Button = (props) => {
  const { onClick, children } = props;

  return (
    <button className={styles.todo__button} onClick={onClick}>{children}</button>
  )
}

export default Button