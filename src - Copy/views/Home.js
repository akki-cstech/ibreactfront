import React from 'react';
import styles from '../CSS/Home.module.css'
import Card from '../components/common/Card'
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Header from '../components/navs/Header';
import Footer from '../components/navs/Footer';

const Home = ({ Loader, progress, setProgress }) => {
    setProgress(100)
    // if (header) {
    //     console.log("Header  : ", header)
    //     document.getElementById('txtsearch1').value = ""
    // }
    // window.onscroll = async (e) => {
    //     if (window.scrollY > 20) {
    //         document.getElementById("header05-b").className = "header1 cid-rhcQoyVnsB sticky";
    //     } else {
    //         document.getElementById("header05-b").className = "header1 cid-rhcQoyVnsB";
    //     }
    // }
    window.onscroll = async (e) => {
        if (window.scrollY > 20) {
            document.getElementById("topheader").className = "searchGrid sticky";
            } else {
                 document.getElementById("topheader").className = "searchGrid";
            }
        }
        
    return (
        <>
            <Header />
            <section className={styles.imgSec}>
                <img src="https://www.imagesbazaar.com/BannerImages/Freebanner.jpg" alt="" width="100%" height="100%" />
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

                        <Grid item lg={3} md={6} sm={6} xs={12} >

                            <Card
                                image="/Images/gird1Img1.jpg"
                                text="Concept & Ideas >"
                            />

                            <Card
                                image="/Images/gird1Img2.jpg"
                                text="Lifestyle: Families >"
                            />

                            <Card
                                image="/Images/gird1Img3.jpg"
                                text="Lifestyle: Childern >"
                            />

                            <Card
                                image="/Images/gird1Img4.jpg"
                                text="Banking & Finance >"
                            />


                            <Card
                                image="/Images/gird1Img5.jpg"
                                text="Shopping & Retail >"
                            />

                            <Card
                                image="/Images/gird1Img6.jpg"
                                text="Lifestyle: Teenagers >"
                            />

                        </Grid>

                        <Grid item lg={3} md={6} sm={6} xs={12} >

                            <Card
                                image="/Images/gird2Img1.jpg"
                                text="Lifestyle: Seniors >"
                            />

                            <Card
                                image="/Images/gird2Img2.jpg"
                                text="Vacatioins & Holidays >"
                            />

                            <Card
                                image="/Images/gird2Img3.jpg"
                                text="Without People >"
                            />

                            <Card
                                image="/Images/gird2Img4.jpg"
                                text="Wedding >"
                            />

                            <Card
                                image="/Images/gird2Img5.jpg"
                                text="Healthcare & Medical >"
                            />

                            <Card
                                image="/Images/gird2Img6.jpg"
                                text="Indian Culture >"
                            />

                            <Card
                                image="/Images/gird2Img7.jpg"
                                text="Fashion >"
                            />

                        </Grid>

                        <Grid item lg={3} md={6} sm={6} xs={12} >
                            <Card
                                image="/Images/gird3Img1.jpg"
                                text="Beauty >"
                            />

                            <Card
                                image="/Images/gird3Img2.jpg"
                                text="Fitness >"
                            />

                            <Card
                                image="/Images/gird3Img3.jpg"
                                text="Lifestyle: Adults >"
                            />

                            <Card
                                image="/Images/gird3Img4.jpg"
                                text="Festivals & Occasions >"
                            />

                            <Card
                                image="/Images/gird3Img5.jpg"
                                text="Education & Learning >"
                            />

                            <Card
                                image="/Images/gird3Img6.jpg"
                                text="Food & Drink >"
                            />

                        </Grid>

                        <Grid item lg={3} md={6} sm={6} xs={12} >
                            <Card
                                image="/Images/gird4Img1.jpg"
                                text="Business & Corporate >"
                            />

                            <Card
                                image="/Images/gird4Img2.jpg"
                                text="Friends >"
                            />

                            <Card
                                image="/Images/gird4Img3.jpg"
                                text="Rural India >"
                            />

                            <Card
                                image="/Images/gird4Img4.jpg"
                                text="Nature >"
                            />

                            <Card
                                image="/Images/gird4Img5.jpg"
                                text="Lifestyle: Couples >"
                            />

                        </Grid>

                    </Grid>

                </div>
            </section>

            <section className={styles.popularSec}>
                <div className="container">
                <div className={styles.pDiv}>
                    <h1 className={styles.pHead}>Popular Searches</h1>
                    <div className={styles.ulDiv}>
                        <ul className={styles.ulUl}>
                            <li className={styles.pLi}> <Link className={styles.pLink} to="/search?q=Family">Family</Link>  </li>
                            <li className={styles.pLi}> <Link className={styles.pLink} to="/search?q=Diwali">Diwali</Link></li>
                            <li className={styles.pLi}> <Link className={styles.pLink}  to="/search?q=Business">Business</Link></li>
                            <li className={styles.pLi}> <Link className={styles.pLink}  to="/search?q=Couples">Couples</Link></li>
                            <li className={styles.pLi}> <Link className={styles.pLink}  to="/search?q=Jewellary">Jewellary</Link></li>
                            <li className={styles.pLi}> <Link className={styles.pLink}  to="/search?q=Wedding">Wedding</Link></li>
                            <li className={styles.pLi}> <Link className={styles.pLink}  to="/search?q=Festivals">Festivals</Link></li>
                            <li className={styles.pLi}> <Link className={styles.pLink}  to="/search?q=Growth">Growth</Link></li>
                            <li className={styles.pLi}> <Link className={styles.pLink}  to="/search?q=Money">Money</Link></li>
                            <li className={styles.pLi}> <Link className={styles.pLink}  to="/search?q=Farmer">Farmer</Link></li>
                            <li className={styles.pLi}> <Link className={styles.pLink}  to="/search?q=Kitchen">Kitchen</Link></li>
                            <li className={styles.pLi}> <Link className={styles.pLink}  to="/search?q=Doctor">Doctor</Link></li>
                            <li className={styles.pLi}> <Link className={styles.pLink}  to="/search?q=Celebration">Celebration</Link></li>
                            <li className={styles.pLi}> <Link className={styles.pLink}  to="/search?q=Office">Office</Link></li>
                            <li className={styles.pLi}> <Link className={styles.pLink}  to="/search?q=Travel">Travel</Link></li>
                            <li className={styles.pLi}> <Link className={styles.pLink}  to="/search?q=Shopping">Shopping</Link></li>
                            <li className={styles.pLi}> <Link className={styles.pLink}  to="/search?q=Education">Education</Link></li>
                            <li className={styles.pLi}> <Link className={styles.pLink}  to="/search?q=Students">Students</Link></li>
                            <li className={styles.pLi}> <Link className={styles.pLink}  to="/search?q=Insurance">Insurance</Link></li>
                            <li className={styles.pLi}> <Link className={styles.pLink}  to="/search?q=Mobile">Mobile</Link></li>
                            <li className={styles.pLi}> <Link className={styles.pLink}  to="/search?q=Computer">Computer</Link></li>
                            <li className={styles.pLi}> <Link className={styles.pLink}  to="/search?q=Food">Food</Link></li>
                            <li className={styles.pLi}> <Link className={styles.pLink}  to="/search?q=Baby">Baby</Link></li>
                            <li className={styles.pLi}> <Link className={styles.pLink}  to="/search?q=Fashion">Fashion</Link></li>
                            <li className={styles.pLi}> <Link className={styles.pLink}  to="/search?q=Beauty">Beauty</Link></li>
                            <li className={styles.pLi}> <Link className={styles.pLink}  to="/search?q=Women">Women</Link></li>
                            <li className={styles.pLi}> <Link className={styles.pLink}  to="/search?q=Youth">Youth</Link></li>
                            <li className={styles.pLi}> <Link className={styles.pLink}  to="/search?q=Seniors">Seniors</Link></li>
                            <li className={styles.pLi}> <Link className={styles.pLink}  to="/search?q=Yoga">Yoga</Link></li>
                            <li className={styles.pLi}> <Link className={styles.pLink}  to="/search?q=Meditation">Meditation</Link></li>
                            <li className={styles.pLi}> <Link className={styles.pLink}  to="/search?q=Success">Success</Link></li>
                            <li className={styles.pLi}> <Link className={styles.pLink}  to="/search?q=Rular">Rular</Link></li>
                        </ul>
                    </div>
                </div>
                </div>
            </section>

            <section className={styles.whiteSec}>
            <Container>
            <div className={styles.whyDiv}>
                    <h1 className={styles.chooiceHead}>Why ImagesBazaar?</h1>
                    <h4 className={styles.chooiceContent}>
                        India's diversity and complexity can be witnessed through its people, traditions and values associated with distinctive regional customs,
                        habits, lifestyle and festivals. That's why our content reflects the innate expressions of deep-rooted feelings of individuals through which
                        spring their day-to-day actions. From contemporary concepts and ideas to the broadest range of categories depicting Indians in virtually all
                        walks of life, age groups and expressions - you will find it all here!

                        <Link to='/' style={{ color: "#337ab7" }}> Know More </Link>                </h4>
                </div>
            </Container>
            </section>
            <Footer />
        </>
    )
}

export default Home
