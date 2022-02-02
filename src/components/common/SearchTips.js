import React from 'react'
import styles from '../../CSS/SearchTips.module.css'
import {Grid} from '@material-ui/core'
import {Link} from 'react-router-dom'

const SearchTips = () => {
    return (
        <>
            <Grid container className={styles.Without_Keyword}>
                <Grid item md={6} sm={6} xs={12} >
                    <h5 className={styles.text_left}>SEARCH TIPS</h5>
                    <div className={styles.Search_TipsResult} >
                        <p className={styles.bold}>The following tips may help you perform a successful search:</p>
                        <ul>
                            <li>Check for misspellings and typos among your keywords:</li>
                            <li>Consider trying different, fewer, or more general keywords: </li>
                            <li>Do not use punctuation marks (eg: commas, hyphens, inverted commas, etc.):</li>
                        </ul>
                    </div>
                    <div className={styles.Search_TipsResult} >
                        <p className={styles.bold}> If you continue to encounter problems with your search results, please do one of the following:</p>
                        <ul>
                            <li> Consult our <Link to="/searchtips">Search Tips</Link>
                                section
                                for more comprehensive
                                search guidance.</li>
                            <li> Send us a <Link to="/freeresearch">Free Research </Link>
                                request and we will help you
                                find the image(s)
                                you're looking
                                for.</li>
                            <li> Kindly call us on any of the numbers given below and we
                                will help you find the
                                image(s) you are looking
                                for:</li>
                        </ul>
                    </div>
                </Grid >
                <Grid item md={5} sm={6} xs={12} className={styles.Search_TipsResult1Grid}   >
                    <div className={styles.Search_TipsResult1}>
                        <p className={styles.bold}>Office Timings (IST):</p>
                        <p>Monday to Friday: 10:00 AM to 8:30 PM</p>
                        <p>Saturday: 10:00 AM to 6:00 PM</p>
                        <p>(Closed on Sundays and National Holidays of India)</p>
                        <Grid container >
                            <Grid item md={3} sm={3} xs={4}>
                                <ul className={styles.list_unstyled}>
                                    <li>Mumbai</li>
                                    <li>Delhi</li>
                                    <li>Bangalore</li>
                                    <li>Pune</li>
                                    <li>Cochin</li>
                                    <li>Kolkata</li>
                                    <li>Hyderabad</li>
                                    <li>Indore</li>
                                    <li>Lucknow</li>
                                    <li>Chandigarh</li>
                                    <li>Ahmedabad</li>

                                </ul>
                            </Grid>
                            <Grid item md={1} sm={2} xs={1}  >
                                <ul className={styles.list_unstyled}>
                                    <li>:</li>
                                    <li>:</li>
                                    <li>:</li>
                                    <li>:</li>
                                    <li>:</li>
                                    <li>:</li>
                                    <li>:</li>
                                    <li>:</li>
                                    <li>:</li>
                                    <li>:</li>
                                    <li>:</li>
                                </ul>
                            </Grid>
                            <Grid md={6} sm={7} xs={7} >
                                <ul className={styles.list_unstyled}>
                                    <li> 93202-66666</li>
                                    <li> 99113-66666</li>
                                    <li> 93420-66666</li>
                                    <li> 93252-65666</li>
                                    <li> 93885-66666</li>
                                    <li> 93399-66666</li>
                                    <li> 93488-66666</li>
                                    <li> 93292-65666</li>
                                    <li> 93078-65666</li>
                                    <li> 93564-65666</li>
                                    <li> 93761-66666</li>
                                </ul>
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>

        </>
    )
}

export default SearchTips
