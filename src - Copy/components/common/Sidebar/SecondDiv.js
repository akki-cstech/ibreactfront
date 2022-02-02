import React, { useState } from 'react'
import * as data from '../../../utils/helpers/Data'
import { Link } from 'react-router-dom'


const SecondDiv = ({ e, openFun, overflowFun }) => {

    const [subOpen, setSubOpen] = useState("");

    const openSub = () => {
        overflowFun();
        if (subOpen === "opened") {
            setSubOpen("")

        }
        else {
            setSubOpen("opened")

        }
    }

    const subOnClick = () => {
        openFun();
        openSub();
    }

    return (
        <>

            <li id="hasSubMenu" className="has-submenu"  >

                <Link data-submenu="stores" onClick={openSub}>{e.category}</Link>

                <div id="stores" className={` submenu ${subOpen} `}>
                    <div className="submenu-header" data-submenu-close="stores">
                        <Link  onClick={openSub}><i className="fas fa-angle-left"></i> MAIN MENU</Link>
                    </div>
                    <label className="ng-binding">{e.category}</label>

                    <ul >
                        {data["j" + e.sno] && data["j" + e.sno].NewDataSet.Table.map((ep) => (

                            <li>
                                <Link onClick={subOnClick} to={`/search?q=${ep.searchid}`} >{ep.catname}</Link>
                            </li>

                        ))}


                    </ul>
                </div>

            </li>

        </>
    )
}

export default SecondDiv
