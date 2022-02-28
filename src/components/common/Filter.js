import React, { useState, useEffect } from 'react'
import styles from '../../CSS/Filter.module.css'
import { Grid } from '@material-ui/core'
import { getSearchRecord } from "../../utils/apis/api"
import { useHistory, useLocation, useParams } from "react-router-dom"
import { queryAllByAltText } from '@testing-library/react'

function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}


const Filter = ({ totalLengthAndMsg, name, setSearchParams }) => {




    const query = useQuery();
    const history = useHistory();

    const [filOpen, setFilOpen] = useState("filClosed");

    const initialSearchQuery = {
        person: query.get('person') || 0,
        location: query.get('location') || 0,
        age: query.get('age') || 0,
        orientation: query.get('orientation') || 0
    }

    const [searchQuery, setSearchQuery] = useState(initialSearchQuery);



    const id = query.get("q") || query.get("key");
    // const person = query.get('person')
    // const location = query.get('location')
    // const age = query.get('age')
    // const orientation = query.get('orientation')
    const { filname } = useParams();






    useEffect(() => {

        keepOpen();
    }, []);

    useEffect(() => {

        if (filOpen === "filOpen") {
            setFilOpen("filClosed")

        }
        setSearchQuery(initialSearchQuery);
    }, [id])




    const isChecked = (key, value) => {
        // console.log(key+" "+value);
        return query.get(key) === value

    }





    const openSub = () => {
        console.log("called : ", filOpen);
        if (filOpen === "filOpen") {
            setFilOpen("filClosed")

        }
        else {

            setFilOpen("filOpen")

        }
    }



    const radioChecked = async (e) => {
        const defaultValue = { ...searchQuery, q: name };
        if (e.target.checked) {
            defaultValue[e.target.name] = e.target.value;
            setSearchQuery(defaultValue);
        }
        else {
            delete defaultValue[e.target.name];
            setSearchQuery(defaultValue);


            const { person,
                location,
                age,
                orientation } = defaultValue

            if ((person === undefined || person === null || person === 'null' || person === 0 || person === '0') &&
                (location === undefined || location === null || location === 'null' || location === 0 || location === '0') &&
                (age === undefined || age === null || age === 'null' || age === 0 || age === '0') &&
                (orientation === undefined || orientation === null || orientation === 'null' || orientation == 0 || orientation == '0')) {

                setFilOpen("filClosed")


            }


        }

        if (filname === null || filname === 'null' || filname === '0' || filname === 0 || filname === undefined) {
            const search = new URLSearchParams(defaultValue).toString();
            history.push(
                {
                    pathname: `/search`,
                    search

                }
            )
        }
        else {
            const search = `key=${id}&person=${defaultValue.person}&location=${defaultValue.location}&age=${defaultValue.age}&orientation=${defaultValue.orientation}`;
            // console.log(search);
            // console.log(defaultValue);
            history.push(
                {
                    pathname: `/browserSearch/${filname}`,
                    search

                }
            )
        }


        const searchParams = {
            id: name,
            person: defaultValue.person || 0,
            location: defaultValue.location || 0,
            age: defaultValue.age || 0,
            orientation: defaultValue.orientation || 0
        }

        console.log(defaultValue);

        setSearchParams(searchParams);
    }



    let per = " ";

    if (searchQuery.person === null || searchQuery.person === 'null' || searchQuery.person === '0' || searchQuery.person === 0 || searchQuery.person === undefined) {
        per = '';
    }
    else {
        per = searchQuery.person;
    }

    let lo = " ";
    if (searchQuery.location === null || searchQuery.location === 'null' || searchQuery.location === '0' || searchQuery.location === 0 || searchQuery.location === undefined) {
        lo = '';
    }
    else {
        lo = searchQuery.location;
    }

    let ag = " ";
    if (searchQuery.age === null || searchQuery.age === 'null' || searchQuery.age === '0' || searchQuery.age === 0 || searchQuery.age === undefined) {
        ag = '';
    }
    else {
        ag = searchQuery.age;
    }

    let or = " ";
    if (searchQuery.orientation === null || searchQuery.orientation === 'null' || searchQuery.orientation === '0' || searchQuery.orientation === 0 || searchQuery.orientation === undefined) {
        or = '';
    }
    else {
        or = searchQuery.orientation;
    }


    const keepOpen = () => {

        if ((per != undefined && per != null && per != 'null' && per != 0 && per != '0') ||
            (lo != undefined && lo != null && lo != 'null' && lo != 0 && lo != '0') ||
            (ag != undefined && ag != null && ag != 'null' && ag != 0 && ag != '0') ||
            (or != undefined && or != null && or != 'null' && or != 0 && or != '0')) {

            setFilOpen("filOpen")

        }

        else {
            setFilOpen("filClosed")
        }

    }

    let dName = '';
    if (filname === null || filname === 'null' || filname === '0' || filname === 0 || filname === undefined) {
        dName = name;
    }
    else {
        dName = filname;
    }


    var filText = dName + ' ' + per + ' ' + lo + ' ' + ag + ' ' + or;




    return (
        <>
            <section className={styles.filSec} id="features09-52">
                <div className={`${styles.filMainDiv} `}>
                    <div id="faqAccordion">
                        <div className="">
                            <div className={styles.filHead} id="filterOpen" onClick={openSub} >
                                <h4 className="panel-title">
                                    <a className="ing"><i className={`${styles.fillIcon} fa fa-sliders`} aria-hidden="true"></i>FILTERS</a>
                                </h4>
                            </div>
                            <p className={styles.Girl_VertiCal}>
                                <b>
                                    {/* <!-- 4 images for  "family --> */}
                                    {totalLengthAndMsg} "{filText.trim()}"
                                    {/* 1,00,000+ images for "{id.trim()}" */}
                                </b>
                            </p>
                            <div id="question0" className={`${filOpen}`}  >
                                <div className={styles.panel_body}>
                                    <Grid container className="row">

                                        <Grid item xs={3} className="" id="searchPeople"  >
                                            <h5><span className="">People</span></h5>
                                            <div className={styles.checkbox}>
                                                <label>
                                                    <input checked={isChecked("person", "one")} onChange={radioChecked} type="checkbox" className="Person" name="person" value="one" />
                                                    <span className={styles.cr}><i className={` ${styles.cr_icon} fa fa-check`}></i></span>
                                                    1 Person Only
                                                </label>
                                            </div>

                                            <div className={styles.checkbox}>
                                                <label>
                                                    <input checked={isChecked("person", "two")} onChange={radioChecked} type="checkbox" className="Person" name="person" value="two" />
                                                    <span className={styles.cr}><i className={`${styles.cr_icon} fa fa-check`}></i></span>
                                                    2 Person
                                                </label>
                                            </div>
                                            <div className={styles.checkbox}>
                                                <label>
                                                    <input checked={isChecked("person", "3-5")} onChange={radioChecked} type="checkbox" className="Person" name="person" value="3-5" />
                                                    <span className={styles.cr}><i className={` ${styles.cr_icon} fa fa-check`}></i></span>
                                                    3-5 Person
                                                </label>
                                            </div>
                                            <div className={styles.checkbox}>
                                                <label>
                                                    <input checked={isChecked("person", "crowds")} onChange={radioChecked} type="checkbox" className="Person" id="people" name="person" value="crowds" />
                                                    <span className={styles.cr}><i className={` ${styles.cr_icon} fa fa-check`}></i></span>
                                                    Groups / Crowd
                                                </label>
                                            </div>
                                            <div className={styles.checkbox}>
                                                <label>
                                                    <input checked={isChecked("person", "nobody")} onChange={radioChecked} type="checkbox" className="Person" id="people" name="person" value="nobody" />
                                                    <span className={styles.cr}><i className={` ${styles.cr_icon} fa fa-check`}></i></span>
                                                    Without People
                                                </label>
                                            </div>
                                        </Grid>

                                        <Grid item xs={3} className=""  >
                                            <h5><span className="label">Location</span></h5>

                                            <div className={styles.checkbox}>
                                                <label>
                                                    <input checked={isChecked("location", "Indoor")} onChange={radioChecked} type="checkbox" name="location" className="Location" value="Indoor" />
                                                    <span className={styles.cr}><i className={` ${styles.cr_icon} fa fa-check`}></i></span>
                                                    Indoor
                                                </label>
                                            </div>


                                            <div className={styles.checkbox}>
                                                <label>
                                                    <input checked={isChecked("location", "Outdoor")} onChange={radioChecked} type="checkbox" name="location" className="Location" value="Outdoor" />
                                                    <span className={styles.cr}><i className={` ${styles.cr_icon} fa fa-check`}></i></span>
                                                    Outdoor
                                                </label>
                                            </div>
                                            <div className={styles.checkbox}>
                                                <label>
                                                    <input checked={isChecked("location", "Studio Shot")} onChange={radioChecked} type="checkbox" name="location" className="Location" value="Studio Shot" />
                                                    <span className={styles.cr}><i className={` ${styles.cr_icon} fa fa-check`}></i></span>
                                                    Studio Shot
                                                </label>
                                            </div>
                                        </Grid>
                                        <Grid item xs={3} className="" ng-model="ageChange">
                                            <h5><span className="label ">Age</span></h5>

                                            <div className={styles.checkbox}>
                                                <label>
                                                    <input checked={isChecked("age", "babies")} onChange={radioChecked} type="checkbox" className="Age" name="age" value="babies" />
                                                    <span className={styles.cr}><i className={` ${styles.cr_icon} fa fa-check`}></i></span>
                                                    Baby
                                                </label>
                                            </div>


                                            <div className={styles.checkbox}>
                                                <label>
                                                    <input checked={isChecked("age", "kid")} onChange={radioChecked} type="checkbox" className="Age" name="age" value="kid" />
                                                    <span className={styles.cr}><i className={` ${styles.cr_icon} fa fa-check`}></i></span>
                                                    Child
                                                </label>
                                            </div>
                                            <div className={styles.checkbox}>
                                                <label>
                                                    <input checked={isChecked("age", "teenager")} onChange={radioChecked} type="checkbox" className="Age" name="age" value="teenager" />
                                                    <span className={styles.cr}><i className={` ${styles.cr_icon} fa fa-check`}></i></span>
                                                    Teenager
                                                </label>
                                            </div>
                                            <div className={styles.checkbox}>
                                                <label>
                                                    <input checked={isChecked("age", "20-30")} onChange={radioChecked} type="checkbox" className="Age" name="age" value="20-30" />
                                                    <span className={styles.cr}><i className={` ${styles.cr_icon} fa fa-check`}></i></span>
                                                    Young Adult
                                                </label>
                                            </div>
                                            <div className={styles.checkbox}>
                                                <label>
                                                    <input checked={isChecked("age", "40-50")} onChange={radioChecked} type="checkbox" className="Age" name="age" value="40-50" />
                                                    <span className={styles.cr}><i className={` ${styles.cr_icon} fa fa-check`}></i></span>
                                                    Mature Adult
                                                </label>
                                            </div>
                                            <div className={styles.checkbox}>
                                                <label>
                                                    <input checked={isChecked("age", "senior")} onChange={radioChecked} type="checkbox" className="Age" name="age" value="senior" />
                                                    <span className={styles.cr}><i className={` ${styles.cr_icon} fa fa-check`}></i></span>
                                                    Senior Adult
                                                </label>
                                            </div>
                                        </Grid>

                                        <Grid item xs={3}  >
                                            <h5><span className="label ">Orientation</span></h5>

                                            <div className={styles.checkbox}>
                                                <label>
                                                    <input checked={isChecked("orientation", "horizontal")} onChange={radioChecked} type="checkbox" name="orientation" className="Orientation" value="horizontal" />
                                                    <span className={styles.cr}><i className={` ${styles.cr_icon} fa fa-check`}></i></span>
                                                    Horizontal
                                                </label>
                                            </div>


                                            <div className={styles.checkbox}>
                                                <label>
                                                    <input checked={isChecked("orientation", "vertical")} onChange={radioChecked} type="checkbox" name="orientation" className="Orientation" value="vertical" />
                                                    <span className={styles.cr}><i className={` ${styles.cr_icon} fa fa-check`}></i></span>
                                                    Vertical
                                                </label>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Filter
