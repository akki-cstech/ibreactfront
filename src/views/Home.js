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
        // if (window.scrollY > 20) {
        //     document.getElementById("topheader").className = "searchGrid sticky";
        // } 
        // else {
        //     document.getElementById("topheader").className = "searchGrid sticky1";
        // }
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
                                link="/browserSearch/Concepts%20&%20Ideas%20>>%20View%20All?key=creative"
                                image="https://d3nn873nee648n.cloudfront.net/HomeImages/Concept-and-Ideas.jpg"
                                text="Concept & Ideas >"

                            />

                            <Card
                                link="/browserSearch/Lifestyle:%20Families%20>>%20View%20All?key=family"
                                image="https://d3nn873nee648n.cloudfront.net/HomeImages/Lifestyle-Families.jpg"
                                text="Lifestyle: Families >"
                            />

                            <Card
                                link="/browserSearch/Lifestyle:%20Children%20>>%20View%20All?key=kids%20only"
                                image="https://d3nn873nee648n.cloudfront.net/HomeImages/Lifestyle-Children.jpg"
                                text="Lifestyle: Childern >"
                            />

                            <Card
                                link="/search?q=Banking%20Finance"
                                image="https://d3nn873nee648n.cloudfront.net/HomeImages/Banking-and-Finance.jpg"
                                text="Banking & Finance >"
                            />


                            <Card
                                link="/browserSearch/Shopping%20&%20Retail%20>>%20View%20All?key=shopping"
                                image="https://d3nn873nee648n.cloudfront.net/HomeImages/Shopping-and-Retail.jpg"
                                text="Shopping & Retail >"
                            />

                            <Card
                                link="/browserSearch/Lifestyle:%20Teenagers%20>>%20View%20All?key=Teenagers%20Only"
                                image="	https://d3nn873nee648n.cloudfront.net/HomeImages/Lifestyle-Teenagers.jpg"
                                text="Lifestyle: Teenagers >"
                            />

                        </Grid>

                        <Grid item lg={3} md={6} sm={6} xs={12} >

                            <Card
                                link="/browserSearch/Lifestyle:%20Seniors%20>>%20View%20All?key=seniors"
                                image="	https://d3nn873nee648n.cloudfront.net/HomeImages/Lifestyle-Seniors.jpg"
                                text="Lifestyle: Seniors >"
                            />

                            <Card
                                link="/browserSearch/Vacatioins%20&%20Holidays%20>>%20View%20All?key=vacations"
                                image="https://d3nn873nee648n.cloudfront.net/HomeImages/Vacation-and-Holidays.jpg"
                                text="Vacatioins & Holidays >"
                            />

                            <Card
                                link="/browserSearch/Without%20People%20Concepts%20>>%20View%20All?key=Nobody"
                                image="	https://d3nn873nee648n.cloudfront.net/HomeImages/Without-People.jpg"
                                text="Without People >"
                            />

                            <Card
                                link="/search?q=Wedding"
                                image="	https://d3nn873nee648n.cloudfront.net/HomeImages/Wedding.jpg"
                                text="Wedding >"
                            />

                            <Card
                                link="/search?q=Medical"
                                image="	https://d3nn873nee648n.cloudfront.net/HomeImages/Healthcare-and-Medical.jpg"
                                text="Healthcare & Medical >"
                            />

                            <Card
                                link="/browserSearch/Indian%20Culture%20>>%20View%20All?key=indian%20culture"
                                image="	https://d3nn873nee648n.cloudfront.net/HomeImages/Indian-Culture.jpg"
                                text="Indian Culture >"
                            />

                            <Card
                                link="/search?q=Fashion"
                                image="	https://d3nn873nee648n.cloudfront.net/HomeImages/Fashion71.jpg"
                                text="Fashion >"
                            />

                        </Grid>

                        <Grid item lg={3} md={6} sm={6} xs={12} >
                            <Card
                                link="/search?q=Beauty"
                                image="	https://d3nn873nee648n.cloudfront.net/HomeImages/Beauty.jpg"
                                text="Beauty >"
                            />

                            <Card
                                link="/search?q=Fitness"
                                image="	https://d3nn873nee648n.cloudfront.net/HomeImages/Fitness.jpg"
                                text="Fitness >"
                            />

                            <Card
                                link="/browserSearch/Lifestyle:%20Adults%20>>%20View%20All?key=lifestyle%20adults%20only"
                                image="	https://d3nn873nee648n.cloudfront.net/HomeImages/Lifestyle-Adult.jpg"
                                text="Lifestyle: Adults >"
                            />

                            <Card
                                link="/browserSearch/Festivals%20&%20Occasions%20>>%20View%20All?key=occasion"
                                image="	https://d3nn873nee648n.cloudfront.net/HomeImages/Festivals-and-Occasions.jpg"
                                text="Festivals & Occasions >"
                            />

                            <Card
                                link="/browserSearch/Education%20&%20Learning%20>>%20View%20All?key=Learning"
                                image="	https://d3nn873nee648n.cloudfront.net/HomeImages/Education-and-Learning.jpg"
                                text="Education & Learning >"
                            />

                            <Card
                                link="/browserSearch/Food%20&%20Drink%20>>%20View%20All?key=food"
                                image="	https://d3nn873nee648n.cloudfront.net/HomeImages/Food-and-Drink1.jpg"
                                text="Food & Drink >"
                            />

                        </Grid>

                        <Grid item lg={3} md={6} sm={6} xs={12} >
                            <Card
                                link="/browserSearch/Business%20&%20Corporate%20>>%20View%20All?key=business"
                                image="	https://d3nn873nee648n.cloudfront.net/HomeImages/Business-and-Corporate.jpg"
                                text="Business & Corporate >"
                            />

                            <Card
                                link="/search?q=Friends"
                                image="	https://d3nn873nee648n.cloudfront.net/HomeImages/Friends.jpg"
                                text="Friends >"
                            />

                            <Card
                                link="/browserSearch/Rural%20India%20>>%20View%20All?key=rural"
                                image="	https://d3nn873nee648n.cloudfront.net/HomeImages/Rural-India.jpg"
                                text="Rural India >"
                            />

                            <Card
                                link="/browserSearch/Nature%20&%20Landscapes%20>>%20View%20All?key=nature"
                                image="	https://d3nn873nee648n.cloudfront.net/HomeImages/Nature.jpg"
                                text="Nature >"
                            />

                            <Card
                                link="/browserSearch/Lifestyle:%20Couples%20>>%20View%20All?key=couples"
                                image="	https://d3nn873nee648n.cloudfront.net/HomeImages/Lifestyle-Couple1.jpg"
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
                                <li className={styles.pLi}> <Link className={styles.pLink} to="/search?q=Business">Business</Link></li>
                                <li className={styles.pLi}> <Link className={styles.pLink} to="/search?q=Couples">Couples</Link></li>
                                <li className={styles.pLi}> <Link className={styles.pLink} to="/search?q=Jewellary">Jewellary</Link></li>
                                <li className={styles.pLi}> <Link className={styles.pLink} to="/search?q=Wedding">Wedding</Link></li>
                                <li className={styles.pLi}> <Link className={styles.pLink} to="/search?q=Festivals">Festivals</Link></li>
                                <li className={styles.pLi}> <Link className={styles.pLink} to="/search?q=Growth">Growth</Link></li>
                                <li className={styles.pLi}> <Link className={styles.pLink} to="/search?q=Money">Money</Link></li>
                                <li className={styles.pLi}> <Link className={styles.pLink} to="/search?q=Farmer">Farmer</Link></li>
                                <li className={styles.pLi}> <Link className={styles.pLink} to="/search?q=Kitchen">Kitchen</Link></li>
                                <li className={styles.pLi}> <Link className={styles.pLink} to="/search?q=Doctor">Doctor</Link></li>
                                <li className={styles.pLi}> <Link className={styles.pLink} to="/search?q=Celebration">Celebration</Link></li>
                                <li className={styles.pLi}> <Link className={styles.pLink} to="/search?q=Office">Office</Link></li>
                                <li className={styles.pLi}> <Link className={styles.pLink} to="/search?q=Travel">Travel</Link></li>
                                <li className={styles.pLi}> <Link className={styles.pLink} to="/search?q=Shopping">Shopping</Link></li>
                                <li className={styles.pLi}> <Link className={styles.pLink} to="/search?q=Education">Education</Link></li>
                                <li className={styles.pLi}> <Link className={styles.pLink} to="/search?q=Students">Students</Link></li>
                                <li className={styles.pLi}> <Link className={styles.pLink} to="/search?q=Insurance">Insurance</Link></li>
                                <li className={styles.pLi}> <Link className={styles.pLink} to="/search?q=Mobile">Mobile</Link></li>
                                <li className={styles.pLi}> <Link className={styles.pLink} to="/search?q=Computer">Computer</Link></li>
                                <li className={styles.pLi}> <Link className={styles.pLink} to="/search?q=Food">Food</Link></li>
                                <li className={styles.pLi}> <Link className={styles.pLink} to="/search?q=Baby">Baby</Link></li>
                                <li className={styles.pLi}> <Link className={styles.pLink} to="/search?q=Fashion">Fashion</Link></li>
                                <li className={styles.pLi}> <Link className={styles.pLink} to="/search?q=Beauty">Beauty</Link></li>
                                <li className={styles.pLi}> <Link className={styles.pLink} to="/search?q=Women">Women</Link></li>
                                <li className={styles.pLi}> <Link className={styles.pLink} to="/search?q=Youth">Youth</Link></li>
                                <li className={styles.pLi}> <Link className={styles.pLink} to="/search?q=Seniors">Seniors</Link></li>
                                <li className={styles.pLi}> <Link className={styles.pLink} to="/search?q=Yoga">Yoga</Link></li>
                                <li className={styles.pLi}> <Link className={styles.pLink} to="/search?q=Meditation">Meditation</Link></li>
                                <li className={styles.pLi}> <Link className={styles.pLink} to="/search?q=Success">Success</Link></li>
                                <li className={styles.pLi}> <Link className={styles.pLink} to="/search?q=Rular">Rular</Link></li>
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
