import React from 'react';
import { TextField, Autocomplete, createFilterOptions } from '@mui/material';
import { top100Films } from "../../utils/helpers/AutocompleteList";
// import { makeStyles } from "@mui/styles";
import { useHistory } from "react-router-dom"
import styles from '../../CSS/Header.module.css'
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import { Grid, Badge } from '@material-ui/core';


const useStyles = makeStyles({
    option: {

        "&": {
            color: "black",
            fontWeight: "900"
        }

    }
});

const Header = ({ inputValue, setInputValue, onLoader }) => {
    // const classes = useStyles();
    const history = useHistory();

    const pushfun = (value) => {
        setTimeout(() => {
            history.push(`/search?q=${value}`);
        }, 1000)
    }

    const OPTIONS_LIMIT = 10;
    const defaultFilterOptions = createFilterOptions();

    const filterOptions = (options, state) => {
        return defaultFilterOptions(options, state).slice(0, OPTIONS_LIMIT);
    };
    const style = useStyles();
    return (
        <>
            <section className={styles.head_sec}>

                <Grid container>

                    <Grid className="" item xs={4}>

                    </Grid>


                    <Grid className={styles.heading} item xs={4}>
                        <Link to='/' onClick={() => {
                            onLoader();
                        }}>

                            <img src="https://www.imagesbazaar.com/images/logo%20svg.svg" alt="" />

                        </Link>


                    </Grid>

                    <Grid className={styles.leftPane} item xs={4}>

                        <div className={styles.navbar}>

                            <Link className={styles.pricing} to=''>Pricing</Link>

                            <span>
                                <Badge badgeContent={104} className={styles.badge}>
                                    <i className={`${styles.pricing} fas fa-heart`}></i>
                                </Badge>

                                <Badge badgeContent={4} className={styles.badge}>
                                    <i className={`${styles.pricing} fas fa-shopping-cart`}></i>

                                </Badge>
                            </span>

                            <div>
                                <ul>
                                    <li>

                                        <Link className={styles.pricing} to=''>Atti Cs Tech</Link>

                                        <ul className={styles.navItems}>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul>

                                    </li>
                                </ul>
                            </div>

                        </div>

                    </Grid>


                </Grid>
                <Autocomplete
                    filterOptions={filterOptions}
                    className={styles.searchInput}
                    classes={{
                        option: style.option
                    }}
                    inputValue={inputValue}
                    onInputChange={(event, newInputValue) => {
                        // onLoader();
                        setInputValue(newInputValue);
                        // pushfun(newInputValue);
                    }}
                    onChange={(event, newInputValue) => {
                        console.log("newInputValue onChange : ", newInputValue)
                        onLoader();
                        if (newInputValue) {
                            setInputValue(newInputValue.name);
                            pushfun(newInputValue.name);
                        }
                        else {
                            setInputValue(newInputValue);
                            pushfun(newInputValue);
                        }
                    }}


                    onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                            console.log("newInputValue : ", event.target.value)
                            onLoader();
                            if (event.target.value) {
                                setInputValue(event.target.value);
                                pushfun(event.target.value);
                            }
                            else {
                                setInputValue(event.target.value);
                                pushfun(event.target.value);
                            }
                        }
                    }}
                    id="controllable-states-demo"
                    options={top100Films}
                    getOptionLabel={(option) => option.name}

                    renderInput={(params) => <TextField className={styles.searchTextField}
                        onSubmit={(event, newInputValue) => {
                            console.log("newInputValue : ", newInputValue)
                            onLoader();
                            setInputValue(newInputValue.name);
                            pushfun(newInputValue.name);
                        }}  {...params} placeholder='Search' />


                    }

                />


            </section>



        </>
    )
}

export default Header
