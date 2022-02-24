import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Alert from '@mui/material/Alert'
import { Link } from 'react-router-dom'
import Help from '../../../components/common/Help'
import { type } from 'jquery'
import { sendMail, getUser } from '../../../utils/apis/api'
import '../../../stylesheet/contact.css'

const Contact = ({ user, setUser }) => {
    const [myCaptcha, setMyCaptcha] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [comment, setComment] = useState('')
    const [typeCatcha, setTypeCaptcha] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [errMsg, setErrMsg] = useState(null)
    const [alertMsg, setAlertMsg] = useState(null)

    const callApi = async (user) => {
        const me = await getUser({ email: user.f_email })
        setName(me.myDetails[0].f_fullname)
        setEmail(me.myDetails[0].f_email)
        setPhone(me.myDetails[0].f_mobileno)
    }

    useEffect(() => {
        const user = JSON.parse(window.localStorage.getItem('loggedUser'))

        if (myCaptcha === '') {
            captchaGenerator()
        }
        if (name === '' && email === '' && phone === '' && user) {
            callApi(user)
        }
        if (isSubmitted) {
            afterSubmit()
        }
    }, [isSubmitted, name, email, phone, comment, typeCatcha])

    const captchaGenerator = () => {
        const captchaChar = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()+=-[]\\';,./{}|\":<>?";
        let captcha = '';

        for (let x = 0; x < 4; x++) {
            const i = Math.floor(Math.random() * 90)
            captcha += captchaChar.split('')[i]
        }

        setMyCaptcha(captcha)
    }

    const afterSubmit = () => {
        let submitMe = true
        const iChars = "!@#$%^&*()+=-[]\\';,./{}|\":<>?1234567890";
        let err = {};

        if (name !== '') {
            for (var i = 0; i < name.split("").length; i++) {
                if (iChars.indexOf(name.charAt(i)) !== -1) {
                    err.name = "Your Name has special characters or numbers. \nThese are not allowed.\n Please remove them and try again.";
                    submitMe = false
                }
            }
        } else {
            submitMe = false
            err.name = "Name is required"
        }

        if (email === '') {
            err.email = 'Email address is required';
            submitMe = false
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            err.email = 'Email address is invalid';
            submitMe = false
        }

        if (phone === '') {
            err.phone = 'Phone/Mobile Number is required'
            submitMe = false
        }

        if (comment === '') {
            err.comment = 'Comments/Question is required'
            submitMe = false
        }

        if (typeCatcha === '') {
            err.captcha = 'Captcha is required'
            submitMe = false
        } else if (typeCatcha !== myCaptcha) {
            err.captcha = 'Captcha code should be correct'
            submitMe = false
        }

        setErrMsg(err)
        return submitMe
    }

    const submit = async e => {
        e.preventDefault()
        setIsSubmitted(true)
        if (!afterSubmit()) {
            return
        }

        const res = await sendMail({ name, email, phone, comment })
        if (res) {
            setIsSubmitted(false)
            setAlertMsg(res.message)
            setTimeout(() => setAlertMsg(null), 5000)
            setName('')
            setComment('')
            setPhone('')
            setEmail('')
            setTypeCaptcha('')
            captchaGenerator()
        }
    }

    return (
        <Container className="section mt-4 pb-4">
            <Row className="justify-content-xs-center">
                <Col md={3} sm={3} className="hidden-xs">
                    <Help />
                </Col>
                <Col md={9} sm={9} xs={12}>
                    <Row>
                        <Col md={12} sm={12} xs={12} className="mb-4">
                            <h4 className="page_title mt-3"><span><i className="fa fa-headphones"></i>  Contact Us </span></h4>
                        </Col>
                        <Col md={6} className="pr-4">
                            <h4 className="text-justify text-dark">
                                Please fill out this form and submit with your queries or suggestions.
                                Our representatives will answer to your queries, at the earliest.
                            </h4>
                            {alertMsg && <Alert className="font-weight-bold" severity="success"> {alertMsg} </Alert>}
                            <Form onSubmit={submit}>
                                <Form.Group className="mb-3">
                                    <Form.Label className="label">Name</Form.Label>
                                    <Form.Control type="text" value={name} onChange={({ target }) => setName(target.value)} placeholder="Enter Name" />
                                    {errMsg && <Form.Text className="text-danger">
                                        {errMsg.name}
                                    </Form.Text>}
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label className="label">Email Address</Form.Label>
                                    <Form.Control type="email" value={email} onChange={({ target }) => setEmail(target.value)} placeholder="Enter Email" />
                                    {errMsg && <Form.Text className="text-danger">
                                        {errMsg.email}
                                    </Form.Text>}
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label className="label">Phone/Mobile</Form.Label>
                                    <Form.Control value={phone} maxLength="12" onChange={({ target }) => !isNaN(Number(target.value)) && setPhone(target.value)} placeholder="Enter Phone/Mobile" />
                                    {errMsg && <Form.Text className="text-danger">
                                        {errMsg.phone}
                                    </Form.Text>}
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label className="label">Comments/Question</Form.Label>
                                    <Form.Control as="textarea" rows={3} value={comment} onChange={({ target }) => setComment(target.value)} />
                                    {errMsg && <Form.Text className="text-danger">
                                        {errMsg.comment}
                                    </Form.Text>}
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label className="label">
                                        Please Enter the Code Shown
                                    </Form.Label>
                                    <div className="captcha1">
                                        <span> {myCaptcha} </span>
                                        <i style={{ cursor: "pointer" }} onClick={() => captchaGenerator()} className="fa fa-refresh"></i>
                                    </div>
                                    <Form.Control style={{ height: "55px", marginTop: "-5px", borderRadius: "0 0 5px 5px" }} value={typeCatcha} onChange={({ target }) => setTypeCaptcha(target.value)} placeholder="Please enter the above code" />
                                    {errMsg && <Form.Text className="text-danger">
                                        {errMsg.captcha}
                                    </Form.Text>}
                                </Form.Group>

                                <Button type="submit" id="btnsendmail">
                                    Send Mail
                                </Button>
                            </Form>
                            <div className="contact_details">
                                <p>For sales &amp; orders related queries:<br />
                                    <a href="mailto:orders@imagesbazaar.com">orders@imagesbazaar.com</a> </p>
                                <p>For general information &amp; other queries:<br />
                                    <a href="mailto:info@imagesbazaar.com">info@imagesbazaar.com</a> </p>
                                <p>For strategic tie-up &amp; marketing proposals:<br />
                                    <a href="mailto:deepak@imagesbazaar.com">deepak@imagesbazaar.com</a> </p>
                                <p>For giving us your feedback &amp; suggestions:<br />
                                    <a href="mailto:bindu@imagesbazaar.com">bindu@imagesbazaar.com</a> </p>
                                <p>For doing photo shoots with us as a model, email your pictures at:<br />
                                    <a target="_blank" href="mailto:models@imagesbazaar.com">models@imagesbazaar.com</a>
                                </p>
                                <p>For working with us, email your details at:<br />
                                    <a href="mailto:careers@imagesbazaar.com">careers@imagesbazaar.com</a> </p>
                                <p >For contributing your images, kindly email your portfolio at
                                    <a href="mailto:creative@imagesbazaar.com"> creative@imagesbazaar.com </a>
                                    or call us in 011-66545450. <Link to="/contributor" target="_blank">Know more</Link>
                                </p>
                            </div>
                        </Col>
                        <Col md={6} className="topright">
                            <h4><b>Customer Support Team</b></h4>
                            <p><abbr>Monday to Friday</abbr>: 10:00 AM to 8:30 PM</p>
                            <p><abbr>Saturday</abbr>: 10:00 AM to 6:00 PM</p>
                            <p>(Closed on Sundays and National Holidays of India)</p>
                            <div>
                                <h5 className="text-dark mb-2 mt-3">All India Toll Free: 1800-11-6869</h5>
                            </div>

                            <h4>Head Office:</h4>
                            <p><strong>Mash Audio Visuals Pvt. Ltd.</strong><br />
                                505, Aggarwal Prestige Mall, <br />
                                Plot No.2, Road No.44,<br />
                                Pitam Pura, New Delhi-110034<br />
                                Phone : (+91) 11 66545466 <br />
                                Fax : (+91) 11 66545465
                            </p>

                            <Row>
                                <Col className="font-weight-bold text-dark mt-4">
                                    <Row className='mb-1 d-flex align-items-center'>
                                        <Col>Mumbai</Col>
                                        <Col md={{ offset: 2, span: 4 }} >93202-66666<br />93202-66566</Col>
                                    </Row><hr style={{ width: "92%", margin: "-2px 0 3px 0" }} />
                                    <Row className='mb-1 d-flex align-items-center'>
                                        <Col>Delhi</Col>
                                        <Col md={{ offset: 2, span: 4 }} >93202-66666<br />93202-66566</Col>
                                    </Row><hr style={{ width: "92%", margin: "-2px 0 3px 0" }} />
                                    <Row className='mb-1'>
                                        <Col>Bangalore</Col>
                                        <Col md={{ offset: 2, span: 4 }} > 93420-66666 </Col>
                                    </Row><hr style={{ width: "92%", margin: "-2px 0 3px 0" }} />
                                    <Row className='mb-1'>
                                        <Col>Chennai</Col>
                                        <Col md={{ offset: 2, span: 4 }} >93810-69988 </Col>
                                    </Row><hr style={{ width: "92%", margin: "-2px 0 3px 0" }} />
                                    <Row className='mb-1'>
                                        <Col>Pune</Col>
                                        <Col md={{ offset: 2, span: 4 }} >93252-65666 </Col>
                                    </Row><hr style={{ width: "92%", margin: "-2px 0 3px 0" }} />
                                    <Row className='mb-1'>
                                        <Col>Cochin</Col>
                                        <Col md={{ offset: 2, span: 4 }} > 93885-66666 </Col>
                                    </Row><hr style={{ width: "92%", margin: "-2px 0 3px 0" }} />
                                    <Row className='mb-1'>
                                        <Col>Kolkata</Col>
                                        <Col md={{ offset: 2, span: 4 }} >93399-66666 </Col>
                                    </Row><hr style={{ width: "92%", margin: "-2px 0 3px 0" }} />
                                    <Row className='mb-1'>
                                        <Col>Indore</Col>
                                        <Col md={{ offset: 2, span: 4 }} >93292-65666</Col>
                                    </Row><hr style={{ width: "92%", margin: "-2px 0 3px 0" }} />
                                    <Row className='mb-1'>
                                        <Col>Lucknow</Col>
                                        <Col md={{ offset: 2, span: 4 }} >93078-65666 </Col>
                                    </Row><hr style={{ width: "92%", margin: "-2px 0 3px 0" }} />
                                    <Row className='mb-1'>
                                        <Col>Chandigarh</Col>
                                        <Col md={{ offset: 2, span: 4 }} >93564-65666  </Col>
                                    </Row><hr style={{ width: "92%", margin: "-2px 0 3px 0" }} />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact