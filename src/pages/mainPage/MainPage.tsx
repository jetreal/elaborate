import React from 'react'
import LogginButton from '../../components/logginButton/LogginButton'

import SearchSection from '../../components/mainPageSearchSection/SearchSection'
import MyFooter from '../../components/footer/MyFooter'
import Navbar from '../../components/navbar/Navbar'


interface Links {
    name: string
    url: string
    id: number
}

type LinksType = {
    footerLinksLeft: Array<Links>
    footerLinksCenter: Array<Links>
    footerLinksRight: Array<Links>
}

interface Props {
    MainPageReducer: LinksType
}

const MainPage: React.FC<Props> = (props) => {
    console.log(props)

    return (
        <div>
            <LogginButton />
            <Navbar />
            <SearchSection />
            <MyFooter
             linksLeft={props.MainPageReducer.footerLinksLeft} 
             linksCenter={props.MainPageReducer.footerLinksCenter} 
             linksRight={props.MainPageReducer.footerLinksRight} 
             />
        </div >
    )
}

export default MainPage