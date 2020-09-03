import React from 'react'
import LogginButton from '../../components/logginButton/LogginButton'
import Navbar from '../../components/navbar/Navbar'

import SearchSection from '../../components/mainPageSearchSection/SearchSection'
import MyFooter from '../../components/footer/MyFooter'
// import styles from './footer.module.sass'


const MainPage: React.FC = (props) => {
    return (
        <div>
            <LogginButton />
            <Navbar />
            <SearchSection />
            <MyFooter />
        </div >
    )
}

export default MainPage