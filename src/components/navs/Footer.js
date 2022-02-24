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
                        <h5 className={styles.fooHeadH} >World's largest collection of Creative Indian <b>images</b>  & <b>videos</b> </h5>
                    </Grid>

                    <Grid className={styles.bottomGrid} item xs={12}>
                        <Grid container>
                            <Grid className={styles.leftpane} item lg={7} md={5} sm={6} xs={12}>
                                <div className="footer_text">
                                    <h3 >All India Toll Free: 1800-11-6869</h3>
                                </div>

                                <div>
                                    <div>
                                        <img src="/Images/cardImg.png" alt="" />
                                        <h3 className={styles.copyright}>© ImagesBazaar.com. A division of Mash Audio Visuals Pvt. Ltd. All rights reserved.</h3>
                                    </div>
                                </div>

                            </Grid>

                            <Grid item lg={5} md={7} sm={6} xs={12}>
                                <Grid container>

                                    <Grid item lg={4} md={4} sm={4} xs={4}>
                                        <h3 className={styles.conHead} >Company Info</h3>

                                        <br />
                                        <Grid container>
                                            <Grid className={styles.fooItems} item xs={12}>
                                                <h5> <Link to='/'> Home </Link> </h5>
                                            </Grid>

                                            <Grid className={styles.fooItems} item xs={12}>
                                                <h5> <Link to='/static/aboutus'> About Us </Link> </h5>
                                            </Grid>

                                            <Grid className={styles.fooItems} item xs={12}>
                                                <h5> <Link to='/static/testimonials'> Testimonials </Link> </h5>
                                            </Grid>

                                            <Grid className={styles.fooItems} item xs={12}>
                                                <h5> <Link to='/'> Image Research </Link> </h5>
                                            </Grid>

                                        </Grid>

                                    </Grid>

                                    <Grid item lg={4} md={4} sm={4} xs={4}>
                                        <h3 className={styles.conHead}>Learn More</h3>
                                        <br />
                                        <Grid container>
                                            <Grid className={styles.fooItems} item xs={12}>
                                                <h5> <Link to='/static/pricing'> Pricing </Link> </h5>
                                            </Grid>

                                            <Grid className={styles.fooItems} item xs={12}>
                                                <h5> <Link to='/static/licensing'> Licensing </Link> </h5>
                                            </Grid>

                                            <Grid className={styles.fooItems} item xs={12}>
                                                <h5> <Link to='/static/termsofuse'> Terms of Use </Link> </h5>
                                            </Grid>

                                            <Grid className={styles.fooItems} item xs={12}>
                                                <h5> <Link to='/'> Privacy Policy </Link> </h5>
                                            </Grid>

                                        </Grid>

                                    </Grid>

                                    <Grid item lg={4} md={4} sm={4} xs={4}>
                                        <h3 className={styles.conHead}>Need Help</h3>
                                        <br />
                                        <Grid container>
                                            <Grid className={styles.fooItems} item xs={12}>
                                                <h5> <Link to='/static/contactus'> Contact Us </Link> </h5>
                                            </Grid>

                                            <Grid className={styles.fooItems} item xs={12}>
                                                <h5> <Link to='/static/searchtips'> Search Tips </Link> </h5>
                                            </Grid>

                                            <Grid className={styles.fooItems} item xs={12}>
                                                <h5> <Link to='/static/faq'> FAQ </Link> </h5>
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
