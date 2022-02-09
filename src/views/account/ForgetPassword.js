import React, { useState } from 'react'
import { Container, Row, Col, Form, InputGroup, FormControl, Button } from 'react-bootstrap'
import Alert from '@mui/material/Alert';
import { Link } from 'react-router-dom'
import { forgotPwd } from '../../utils/apis/api'
import Footer from '../../components/RegFooter'

const ForgetPassword = () => {
    const [forgotEmail, setForgotEmail] = useState('')
    const [emailErr, setEmailErr] = useState(null)
    const [sentAlert, setSentAlert] = useState(null)
    const [alreadyExist, setAlreadyExist] = useState(null)

    const submitHandler = async event => {
        event.preventDefault();

        if (forgotEmail.length > 0) {
            let lastAtPos = forgotEmail.lastIndexOf("@");
            let lastDotPos = forgotEmail.lastIndexOf(".");

            if (
                !(
                    lastAtPos < lastDotPos &&
                    lastAtPos > 0 &&
                    forgotEmail.indexOf("@@") === -1 &&
                    lastDotPos > 2 &&
                    forgotEmail.length - lastDotPos > 2
                )
            ) {
                setEmailErr("Email must be a valid email address")
                setTimeout(() => setEmailErr(null), 5000)
                return false
            }
            else {
                const data = await forgotPwd({ email: forgotEmail })
                if (!data.error) {
                    setSentAlert(data.message)
                    setForgotEmail('')
                    setTimeout(() => setSentAlert(null), 5000)
                    return true
                }

                setAlreadyExist(data.error)
                setTimeout(() => setAlreadyExist(null), 5000)
                return false

            }
        }
        else {
            setEmailErr("Email address is required..")
            setTimeout(() => setEmailErr(null), 5000)
            return false
        }
    }

    return (
        <Container>
            <Row className='justify-content-center'>
                <Col md={10} xs={12}>
                    <div>
                        <img src="/images/logo svg.svg" style={{ width: '17%' }} className="mx-auto d-block mt-3" />
                    </div>
                </Col>
            </Row>
            <Row className='mx-auto' style={{ marginTop: "17px", maxWidth: "83.333%", background: "#333" }}>
                <Col md={6} sm={12} xs={6} lg={6} >
                    <div>
                        <img className="d-flex" alt="logingirl" style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} src="/images/AuthImages/content-bg1.jpg" />
                    </div>
                </Col>
                <Col md={6} sm={12} xs={12} >
                    <div style={{ padding: "47px 0px 0px 37px" }}>
                        <span className="text-white font-weight-bold" style={{ fontSize: "30px" }} >Forgot Password</span>
                        <p style={{ marginBottom: "16px", marginTop: "16px", fontSize: "16px" }} >Please, enter your email address below and your password will be mailed to you immediately.</p>
                    </div>
                    <div style={{ padding: "15px 55px 15px 37px" }}>
                        <Row>
                            <Col lg={12}>
                                {sentAlert && <Alert className="mb-2" severity="success"> {sentAlert} </Alert>}
                                {alreadyExist && <Alert className="mb-2" severity="info"> {alreadyExist} </Alert>}
                                <Form onSubmit={submitHandler} >
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text style={{ marginRight: "-3px" }}>
                                            <i className="fa fa-envelope"></i>
                                        </InputGroup.Text>
                                        <FormControl
                                            placeholder="Enter Email"
                                            value={forgotEmail}
                                            onChange={({ target }) => setForgotEmail(target.value)}
                                            aria-label="Email"
                                        />
                                    </InputGroup>
                                    {emailErr && <span className="text-danger" > {emailErr} </span>}
                                    <p>Don't remember your email ? <Link to="/contactus" style={{ fontSize: "17px", color: "#00FFFF" }}>Contact Support</Link></p>
                                    <Form.Group>
                                        <Row className="justify-content-center">
                                            <Col sm={{ offset: 1, span: 6 }} >
                                                <Button as="input" type="submit" value="Retrieve Password" style={{ marginTop: "18px", border: "none", padding: "9px 18px", background: "black" }} />
                                            </Col>
                                        </Row>
                                    </Form.Group>
                                    <Form.Group>
                                        <Row className="mt-4">
                                            <Col lg={12}>
                                                <div className="text-center">
                                                    Not Registered Yet ?  <Link to="/register" style={{ fontSize: "17px", color: "#00FFFF" }}>Register Now</Link>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Form.Group>
                                    <Form.Group>
                                        <Row>
                                            <Col lg={12}>
                                                <div className="text-center" style={{ color: "#fff", fontSize: "17px", marginBottom: "20px" }}>
                                                    Alredy Registered ?  <Link to="/ibregistration" style={{ color: "#00FFFF" }}>Sign In</Link>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            <Footer />
        </Container>
    )
}

export default ForgetPassword