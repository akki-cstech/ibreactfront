import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import styles from '../CSS/SearchPage.module.css';
import { Tooltip, Grid } from '@material-ui/core'
import { getSearchRecord, getSearchRecordByPageNumber } from "../utils/apis/api";
import LoadingBar from 'react-top-loading-bar'
// import Card from '../components/common/Card'
// import "../stylesheet/bootstrap.min.css";
// import '../stylesheet/result_page.css'
// import '../stylesheet/home.css'
// import '../stylesheet/main.css'
import '../stylesheet/Searchimage.css';
import '../stylesheet/home.css';
import '../stylesheet/main.css';
import '../stylesheet/result_page.css';
import Header from '../components/navs/Header';
import Footer from '../components/navs/Footer';
import Filter from '../components/common/Filter';
import SearchTips from '../components/common/SearchTips';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';

function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}
// const SearchImage = (onLoader) => {
const SearchImage = ({ onLoader, progress, setProgress }) => {
    // setProgress(100)
    const query = useQuery();
    const [visible, setVisible] = useState(false);
    const [Name, setName] = useState()

    const id = query.get("q") || query.get("key");
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


    const [searchParams, setSearchParams] = useState(initialSearch)

    const [SearchRecord, setSearchRecord] = useState([]);
    const [isActive, setIsActive] = useState(true);
    const [IsPreviourEnvent, setIsPreviourEnvent] = useState(true);
    const [totalLength, setTotalLength] = useState();
    const [totalLengthAndMsg, setTotalLengthAndMsg] = useState();
    const [pageNumber, setpageNumber] = useState(2);
    const [LoderRun, setLoderRun] = useState(false);
    // const [progress, setProgress] = useState(0)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        console.log("scrolled", scrolled)
        if (scrolled > 200) {
            setVisible(true);
        }
        else if (scrolled <= 200) {
            setVisible(false);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    window.addEventListener('scroll', toggleVisible);


    const fetchSearchOnLoad = async () => {
        ////
        setLoderRun(true)
        // setProgress(0)

        var inputValue = {};
        if (searchParams.id === id) {
            inputValue = searchParams;
        }
        else {
            inputValue = initialSearch;
            setSearchParams(initialSearch);
        }

        setpageNumber(1)
        const res = await getSearchRecord(inputValue);

        // console.log(inputValue);
        console.log(res.res.data.data);
        setSearchRecord(res.res)
        setTotalLength(res.res.data.Recordlength)
        setTotalLengthAndMsg(res.res.data.NewRecordlength)
        setIsActive(false)

        if (res.res.data.data) {

            setProgress(90)
            console.log(LoderRun);
            setLoderRun(false);

        }
        // onLoader();
        //

    }
    // window.onscroll = async (e) => {
    //     if (window.scrollY > 20) {
    //         document.getElementById("topheader").className = "searchGrid sticky";
    //         } else {
    //              document.getElementById("topheader").className = "searchGrid";
    //         }
    //     }
    window.onscroll = async (e) => {
        var offsetHeight = window.document.body.offsetHeight;
        var pageYOffset = window.pageYOffset;
        if (window.scrollY > 20) {
            document.getElementById("topheader").className = "searchGrid sticky";
        } else {
            document.getElementById("topheader").className = "searchGrid sticky1";
        }
        //  console.log(offsetHeight - 1136 + '------' + (pageYOffset + pageYOffset));
        if (offsetHeight - 1500 <= (pageYOffset + pageYOffset)) {
            // console.log(IsPreviourEnvent);
            if (IsPreviourEnvent === true) {
                setIsPreviourEnvent(false);
                setpageNumber(pageNumber + 1)
                console.log(pageNumber);
                //   console.log('coming inside div');

                const resUpdated = await getSearchRecordByPageNumber(id, pageNumber);
                // const form = <h1>it is working</h1>
                var updatedArr = resUpdated.res.data.data
                let shaloArray = [...SearchRecord]
                //     shaloArray.concat(updatedArr)
                updatedArr.forEach(element => {
                    // console.log(element);
                    shaloArray.push(element)
                });
                console.log("initialdata", shaloArray)
                setSearchRecord([...shaloArray])
                setIsPreviourEnvent(true);
            }

        }
    }

    useEffect(() => {
        const apiCall = async () => {
            // console.log("calling from useEffect",id, person, location, age, orientation);

            setName(query.get("q"))
            fetchSearchOnLoad();
        };
        apiCall();
    }, [id, person, location, age, orientation]);


    // console.log("visible",visible)
    return (
        <>


            {LoderRun === true ?
                <LoadingBar
                    color='#f11946'
                    progress={progress}
                    onLoaderFinished={() => setProgress(0)}
                /> : ''}
            <Header />

            <div className={styles.filterDiv}>
                {/* <div className={styles.iconDiv}>
                    <i className={`${styles.filIcon} fas fa-sliders-h`} ></i>
                    FILTERS
                </div>
                <p>
                    <b>
                        {totalLengthAndMsg} "{Name}"
                    </b>
                </p> */}

                <div className="filter_div">

                    <Filter totalLengthAndMsg={totalLengthAndMsg} name={Name} setSearchParams={setSearchParams} />

                </div>

            </div>
            {totalLength > 0 ?
                <section className="Autofit_Start">
                    <div className="searchcontainer">
                        <div className="card-columns gallery grid" id="searchRecordBind">
                            {SearchRecord.map((item, index) => (
                                <div className={`card productItem ${item.f_Orientation}`} key={"image" + index}>
                                    <span className="zoom">
                                        <p className="card-img-top galleryItem action-tooltip"
                                            id=" "  >
                                            <i className="fa fa-search-plus" id=" " aria-hidden="true"></i>
                                            <div className="action-tooltip__container8"><span>Preview</span></div>
                                        </p></span>
                                    <i className={`${item.f_Orientation}`}></i>
                                    <img className="card-img-top" id={`img${index}`}
                                        alt={`imgalt${index}`}
                                        src={`https://d3nn873nee648n.cloudfront.net/900x600/${item.F_group}/${item.F_rank}-${item.F_imgid}.jpg`} />

                                    <div className="productMinDetails" >
                                        <div className="rightEntry">
                                            <a className="action-tooltip" tooltip='Add to Cart'
                                            ><i
                                                className="fa fa-shopping-cart" data-toggle="modal"  ></i>
                                            </a>
                                            <span className="action-tooltip" >
                                                <a>
                                                    <a tooltip='Add to Wishlist'>
                                                        <i className="fa fa-heart"></i>
                                                    </a>
                                                </a>
                                            </span>



                                            <a className="card-img-top  action-tooltip" tooltip='More Info'>
                                                <i className="fa fa-info" id="img{index}" aria-hidden="true"></i>
                                            </a>

                                            <a id="modl_lightbx" tooltip='More Info'></a>
                                        </div>
                                        <div className="lastEntry">
                                            <a className="action-tooltip" tooltip='Entire Shoot'>
                                                <i className="fa fa-camera"></i>
                                            </a>

                                            <a className="action-tooltip" tooltip='Similar Images'>
                                                <i className="fa fa-th-large"></i>
                                            </a>


                                            <a className="action-tooltip downloadcls" id="hg-pichref{index}" tooltip='Download'>
                                                <i className="fa fa-download" aria-hidden="true"> </i>
                                            </a>
                                        </div>
                                        <div className="Middle_Entry">
                                            <a className="view">{item.F_imgid}</a>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>

                    </div>
                </section>
                // <div className="SearchPage_imgDiv__1vhMv " id="">
                //     {SearchRecord.map((item, index) => (
                //         //   <Card image='/Images/img1.jpg' />
                //         <div className={item.f_Orientation} key={"image" + index}>
                //             <span className="zoom">
                //                 <a className="card-img-top galleryItem action-tooltip" id="zimg0">
                //                     <i className="fa fa-search-plus" id="zimg0" aria-hidden="true"></i>
                //                     <div className="action-tooltip__container"><span>Preview</span></div>
                //                 </a>
                //             </span>
                //             <img className="card-img-top" id={`img${index}`}
                //                 alt={`imgalt${index}`} src={`https://d3nn873nee648n.cloudfront.net/900x600/${item.F_group}/${item.F_rank}-${item.F_imgid}.jpg`} />
                //             <div className="productMinDetails">
                //                 <div className="rightEntry">
                //                     <a className="action-tooltip">
                //                         <i className="fa fa-shopping-cart"></i>
                //                     </a>
                //                     <a className="action-tooltip">
                //                         <i className="fa fa-heart" data-toggle="modal" data-target="#myModalAddtoCart"></i>
                //                     </a>
                //                     <a className="card-img-top  action-tooltip">
                //                         <i className="fa fa-info" aria-hidden="true"></i>
                //                     </a>
                //                 </div>
                //                 <div className="lastEntry">
                //                     <a className="action-tooltip" href="#0">
                //                         <i className="fa fa-camera"></i>
                //                     </a>
                //                     <a className="action-tooltip" href="#0">
                //                         <i className="fa fa-th-large"></i>
                //                     </a>
                //                     <a className="action-tooltip downloadcls">
                //                         <Tooltip title="Download">
                //                             <i className="fa fa-download" aria-hidden="true"> </i>
                //                         </Tooltip>
                //                     </a>
                //                 </div>
                //                 <div className="Middle_Entry">
                //                     <a className="view">{item.F_imgid}</a>

                //                 </div>
                //             </div>
                //         </div>
                //     ))}
                //     {parseInt(totalLength) <= SearchRecord.length ? ""
                //         :
                //         // <img style={{ margin: "0px auto", width: "255px", height: "30px", }} alt="loader_img"
                //         //     id="imgloader_dwld" src="/images/loader2.gif" />
                //         <div class="css-1igcf9y"><div class="chakra-spinner css-4o917u"><span class="css-f8n5zr">Loading...</span></div></div>
                //     }
                // </div>
                :    ""}

            {SearchRecord.length === 0 && isActive === false ?

                <SearchTips />


                : ""}

            {SearchRecord.length >= parseInt(totalLength) ?
                <Footer />
                : <div class="css-1igcf9y"><div class="chakra-spinner css-4o917u"><span class="css-f8n5zr">Loading...</span></div></div>
            }

            <button className="scroll-to-top" onClick={scrollToTop} style={{ display: visible ? 'inline' : 'none' }}>
                <span></span>
            </button>

            {/* {parseInt(totalLength) <= sSearchRecord.length ? ""
                :
                <img style={{ marginLeft: " ", marginTop: "0px", width: "255px", height: "30px", }} alt="loader_img"
                    id="imgloader_dwld" src="/images/loader2.gif" />
            } */}
            {/* <section className="Autofit_Start">
                <div className="container-fluid">
                    <div className="card-columns gallery grid" id="searchRecordBind">
                        {SearchRecord.map((item, index) => (
                            <div className={`card productItemLarge280 ${item.f_Orientation}`} key={"image" + index}>
                                <span className="zoom"><p className="card-img-top galleryItem action-tooltip"
                                    id=" "  >
                                    <i className="fa fa-search-plus" id=" " aria-hidden="true"></i>
                                    <div className="action-tooltip__container8"><span>Preview</span></div>
                                </p></span>
                                <i className={`${item.f_Orientation}`}></i>
                                <img className="card-img-top" id={`img${index}`}
                                    ng-click={`onNavigate('{item.f_imgid}','{index}','{item.f_group}','{item.f_rank}','{item.f_Orientation}','{item.f_imgtype}','{item.f_sno}')`} alt={`imgalt${index}`}
                                    src={`https://d3nn873nee648n.cloudfront.net/900x600/${item.f_group}/${item.f_rank}-${item.f_imgid}.jpg`} />
                                <div className="productMinDetails" >
                                    <div className="rightEntry">
                                        <p className="action-tooltip" tooltip='Add to Cart'
                                        ><i
                                            className="fa fa-shopping-cart" data-toggle="modal"  ></i>
                                        </p>
                                        <span className="action-tooltip" >
                                            <p>
                                                <p ng-click="Get_imglisgtUser('{index}',0)" style={inlinecs}
                                                    tooltip='Add to Wishlist'><i className="fa fa-heart" data-toggle="modal"
                                                        data-target="#myModallightbox_other"></i>
                                                </p>
                                            </p>
                                        </span>



                                        <p className="card-img-top  action-tooltip" tooltip='More Info'
                                            ng-click="onNavigate('{item.f_imgid}','{index}','{item.f_group}','{item.f_rank}','{item.f_Orientation}','{item.f_imgtype}','{item.f_sno}')"
                                            id="img{index}" style={inlinecs}>
                                            <i className="fa fa-info" id="img{index}" aria-hidden="true"></i>

                                        </p>

                                        <p id="modl_lightbx" data-toggle="modal" tooltip='More Info'
                                            data-target="#myModallightbox"></p>
                                    </div>
                                    <div className="lastEntry">
                                        <p className="action-tooltip" style={inlinecs} tooltip='Entire Shoot'
                                            href="/advanceresultsearch1/24/{item.f_group}/0/0/0"><i className="fa fa-camera"></i>

                                        </p>

                                        <p className="action-tooltip" style={inlinecs} tooltip='Similar Images'
                                            href="/advancesearchresultViewsimilar/{item.f_imgid}/{item.f_imgid}/0/0/0/0/0/0/0/0/0">
                                            <i className="fa fa-th-large"></i> </p>


                                        <p className="action-tooltip downloadcls" id="hg-pichref{index}" style={inlinecs}
                                            tooltip='Download'>
                                            <i className="fa fa-download" aria-hidden="true"> </i>

                                        </p>

                                        <p id="modl_lightbx" data-toggle="modal" data-target="#myModallightbox"></p>
                                    </div>
                                    <div className="Middle_Entry">
                                        <p className="view">{item.f_imgid}</p>
                                    </div>
                                </div>



                            </div>
                        ))}

                    </div>
                    {parseInt(totalLength) <= SearchRecord.length ? ""

                        :
                        <img style={{ marginLeft: "134px", marginTop: "0px", width: "255px", height: "30px", }} alt="loader_img"
                            id="imgloader_dwld" src="/images/loader2.gif" />
                    }
                </div>
            </section> */}
        </>
    )
}

export default SearchImage
