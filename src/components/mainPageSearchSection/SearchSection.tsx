import React from 'react'
import styles from './searchSection.module.sass'
import SearchForm from './searchForm/SearchForm'


const SearchSection: React.FC = (props) => {
  return (
    <>
      <section className={styles.searchSection}>
        <div className={styles.ContainerPoint}>
          <div className={styles.rightSphere}>

          </div>
          <div className={styles.leftSphere}>

          </div>
          <div className={styles.leftLine}>

          </div>
          <div className={styles.rightLine}>

          </div>

        </div>
        <div className={styles.searchSectionPurpleGradient}>

        </div>
        <div className={styles.searchSectionLogo}>
          <p>elaborate</p>
        </div>
        <div>
          <h2 className={styles.searchSectionBigText}>
            Work, Hire, <br /> Collaborate, Invest
          </h2>
        </div>
        <p className={styles.searchSectionSecondText}>
          Freelancing platform for business,<br />startups and investors
        </p>

        <SearchForm />
        <div className={styles.applyAsFreelancerDiv}>
          <h3 className={styles.applyAsFreelancerText}>
            Apply as freelancer
          </h3>

        </div>

      </section>
    </>
  )
}

export default SearchSection