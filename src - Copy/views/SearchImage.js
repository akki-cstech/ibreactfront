import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from "react-router-dom";
import styles from '../CSS/SearchPage.module.css'
import { getSearchRecord, getSearchRecordByPageNumber } from "../utils/apis/api";
import LoadingBar from 'react-top-loading-bar'
import Card from '../components/common/Card'
// import "../stylesheet/bootstrap.min.css";
// import '../stylesheet/result_page.css'
// import '../stylesheet/home.css'
// import '../stylesheet/main.css'
import '../stylesheet/Searchimage.css'
function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}


// const SearchImage = (onLoader) => {
const SearchImage = ({ onLoader }) => {
    const ref = useRef(null)
    const query = useQuery();
    const [Name, setName] = useState()
    var id = query.get("q")
    // console.log(id)
    const inlinecs = {
        cursor: 'pointer'
    }

    const [progress, setProgress] = useState(0)




    const [SearchRecord, setSearchRecord] = useState([]);
    const [isActive, setIsActive] = useState(true);
    const [IsPreviourEnvent, setIsPreviourEnvent] = useState(true);
    const [totalLength, setTotalLength] = useState();
    const [totalLengthAndMsg, setTotalLengthAndMsg] = useState();
    const [pageNumber, setpageNumber] = useState(2);
    const fetchSearchOnLoad = async () => {
        setpageNumber(2)
        const res = await getSearchRecord(id);
        console.log(res.res);
        setSearchRecord(res.res.data.data)
        setTotalLength(res.res.data.Recordlength)
        setTotalLengthAndMsg(res.res.data.NewRecordlength)
        setIsActive(false)
        // onLoader();

    }

    window.onscroll = async (e) => {
        var offsetHeight = window.document.body.offsetHeight;
        var pageYOffset = window.pageYOffset;
        //  console.log(offsetHeight - 1136 + '------' + (pageYOffset + pageYOffset));
        if (offsetHeight - 1136 <= (pageYOffset + pageYOffset)) {
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
            setName(query.get("q"))
            fetchSearchOnLoad();


        };
        apiCall();

    }, [id]);


    // useEffect(() => {
    //     setName(query.get("q"))
    // }, [query]);

    return (
        <>

            <div className={styles.filterDiv}>
                <div className={styles.iconDiv}>
                    <i className={`${styles.filIcon} fas fa-sliders-h`} ></i>
                    Filters
                </div>
                <p>
                    <b>
                        {totalLengthAndMsg} "{Name}"
                    </b>
                </p>
                <br />
            </div>
            {totalLength > 0 ?
                <div className="SearchPage_imgDiv__1vhMv " id="">
                    {SearchRecord.map((item, index) => (
                        //   <Card image='/Images/img1.jpg' />
                        <div className={item.f_Orientation}>
                            <img className="card-img-top" id={`img${index}`}
                                alt={`imgalt${index}`} src={`https://d3nn873nee648n.cloudfront.net/900x600/${item.f_group}/${item.f_rank}-${item.f_imgid}.jpg`} />
                        </div>
                    ))}

                </div>
                : <div style={{ backgroundColor: "white", textAlign: "center" }}> <h1>No Record Found</h1></div>}
            {parseInt(totalLength) <= SearchRecord.length ? ""
                :
                <img style={{ marginLeft: "550px", marginTop: "0px", width: "255px", height: "30px", }} alt="loader_img"
                    id="imgloader_dwld" src="/images/loader2.gif" />
            }

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
