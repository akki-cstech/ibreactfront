import React from 'react';
import styles from '../CSS/Home.module.css'
import Card from '../components/common/Card'
import { Link } from 'react-router-dom';
import { Button, Grid } from '@material-ui/core'
const Home = () => {
    return (
        <>
            

            <section className={styles.imgSec}>

                <img src="/Images/Freebanner.jpg" alt="" width="100%" height="100%" />

            </section>

            <section>
                <div>
                    <div className={styles.pCategories}>
                        Popular Categories <i className={` fa fa-angle-double-right`}></i>
                    </div>
                </div>
            </section>

            <section>
                <div className={styles.imgDiv}>
                    <Grid container>

                        <Grid item xs={3} >
                            <Card image="/Images/gird1Img1.jpg" />
                            <Card image="/Images/gird1Img2.jpg" />
                            <Card image="/Images/gird1Img3.jpg" />
                            <Card image="/Images/gird1Img4.jpg" />
                            <Card image="/Images/gird1Img5.jpg" />
                            <Card image="/Images/gird1Img6.jpg" />
                        </Grid>

                        <Grid item xs={3} >
                            <Card image="/Images/gird2Img1.jpg" />
                            <Card image="/Images/gird2Img2.jpg" />
                            <Card image="/Images/gird2Img3.jpg" />
                            <Card image="/Images/gird2Img4.jpg" />
                            <Card image="/Images/gird2Img5.jpg" />
                            <Card image="/Images/gird2Img6.jpg" />
                            <Card image="/Images/gird2Img7.jpg" />
                        </Grid>

                        <Grid item xs={3} >
                            <Card image="/Images/gird3Img1.jpg" />
                            <Card image="/Images/gird3Img2.jpg" />
                            <Card image="/Images/gird3Img3.jpg" />
                            <Card image="/Images/gird3Img4.jpg" />
                            <Card image="/Images/gird3Img5.jpg" />
                            <Card image="/Images/gird3Img6.jpg" />
                        </Grid>

                        <Grid item xs={3} >
                            <Card image="/Images/gird4Img1.jpg" />
                            <Card image="/Images/gird4Img2.jpg" />
                            <Card image="/Images/gird4Img3.jpg" />
                            <Card image="/Images/gird4Img4.jpg" />
                            <Card image="/Images/gird4Img5.jpg" />
                        </Grid>

                    </Grid>

                </div>
            </section>

            <section className={styles.popularSec}>
                <h1 className={styles.chooiceHead}>Popular Searches</h1>

                <div className={styles.ulDiv}>
                    <ul className={styles.ulUl}>
                        <li className={styles.pLi}> <Link className={styles.pLink}>Family</Link>  </li>
                        <li className={styles.pLi}> <Link className={styles.pLink}>Diwali</Link></li>
                        <li className={styles.pLi}> <Link className={styles.pLink}>Business</Link></li>
                        <li className={styles.pLi}> <Link className={styles.pLink}>Jewellary</Link></li>
                        <li className={styles.pLi}> <Link className={styles.pLink}>Couples</Link></li>
                        <li className={styles.pLi}> <Link className={styles.pLink}>Wedding</Link></li>
                        <li className={styles.pLi}> <Link className={styles.pLink}>Festivals</Link></li>
                        <li className={styles.pLi}> <Link className={styles.pLink}>Growth</Link></li>
                        <li className={styles.pLi}> <Link className={styles.pLink}>Money</Link></li>
                        <li className={styles.pLi}> <Link className={styles.pLink}>Farmer</Link></li>
                        <li className={styles.pLi}> <Link className={styles.pLink}>Kitchen</Link></li>
                        <li className={styles.pLi}> <Link className={styles.pLink}>Doctor</Link></li>
                        <li className={styles.pLi}> <Link className={styles.pLink}>Celebration</Link></li>
                        <li className={styles.pLi}> <Link className={styles.pLink}>Office</Link></li>
                        <li className={styles.pLi}> <Link className={styles.pLink}>Travel</Link></li>
                        <li className={styles.pLi}> <Link className={styles.pLink}>Shopping</Link></li>
                        <li className={styles.pLi}> <Link className={styles.pLink}>Education</Link></li>
                        <li className={styles.pLi}> <Link className={styles.pLink}>Students</Link></li>
                        <li className={styles.pLi}> <Link className={styles.pLink}>Insurance</Link></li>
                        <li className={styles.pLi}> <Link className={styles.pLink}>Mobile</Link></li>
                        <li className={styles.pLi}> <Link className={styles.pLink}>Computer</Link></li>
                        <li className={styles.pLi}> <Link className={styles.pLink}>Food</Link></li>
                        <li className={styles.pLi}> <Link className={styles.pLink}>Baby</Link></li>
                        <li className={styles.pLi}> <Link className={styles.pLink}>Fashion</Link></li>
                        <li className={styles.pLi}> <Link className={styles.pLink}>Beauty</Link></li>
                        <li className={styles.pLi}> <Link className={styles.pLink}>Women</Link></li>
                        <li className={styles.pLi}> <Link className={styles.pLink}>Youth</Link></li>
                        <li className={styles.pLi}> <Link className={styles.pLink}>Seniors</Link></li>
                        <li className={styles.pLi}> <Link className={styles.pLink}>Yoga</Link></li>
                        <li className={styles.pLi}> <Link className={styles.pLink}>Meditation</Link></li>
                        <li className={styles.pLi}> <Link className={styles.pLink}>Success</Link></li>
                        <li className={styles.pLi}> <Link className={styles.pLink}>Rular</Link></li>
                    </ul>
                </div>

            </section>

            <section className={styles.whiteSec}>
                <h1 className={styles.chooiceHead}>Why ImagesBazaar?</h1>
                <h4 className={styles.chooiceContent}>
                    India's diversity and complexity can be witnessed through its people, traditions and values associated with distinctive regional customs,
                    habits, lifestyle and festivals. That's why our content reflects the innate expressions of deep-rooted feelings of individuals through which
                    spring their day-to-day actions. From contemporary concepts and ideas to the broadest range of categories depicting Indians in virtually all
                    walks of life, age groups and expressions - you will find it all here!

                    <Link to='/' classname={styles.kMore}> Know More </Link>
                </h4>

            </section>

        </>
    )
}

export default Home
