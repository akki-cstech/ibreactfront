import React from 'react'
import styles from '../../CSS/Header.module.css'
import Searchbar from '../Searchbar/Searchbar'



const Header = () => {
    return (
        <>
            <section className={styles.head_sec}>

                <div className={styles.heading}>
                    <img src="https://www.imagesbazaar.com/images/logo%20svg.svg" alt="" />
                </div>

                <div className={styles.searchDiv}>
                    <Searchbar></Searchbar>
                </div>

            </section>
        </>
    )
}

export default Header
