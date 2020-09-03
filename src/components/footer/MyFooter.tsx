import React from 'react'
import styles from './myFooter.module.sass'


const MyFooter: React.FC = (props) => {
    return (
        <footer className={styles.footer}>
            <div className={styles.logoSection}>
                <div className={styles.logoSectionLogo}></div>
                <div className={styles.logoSectionLinks}>
                    <div>
                        <h5>Who's this for?</h5>
                        <ul>
                            <li><a href="/">Investors</a></li>
                            <li>Customers</li>
                            <li>Startups</li>
                            <li>Freelancers</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={styles.copyRight}>
                    <p>
                        &copy; 2020 Elaborate
                    </p>
                    <p>
                        Terms of service, Privacy policy
                    </p>

            </div>
        </footer >
    )
}

export default MyFooter