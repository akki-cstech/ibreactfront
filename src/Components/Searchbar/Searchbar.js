import React from 'react'
import styles from '../../CSS/Searchbar.module.css'
import {Button} from '@material-ui/core'

const Searchbar = () => {
    return (
        <>
            <div className={styles.searchDiv}>

                <div className={styles.inputDiv}>
                    <fieldset className={styles.searchFieldset}>

                        <input className={styles.searchInput} type="search" name="search" placeholder='Search' />

                    </fieldset>
                </div>

                <div className={styles.dropDiv}>
                    <fieldset className={styles.searchFieldset}>

                        <select className={styles.sSelect}>

                            <option value="tvShow">Image</option>
                            <option value="other">Video</option>

                        </select>

                    </fieldset>
                </div>

                <div className={styles.dropDiv}>
                    <fieldset className={styles.searchFieldset}>

                        <Button className={styles.searchBtn} variant="contained"><i className={`${styles.searchIcon} fas fa-search`}></i></Button>

                    </fieldset>
                </div>


            </div>

        </>
    )
}

export default Searchbar
