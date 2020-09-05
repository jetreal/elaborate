import React from 'react'
// import styles from './footerLink.module.sass'


const FooterLink: React.FC<any> = (props: any) => {
    console.log(props)

    let lnks = props.links.map((el: any) => {
        return < React.Fragment key={el.id}>
            <li>
                <a href={el.url}>
                    {el.name}
                </a>
            </li>
        </React.Fragment>
    })
    
    return (
        <ul>
          {lnks}
        </ul>
    )
}

export default FooterLink