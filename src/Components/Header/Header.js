import React from 'react'
import styles from '../../CSS/Header.module.css'
import Searchbar from '../Searchbar/Searchbar'
import { Link } from 'react-router-dom'



const Header = () => {
    return (
        <>
            <section className={styles.head_sec}>

                <div className={styles.heading}>
                    <Link to='/' >
                        
                        <img src="https://www.imagesbazaar.com/images/logo%20svg.svg" alt="" />

                    </Link>
                </div>

                <div className={styles.searchDiv}>
                    <Searchbar></Searchbar>
                </div>

            </section>
        </>
    )
}

export default Header
