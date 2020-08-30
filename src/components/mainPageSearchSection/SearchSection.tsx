import React from 'react'
import styles from './searchSection.module.sass'


const SearchSection: React.FC = (props) => {
  return (
    <>
      <section className={styles.searchSection}>
        <div className={styles.searchSectionPurpleGradient}>
          
        </div>
        <div className={styles.searchSectionLogo}>
          <p>elaborate</p>
        </div>
        <div>
          <h2 className={styles.searchSectionBigText}>
            Work, Hire, <br/> Collaborate, Invest
          </h2>
        </div>
        <p className={styles.searchSectionSecondText}>
          Freelancing platform for business,<br />startups and investors
        </p>
      </section>
    </>
  )
}

export default SearchSection