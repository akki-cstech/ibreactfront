import React, { useState } from 'react';
import { useLocation } from "react-router-dom";

import { SearchItems } from "../../utils/helpers/AutocompleteList";
// import { makeStyles } from "@mui/styles";
import { getSearchRecord } from "../../utils/apis/api"
import { useHistory } from "react-router-dom"
import styles from '../../CSS/Header.module.css'
import { Link } from 'react-router-dom';
import sStyle from '../../CSS/Searchbar.module.css'
import { Grid, Button } from '@material-ui/core';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import LoadingBar from 'react-top-loading-bar'


function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}
const Header = () => {

    const [tvShow, settvShow] = React.useState('');

    const handleChange = (event) => {
        settvShow(event.target.value);
    };

    // const Header = ({ inputValue, setInputValue, onLoader, searchQuery }) => {
    const [isAutoCompleted, setIsAutoCompleted] = useState(false);
    var [isCount, setIsCount] = useState(0);
    let history = useHistory();
    const query = useQuery();

    var id = query.get("q")

    const [user, setUser] = useState({
        search: id
    });
    const [AutoCompleteData, setAutoCompleteData] = useState([]);
    const { search } = user;



    const onInputChange = e => {
        var items = SearchItems;
        console.log(e.target.value);
        var keyword = e.target.value
        // const startsWithN = items.filter((country) => country.name.startsWith(keyword));
        // console.log(startsWithN);
        // setIsAutoCompleted(true);
        // setAutoCompleteData(startsWithN)
        // setUser({ ...user, [e.target.name]: e.target.value });

        setUser({ ...user, [e.target.name]: e.target.value });

        if (keyword !== "") {
            const startsWithN = items.filter((country) => country.name.startsWith(keyword));
            // console.log(startsWithN);
            if (startsWithN.length > 0) {
                setAutoCompleteData(startsWithN);
                setIsAutoCompleted(true);
            } else {
                setIsAutoCompleted(false);
            }
        } else {
            setIsAutoCompleted(false);
        }
    }

    const onSubmit = async e => {
        // if (user.search !== "") {
        //     e.preventDefault();
        //     history.push(`/search?q=${user.search}`);
        // } else {
        //     alert('Please enter a search keyword')
        // }
        alert("caaledd")
        setIsAutoCompleted(false);
        console.log(user.search)
        var keyword = user.search
        let updateState = { ...user }
        updateState.search = keyword
        setUser({ ...updateState })
        if (user.search !== "") {
            // e.preventDefault();
            await getSearchRecord(user.search);
            history.push(`/search?q=${user.search}`);
        }
        else {
            alert('Please enter a search keyword')
        }
    };
    const onKeywordSelect = async (keyword) => {
        // if (keyword !== "") {
        //     history.push(`/search?q=${keyword}`);
        // } else {
        //     alert('Please enter a search keyword')
        // }
        if (keyword !== "") {

            let updateState = { ...user }
            updateState.search = keyword
            setUser({ ...updateState })
            setIsAutoCompleted(false);
            //   setUser(keyword)
            await getSearchRecord(user.search);
            //console.log(res.res.data.data);

            history.push(`/search?q=${keyword}`);
        }
        else {
            alert('Please enter a search keyword')
        }
    };
    const onKeyDown = e => {
        var countClick = isCount
        if (e.keyCode === 40) {
            console.log(AutoCompleteData.length);
            var autocompletLength = AutoCompleteData.length
            if (autocompletLength > 10) {
                autocompletLength = 10
            }
            // if (countClick <= 10 && )
            if (isCount <= 9 && isCount < autocompletLength) {
                var autocompleteName = AutoCompleteData[countClick].name
                countClick = isCount + 1
                // alert(countClick)
                setIsCount(countClick)
                console.log(isCount + '-----' + countClick);
                var x = document.getElementsByClassName('auto_cmplt');
                var i;
                for (i = 0; i < x.length; i++) {
                    x[i].style += ''; // WITH space added
                }
                console.log(isCount);
                if (isCount + 1 === countClick) {
                    document.getElementById('autocomplete_span' + countClick + '').style.backgroundColor = '#f5f5f5'
                }
                else {
                    document.getElementById('autocomplete_span' + countClick + '')
                }
            }
            // setUser(..user,autocompleteName)
            let updateState1 = { ...user }
            updateState1.search = autocompleteName
            setUser({ ...updateState1 })
            //setUser({ ...user,  autocompleteName });

            //console.log(li);
            // do your stuff
        }

        if (e.keyCode === 38) {
            console.log(AutoCompleteData.length);
            var autocompletLength1 = AutoCompleteData.length
            if (autocompletLength1 > 10) {
                autocompletLength1 = 10
            }
            // if (countClick <= 10 && )
            console.log(countClick)
            if (countClick > 1 && AutoCompleteData[countClick] !== undefined) {
                console.log(AutoCompleteData[countClick]);
                var autocompleteName1 = AutoCompleteData[countClick].name
                countClick = isCount - 1
                // alert(countClick)
                setIsCount(countClick)
                console.log(isCount + '-----' + countClick);
                var x1 = document.getElementsByClassName('auto_cmplt');
                var i1;
                for (i1 = 0; i1 < x1.length; i1++) {
                    x1[i1].style += ''; // WITH space added
                }
                console.log(isCount - 1 + '===' + countClick);
                if (isCount - 1 === countClick) {
                    console.log('countClick' + countClick);
                    document.getElementById('autocomplete_span' + countClick + '').style.backgroundColor = '#f5f5f5'
                }
                else {
                    document.getElementById('autocomplete_span' + countClick + '')
                }
            }
            // setUser(..user,autocompleteName)
            let updateState1 = { ...user }
            updateState1.search = autocompleteName1
            setUser({ ...updateState1 })
            //setUser({ ...user,  autocompleteName });

            //console.log(li);
            // do your stuff
        }
    };
    return (
        <>

            <section className={styles.head_sec}>
                <Grid container>
                    <Grid className="" item lg={4} xs={1}>
                    </Grid>
                    <Grid className={styles.heading} item lg={4} xs={5}>
                        <Link to='/' onClick={() => {

                        }}>
                            <img src="https://www.imagesbazaar.com/images/logo%20svg.svg" alt="" />
                        </Link>
                    </Grid>
                    <Grid className={styles.leftPane} item lg={4} xs={6}>
                        <div className={styles.navbar}>
                            <Link className={styles.pricing} to=''>Pricing</Link>
                            {/* <span>
                                <Badge badgeContent={104} className={styles.badge}>
                                    <i className={`${styles.pricing} fas fa-heart`}></i>
                                </Badge>
                                <Badge badgeContent={4} className={styles.badge}>
                                    <i className={`${styles.pricing} fas fa-shopping-cart`}></i>
                                </Badge>
                            </span> */}

                            <div>
                                <ul>
                                    <li>
                                        <Link className={styles.pricing} to=''>Sign in</Link>
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
                {/* <Autocomplete
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

                /> */}

                <form onSubmit={e => onSubmit(e)}>
                    <Grid className="searchGrid" id="topheader">
                        <Grid className="searchGrid1">
                            <Grid container className="searchDiv">
                                <Grid item className="inputDiv">
                                    <span>
                                        <i className={`${sStyle.searchIcon} fas fa-search`}></i>
                                    </span>
                                    <input
                                        className={sStyle.searchInput}
                                        id="txtsearch1"
                                        placeholder="Search the world's largest collection of Indian images" autoComplete="off"
                                        type="text" name="search"
                                        value={search}
                                        onChange={e => onInputChange(e)} onKeyDown={e => onKeyDown(e)}
                                    />
                                    {isAutoCompleted === true ?
                                        <div className="autocomplete_li">
                                            {AutoCompleteData.slice(0, 10).map((data, inx) => {
                                                return (
                                                    <p style={{ cursor: "pointer" }} onClick={(e) => onKeywordSelect(data.name)} className="auto_cmplt" id={`autocomplete_span${inx + 1}`}  >{data.name}</p>
                                                );
                                            })}
                                        </div> : ""}

                                </Grid>
                                <Grid item className={sStyle.dropDiv}>
                                    {/* <div className={styles.selectDiv}>
                                     <select className={sStyle.sSelect}>
                                        <option value="tvShow">Image</option>
                                        <option value="other">Video</option>
                                    </select> 
                                </div> */}
                                    <FormControl sx={{ m: 1, minWidth: 120 }} className={sStyle.formcontroldrop}>
                                        <Select value={tvShow}
                                            onChange={handleChange}
                                            displayEmpty
                                            inputProps={{ 'aria-label': 'Without label' }}
                                        >
                                            <MenuItem value="">Image</MenuItem>
                                            <MenuItem value={10}>Video</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} className={styles.autocompleteGrid}>

                        {/* {AutoCompleteData.slice(0, 20).map((data, inx) => {
                                return (
                                    <p style={{ cursor: "pointer" }} onClick={(e) => onKeywordSelect(data.name)} >{data.name}</p>
                                );
                            })} */}
                        {/* {isAutoCompleted === true ?
                            <div className="autocomplete_li">
                                {AutoCompleteData.slice(0, 10).map((data, inx) => {
                                    return (
                                        <p style={{ cursor: "pointer" }} onClick={(e) => onKeywordSelect(data.name)} className="auto_cmplt" id={`autocomplete_span${inx + 1}`}  >{data.name}</p>
                                    );
                                })}
                            </div> : ""} */}

                    </Grid>
                </form>



            </section>



        </>
    )
}

export default Header
