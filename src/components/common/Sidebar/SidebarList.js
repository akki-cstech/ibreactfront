import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Category from '../../../utils/helpers/JSON/Category.json'
import * as data from '../../../utils/helpers/Data'
import SecondDiv from './SecondDiv'

const SideBarList = () => {




    return (
        <>

            <ul>


                {Category.NewDataSet.Table.map((e) => (
   
                    <SecondDiv e={e} />

                ))
                }

            </ul>

        </>
    )
}

export default SideBarList
