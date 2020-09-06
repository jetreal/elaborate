import React from 'react'
import styles from './myFooter.module.sass'
import FooterLink from './footerLinks/FooterLink'


const MyFooter: React.FC<any> = (props: any) => {
    
    return (
        <footer className={styles.footer}>
            <div className={styles.logoSection}>
                <div className={styles.logoSectionLogo}></div>
                <div className={styles.logoSectionLinks}>
                    <div>
                        <h5 className={styles.footerHeaders}>Who's this for?</h5>
                        <FooterLink links={props.linksLeft} />
                    </div>
                    <div>
                        <h5 className={styles.footerHeaders}>Compapy</h5>
                        <FooterLink links={props.linksCenter} />
                    </div>
                    <div>
                        <h5 className={styles.footerHeaders}>News</h5>
                        <FooterLink links={props.linksRight} />
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