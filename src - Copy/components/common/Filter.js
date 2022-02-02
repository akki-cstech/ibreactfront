import React, { useState, useEffect } from 'react'
import styles from '../../CSS/Filter.module.css'
import { Grid } from '@material-ui/core'
import { getSearchRecord } from "../../utils/apis/api"
import { useHistory, useLocation } from "react-router-dom"

function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}


const Filter = ({ totalLengthAndMsg, name }) => {



    const query = useQuery();
    const history = useHistory();

    const [filOpen, setFilOpen] = useState("filClosed");
    const [searchQuery, setSearchQuery] = useState({

        person: query.get('person') || 0,
        location: query.get('location') || 0,
        age: query.get('age') || 0,
        orientation: query.get('orientation') || 0

    });
    const [filName, setFilName] = useState();




    const id = query.get("q");
    // const person = query.get('person')
    // const location = query.get('location')
    // const age = query.get('age')
    // const orientation = query.get('orientation')


    // useEffect(() => {

    //     return () => {
    //         keepOpen();
    //     }
    // })



    // const keepOpen = () => {

    //     if (searchQuery.person != 0 || searchQuery.location != 0 || searchQuery.age != 0 || searchQuery.orientation != 0) {
    //         setFilOpen("filOpen")
    //     }


    // }

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



    const radioChecked = (e) => {

        // console.log("searchQuery : ", searchQuery);
        const defaultValue = { ...searchQuery, q: name };
        if (e.target.checked) {
            defaultValue[e.target.name] = e.target.value;
            setSearchQuery(defaultValue);

        }
        else {
            delete defaultValue[e.target.name];
            setSearchQuery(defaultValue);

            console.log("defaultValue: ", defaultValue);
            console.log("person: ", defaultValue.person);
            console.log("location: ", defaultValue.location);
            console.log("age: ", defaultValue.age);
            console.log("orientation: ", defaultValue.orientation);
            var { person,
                location,
                age,
                orientation } = defaultValue

            if ((person === undefined || person === null || person === 0) &&
                (location === undefined || location === null || location === 0) &&
                (age === undefined || age === null || age === 0) &&
                (orientation === undefined || orientation === null || orientation == 0)) {

                console.log("coming in setFilOpen ");
                openSub();

            }



        }
        const search = new URLSearchParams(defaultValue).toString();
        // console.log("defaultValue :", defaultValue);
        const search1 = `q=${name}&person=${defaultValue.person}&location=${defaultValue.location}&age=${defaultValue.age}&orientation=${defaultValue.orientation}`

        // console.log("search1 : ",search1);
        // console.log("search : ",search);
        // history.push(
        //     {
        //         pathname: `/search?q=${name}&person=${defaultValue.person}&location=${defaultValue.location}&age=${defaultValue.age}&orientation=${defaultValue.orientation}`,

        //     }
        // )
        history.push(
            {
                pathname: `/search`,
                search

            }
        )
        // var element = document.getElementsByTagName('input');
        // for(var i=0;i<element.length;i++){
        //     console.log(element[i]);
        // }
    }

    // console.log(searchQuery);


    let per = "";
    if (searchQuery.person === 0) {
        per = "";
    }
    else {
        per = searchQuery.person;
    }

    let lo = "";
    if (searchQuery.location === 0) {
        lo = "";
    }
    else {
        lo = searchQuery.location;
    }

    let ag = "";
    if (searchQuery.age === 0) {
        ag = "";
    }
    else {
        ag = searchQuery.age;
    }

    let or = "";
    if (searchQuery.orientation === 0) {
        or = "";
    }
    else {
        or = searchQuery.orientation;
    }


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
                                    {totalLengthAndMsg} "{name} {per} {lo} {ag} {or} "
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
