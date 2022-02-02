import React from 'react'
import styles from '../../CSS/Searchbar.module.css'
import { Button, Grid } from '@material-ui/core';

const Searchbar = () => {
    return (
        <>
            <Grid container className={styles.searchDiv}>

                <Grid item xs={9} className={styles.inputDiv}>

                    <input className={styles.searchInput} type="search" name="search" placeholder='Search' />

                </Grid>

                <Grid item xs={3}>


                    <Grid container>
                        <Grid item xs={6} className={styles.dropDiv}>

                                <select className={styles.sSelect}>

                                    <option value="tvShow">Image</option>
                                    <option value="other">Video</option>

                                </select>

                        </Grid>

                        <Grid item xs={6} className={styles.dropDiv}>

                                <Button className={styles.searchBtn} variant="contained"><i className={`${styles.searchIcon} fas fa-search`}></i></Button>

                        </Grid>
                    </Grid>
                </Grid>


            </Grid>

        </>
    )
}

export default Searchbar
