import React from 'react'
import styles from './justGetSection.module.sass'
import imageHands from '../../images/Group238.jpg'


const JustGetSection: React.FC<any> = (props: any) => {
    return (
        <div className={styles.justGetSection}>
          
          <img className={styles.handsImg}src={imageHands} alt="hands"/>
        </div>
    )
}

export default JustGetSection