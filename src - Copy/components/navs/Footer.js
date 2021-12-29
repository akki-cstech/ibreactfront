import React from 'react'
import { Grid } from '@material-ui/core'
import styles from '../../CSS/Footer.module.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <section className={styles.fooSec} >
                <Grid container className={styles.parentGrid} >

                    <Grid className={styles.fooHead} item xs={12}>
                        <h3 >World's largest collection of Creative Indian images & videos</h3>
                    </Grid>

                    <Grid className={styles.bottomGrid} item xs={12}>
                        <Grid container>
                            <Grid className={styles.leftpane} item xs={8}>
                                <div>
                                    <h3 >All India Toll Free: 1800-11-6869</h3>
                                </div>

                                <div>
                                    <div>
                                        <img src="/Images/cardImg.png" alt="" />
                                        <h3 className={styles.copyright}>© ImagesBazaar.com. A division of Mash Audio Visuals Pvt. Ltd. All rights reserved.</h3>
                                    </div>
                                </div>

                            </Grid>

                            <Grid item xs={4}>
                                <Grid container>

                                    <Grid item xs={4}>
                                        <h3>Company Info</h3>
                                        <br />
                                        <Grid container>
                                            <Grid className={styles.fooItems} item xs={12}>
                                                <h5> <Link to='/'> Home </Link> </h5>
                                            </Grid>

                                            <Grid className={styles.fooItems} item xs={12}>
                                                <h5> <Link to='/'> About Us </Link> </h5>
                                            </Grid>

                                            <Grid className={styles.fooItems} item xs={12}>
                                                <h5> <Link to='/'> Testimonials </Link> </h5>
                                            </Grid>

                                            <Grid className={styles.fooItems} item xs={12}>
                                                <h5> <Link to='/'> Image Research </Link> </h5>
                                            </Grid>

                                        </Grid>

                                    </Grid>

                                    <Grid item xs={4}>
                                        <h3>Learn More</h3>
                                        <br />
                                        <Grid container>
                                            <Grid className={styles.fooItems} item xs={12}>
                                                <h5> <Link to='/'> Pricing </Link> </h5>
                                            </Grid>

                                            <Grid className={styles.fooItems} item xs={12}>
                                                <h5> <Link to='/'> Licensing </Link> </h5>
                                            </Grid>

                                            <Grid className={styles.fooItems} item xs={12}>
                                                <h5> <Link to='/'> Terms of Use </Link> </h5>
                                            </Grid>

                                            <Grid className={styles.fooItems} item xs={12}>
                                                <h5> <Link to='/'> Privacy Policy </Link> </h5>
                                            </Grid>

                                        </Grid>

                                    </Grid>

                                    <Grid item xs={4}>
                                        <h3>Need Help</h3>
                                        <br />
                                        <Grid container>
                                            <Grid className={styles.fooItems} item xs={12}>
                                                <h5> <Link to='/'> Contact Us </Link> </h5>
                                            </Grid>

                                            <Grid className={styles.fooItems} item xs={12}>
                                                <h5> <Link to='/'> Search Tips </Link> </h5>
                                            </Grid>

                                            <Grid className={styles.fooItems} item xs={12}>
                                                <h5> <Link to='/'> FAQ </Link> </h5>
                                            </Grid>

                                            <Grid className={styles.fooItems} item xs={12}>
                                                <h5> <Link to='/'> Technical </Link> </h5>
                                            </Grid>

                                        </Grid>

                                    </Grid>

                                </Grid>

                            </Grid>

                        </Grid>
                    </Grid>

                </Grid>



            </section>

        </>
    )
}

export default Footer
