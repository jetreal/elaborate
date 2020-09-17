import React from 'react'
import styles from './justGetSection.module.sass'
import imageHands from '../../images/hands2.jpg'


const JustGetSection: React.FC<any> = (props: any) => {
    return (
        <div className={styles.justGetSection}>
          <img className={styles.handsImg} src={imageHands} alt="hands"/>
          <h3 className={styles.mainHeader}>Just get what<br /> you really need</h3>
        </div>
    )
}

export default JustGetSection