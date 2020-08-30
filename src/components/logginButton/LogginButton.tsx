import React from 'react'
import styles from './logginButton.module.sass'


const LogginButton: React.FC = (props) => {
  return (
    <>
      <button className={styles.loginBtn}>
        Log in
      </button>
    </>
  )
}

export default LogginButton