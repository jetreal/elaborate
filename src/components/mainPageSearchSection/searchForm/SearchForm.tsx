import React from 'react'
import styles from './searchForm.module.sass'

import { TextField, Button } from '@material-ui/core'
// import { shadows } from '@material-ui/system'

const SearchForm: React.FC = (props) => {
  return (
    <form className={styles.form} noValidate autoComplete="off">
     
      <TextField className={styles.textField} id="standard-basic" label="Describe your project or a specialist you need" />
      <Button className={styles.button} type="submit" variant="contained">search</Button>
        
    </form>
  )
}

export default SearchForm