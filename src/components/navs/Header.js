import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

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
import Category from '../../utils/helpers/JSON/Category.json'
import SecondDiv from '../common/Sidebar/SecondDiv'

function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}
const Header = () => {

    const [sideBar, setSideBar] = useState("sideInActive");
    const [zeynepO, setZeynepO] = useState("zClosed");
    const [overflow, setOverflow] = useState('')


    const [tvShow, settvShow] = React.useState('');

    const handleChange = (event) => {
        settvShow(event.target.value);
    };

    // const Header = ({ inputValue, setInputValue, onLoader, searchQuery }) => {
    const [isAutoCompleted, setIsAutoCompleted] = useState(false);
    var [isCount, setIsCount] = useState(0);
    let history = useHistory();
    const query = useQuery();

    const id = query.get("q") || '';
    const person = query.get('person')
    const location = query.get('location')
    const age = query.get('age')
    const orientation = query.get('orientation')

    const initialSearch = {
        id: id,
        person: person || 0,
        location: location || 0,
        age: age || 0,
        orientation: orientation || 0
    }



    const [user, setUser] = useState({
        search: id
    });
    const [loggedUser, setLoggedUser] = useState(null)
    const [AutoCompleteData, setAutoCompleteData] = useState([]);
    const { search } = user;

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedUser')
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            // console.log('check user', user)
            setLoggedUser(user)
        }
        setUser({
            search: id
        })
    }, [id])

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
            const startsWithN = items.filter((country) => country.name.startsWith(keyword.toLowerCase()));
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
        // alert("caaledd")
        // document.scroll(0,0)
        // window.scroll(0, 0);
        setIsAutoCompleted(false);
        console.log(user.search)
        var keyword = user.search
        let updateState = { ...user }
        updateState.search = keyword
        setUser({ ...updateState })
        if (user.search !== "") {
            e.preventDefault();
            console.log("called from header");
            await getSearchRecord(initialSearch);
            window.scroll(0, 0);
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
            await getSearchRecord(initialSearch);
            //console.log(res.res.data.data);
            window.scroll(0, 0);
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

    const openFun = () => {

        var element = document.getElementsByTagName("body");
        element[0].classList.toggle("overflow");

        if (sideBar === "sideInActive") {
            setSideBar("sideActive")

        }
        else {
            setSideBar("sideInActive")

        }

        if (zeynepO === "zClosed") {
            setZeynepO("zOpen")

        }
        else {
            setZeynepO("zClosed")

        }
    }

    const overflowFun = () => {
        if (overflow === "overflow") {
            setOverflow("")

        }
        else {
            setOverflow("overflow")

        }
    }

    const logoutFun = () => {
        window.localStorage.removeItem('loggedUser')
        history.push('/')
    }

    const loggedDropDown = () => {
        return (
            <Dropdown>
                <Dropdown.Toggle variant="dark" className="text-light">
                    {loggedUser.f_fullname}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={logoutFun}>Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        )
    }


    return (
        <>
            <section className={styles.sideGrid}>

                <div className={`zeynep ${sideBar} ${overflow}`}  >
                    <div className='btn_open2' onClick={openFun}  >
                        <span className="firstbrowse">Browse Category</span>
                        <span className="closebrowse">X</span></div>

                    <ul className={`${overflow}`}>


                        {Category.NewDataSet.Table.map((e) => (

                            <SecondDiv e={e} openFun={openFun} overflowFun={overflowFun} />

                        ))
                        }

                    </ul>

                </div>


                <div className={`zeynep_overlay ${zeynepO}`} onClick={openFun}></div>

            </section>

            <section className="{styles.head_sec}">
                <Grid container className="header_section">

                    <Grid className={styles.browserGrid} item sm={4} lg={4} md={4} xs={1}>
                        <div className={styles.browserDiv} onClick={openFun}>

                            ☰
                            <b className="hidden-xs">
                                BROWSE CATEGORIES
                            </b>

                        </div>
                    </Grid>

                    <Grid className="heading" item sm={4} lg={4} md={4} xs={5}>
                        <div className="Logo_Img">
                            <div className="navbar-logo">
                                <Link to='/' onClick={() => {

                                }}>
                                    <img src="https://www.imagesbazaar.com/images/logo%20svg.svg" alt="" />
                                </Link>
                            </div>
                        </div>
                    </Grid>
                    <Grid className={styles.leftPane} item sm={4} lg={4} md={4} xs={6}>
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
                                        {!loggedUser && <Link className={styles.pricing} to='ibregistration'>Sign in</Link>}
                                        {loggedUser && loggedDropDown()}
                                        {/* <ul className={styles.navItems}>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                            <li></li>
                                        </ul> */}

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
                                <Grid item className="inputDiv" style={{lineHeight: "0px"}}>
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
                                <Grid item className="dropDiv">
                                    <div className="dropdown1">
                                        <div className="dropdown2">
                                            <div className="dropdown">
                                                <ul id="drpdwnTxt" style={{padding: '0px 24px'}}>
                                                    <li>
                                                        <Dropdown>
                                                            <Dropdown.Toggle id="dropdown-custom-components">Images</Dropdown.Toggle>
                                                            <Dropdown.Menu >
                                                                <Dropdown.Item
                                                                    key={`3RDDROP_VALUES1`}
                                                                    eventKey="Images">Images</Dropdown.Item>
                                                                <Dropdown.Item
                                                                    key={`3RDDROP_VALUES2`}
                                                                    eventKey="Videos"
                                                                >Videos</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <div className={styles.selectDiv}>
                                         <select className={sStyle.sSelect}>
                                            <option value="tvShow">Image</option>
                                            <option value="other">Video</option>
                                        </select> 
                                    </div> */}
                                    {/* <FormControl sx={{ m: 1, minWidth: 120 }} className={sStyle.formcontroldrop}>
                                        <Select value={tvShow}
                                            onChange={handleChange}
                                            displayEmpty
                                            inputProps={{ 'aria-label': 'Without label' }}
                                        >
                                            <MenuItem value="">Image</MenuItem>
                                            <MenuItem value={10}>Video</MenuItem>
                                        </Select>
                                    </FormControl> */}
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
