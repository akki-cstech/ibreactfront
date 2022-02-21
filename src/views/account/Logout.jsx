import React, {useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ImExit } from 'react-icons/im'
import { Redirect, useHistory, Link } from 'react-router-dom'

const LogOut = () => {
    const history = useHistory()
    useEffect(() => {
        document.body.style.background = "white"
    }, [])
    setTimeout(() => history.push('/'), 3000)

    return (
        <Container>
            <Row>
                <Col md={12} sm={12} xs={12}>
                    <div className="d-flex flex-column align-items-center" style={{marginTop: "160px", color: "black"}}>
                        <ImExit style={{width: "120px", height: "110px"}} />
                        <h4>You're now signed out</h4>
                        <p>You can return to <Link to="/">homepage</Link> or <Link to="/ibregistration">sign in</Link> again.</p>
                    </div>
                </Col>
            </Row>
        </Container>

    )
}

export default LogOut