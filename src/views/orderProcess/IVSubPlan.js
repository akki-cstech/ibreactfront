import React from 'react'
import { Table } from 'react-bootstrap'

const IVSubPlan = ({ iData, amount }) => {
    // console.log('check sub idata', iData)
    const planOrder = { ...iData[0] }
    const imgPath = () => {
        if(planOrder.f_plantypenew.startsWith("Large")){
            return '/Images/SubPlanName/CheckoutLARGE.png'
        }

        return '/Images/SubPlanName/CheckoutSMALL.png'
    }

    return (
        <Table striped bordered responsive>
            <thead>
                <tr>
                    <th className="text-center">#</th>
                    <th className="text-center">Plan Name</th>
                    <th className="text-center">No. of Items</th>
                    <th className="text-center">Validity of Packages</th>
                    <th className="text-center">Amount (Rs.)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="text-center">
                        <img src={imgPath()} alt={planOrder.f_orderid} style={{ width: "100px", height: "70px" }} />
                    </td>
                    <td className="text-center"> {planOrder.f_size} </td>
                    <td className="text-center">{planOrder.f_totimg}</td>
                    <td className="text-center"> {planOrder.f_days} </td>
                    <td className="text-center"> {Number(amount).toFixed(0)} </td>
                </tr>
            </tbody>
        </Table>
    )
}

export default IVSubPlan