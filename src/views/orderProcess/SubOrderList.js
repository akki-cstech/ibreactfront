import React from 'react'
import { Table } from 'react-bootstrap'

const SubPlan = ({ iData, amount }) => {
    console.log('check sub idata', iData)
    const planOrder = { ...iData[0] }
    return (
        <Table striped bordered hover responsive>
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
                        <img src={`/Images/SubPlanName/${planOrder.f_Plantype}.png`} alt={planOrder.f_orderid} style={{ width: "80px", height: "50px" }} />
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

export default SubPlan