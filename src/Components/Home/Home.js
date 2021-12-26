import React from 'react'
import styles from '../../CSS/Home.module.css'
import Header from '../Header/Header'
import Card from '../Card/Card'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>

            <Header />

            <section className={styles.imgSec}>

                <img src="/Images/Freebanner.jpg" alt="" width="100%" height="100%" />

            </section>

            <section className={styles.gridSec}>

            </section>

            <div className={styles.imgDiv}>
                <Card image='/Images/img1.jpg' />
                <Card image='/Images/img2.jpg' />
                <Card image='/Images/img3.jpg' />
                <Card image='/Images/img4.jpg' />
                <Card image='/Images/img5.jpg' />
                <Card image='/Images/img6.jpg' />
                <Card image='/Images/img7.jpg' />
                <Card image='/Images/img8.jpg' />
                <Card image='/Images/img9.jpg' />

            </div>

            <section className={styles.whiteSec}>
                <h1 className={styles.chooiceHead}>Why ImagesBazaar?</h1>
                <h4>
                    India's diversity and complexity can be witnessed through its people, traditions and values associated with distinctive regional customs, 
                    habits, lifestyle and festivals. That's why our content reflects the innate expressions of deep-rooted feelings of individuals through which 
                    spring their day-to-day actions. From contemporary concepts and ideas to the broadest range of categories depicting Indians in virtually all 
                    walks of life, age groups and expressions - you will find it all here! 

                    <Link to='/' classname={styles.kMore}> Know More </Link>
                </h4>

            </section>




            <Footer />
        </>
    )
}

export default Home
