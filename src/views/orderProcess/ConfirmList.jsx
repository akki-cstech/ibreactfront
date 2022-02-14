import React from 'react'
import { Table } from 'react-bootstrap'

const Confirm = ({ iData }) => {
    return (
        <Table striped bordered hover responsive>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Item ID</th>
                    <th>Image Type</th>
                    <th>Rights</th>
                    <th>Dimensions (Pixels)</th>
                    <th>Amount (Rs.)</th>
                </tr>
            </thead>
            <tbody>
                {
                    iData.map((image) => <tr>
                        <td className="text-center"> <img src={`https://ibcdn.imagesbazaar.com/img280/${image.f_groupid}/${image.f_rank}-${image.t_imageid}.jpg`} alt={image.t_imageid} style={{ width: "120px", height: "80px" }} /> </td>
                        <td> {image.t_imageid} </td>
                        <td>{image.t_quality}</td>
                        <td>Non-Exclusive</td>
                        <td> {image.f_mydimension} </td>
                        <td> {image.t_price} </td>
                    </tr>
                    )}
            </tbody>
        </Table>
    )
}

export default Confirm