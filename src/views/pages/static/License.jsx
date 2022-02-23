import React from 'react'
import { Container, Row, Col  } from 'react-bootstrap'
import Help from '../../../components/common/Help'
import { Link } from 'react-router-dom'

const License = () => {
    return (
        <Container className="mt-4">
            <Row>
                <Col sm={3}>
                    <Help />
                </Col>
                <Col xs={12} sm={9}>
                    <Row>
                        <Col xs={12} className="mt-4 mb-4 ml-1 d-flex">
                        <i className="fa fa-certificate" style={{fontSize: "22px", position:"relative", top: "5px"}}></i> <h3 style={{marginLeft: "14px"}}>Licensing </h3> 
                        </Col>

                        <Col xs={12} className="mb-3">
                            <p className='text-justify'>
                                In this section you will find information on the types of Licence rights available for all of ImagesBazaar products and each of the Licence agreements pertaining to those products and rights.
                            </p>
                        </Col>
                        <Col xs={12} className="mb-3">
                            <h4 style={{borderBottom: "3px solid", display: "inline", padding: "5px"}}>Mash Non-Exclusive Right Licence Agreement</h4>
                            <p className="mt-3 text-justify"><Link className='text-info'>Click here</Link> for details</p>
                        </Col>
                        <Col xs={12} className="mb-3">
                            <h4 style={{borderBottom: "3px solid", display: "inline", padding: "5px"}}>Mash Editorial Agreement</h4>
                            <p className="mt-3 text-justify"><Link className='text-info'>Click here</Link> for details</p>
                        </Col>
                        <Col xs={12}>
                            <h4 style={{borderBottom: "3px solid", display: "inline", padding: "5px"}}>Mash Comp Usage Agreement</h4>
                            <p className="mt-3 text-justify"><Link className='text-info'>Click here</Link> for details</p>
                        </Col>
                    </Row>
                </Col>

            </Row>
        </Container>
    )
}

export default License