import React, {useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const NoMatch = () => {
    const history = useHistory()
    useEffect(() => {
        document.body.style.background = "white"
    }, [])

    setTimeout(() => {
        history.push("/")
    }, 3000)

    return (
       <Container>
           <Row>
               <Col className="text-dark d-flex flex-column align-items-center" style={{marginTop: "210px", fontSize: "19px"}}>
                    <img src="/images/IB_logo.svg" style={{ width: "180px", height: "57px" }} alt="logo" />
                    <p><strong>Oops.....Page Not Found!</strong></p>
                    <p>The site is down for maintenance</p>
                    <p>please check back again soon.</p>
               </Col>
           </Row>
       </Container>
    )
}

export default NoMatch 