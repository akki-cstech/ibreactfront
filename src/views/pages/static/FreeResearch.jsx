import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Help from '../../../components/common/Help'
import 'bootstrap/dist/css/bootstrap.min.css';
import { getUser } from '../../../utils/apis/api';
import '../../../stylesheet/FreeResearch.css'
import Alert from '@mui/material/Alert'
import { ReqForSearch } from '../../../utils/apis/api';

const FreeResearch = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [company, setCompany] = useState('')
    const [pTitle, setPTitle] = useState('')
    const [imgDes, setImgDes] = useState('')
    const [myCaptcha, setMyCaptcha] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [errMsg, setErrMsg] = useState(null)
    const [alertMsg, setAlertMsg] = useState(null)
    const [typeCatcha, setTypeCaptcha] = useState('')

    const callApi = async (user) => {
        const me = await getUser({ email: user.f_email })
        setName(me.myDetails[0].f_fullname || '')
        setEmail(me.myDetails[0].f_email || '')
        setPhone(me.myDetails[0].f_mobileno || '')
        setCompany(me.myDetails[0].f_companyname || '')
    }

    useEffect(() => {
        const user = JSON.parse(window.localStorage.getItem('loggedUser'))

        if (myCaptcha === '') {
            captchaGenerator()
        }

        if (name === '' && email === '' && phone === '' && company === '' && user) {
            callApi(user)
        }

        if (isSubmitted) {
            afterSubmit()
        }

    }, [isSubmitted, name, email, phone, company, pTitle, imgDes, typeCatcha])

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

        if (company === '') {
            err.company = 'Company is required'
            submitMe = false
        }

        if (pTitle === '') {
            err.pTitle = 'Project Title is required'
            submitMe = false
        }

        if (imgDes === '') {
            err.imgDes = 'Description is required'
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

        const res = await ReqForSearch({ name, email, phone, company, pTitle, imgDes })
        if (res) {
            setIsSubmitted(false)
            setAlertMsg(res.message)
            setTimeout(() => setAlertMsg(null), 5000)
            setName('')
            setPTitle('')
            setImgDes('')
            setPhone('')
            setEmail('')
            setCompany('')
            setTypeCaptcha('')
            captchaGenerator()
        }
    }

    const captchaGenerator = () => {
        const captchaChar = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let captcha = '';

        for (let x = 0; x < 4; x++) {
            const i = Math.floor(Math.random() * 62)
            captcha += captchaChar.split('')[i]
        }

        setMyCaptcha(captcha)
    }

    return (
        <Container className="mt-4 pb-4">
            <Row>
                <Col sm={3} className="hidden-xs">
                    <Help />
                </Col>
                <Col xs={12} sm={9}>
                    <Row className="justify-content-xs-center">
                        <Col xs={12} className="bg-light mb-4" style={{ fontSize: "28px", position: "relative", top: "8px" }}>
                            <i className="fa fa-lock"></i> Privacy Policy
                        </Col>
                        <Col xs={12} className="mb-2 mt-2 text-justify">
                            <p>Let us help you find the perfect image!</p>
                            <p>Now, you can save time and effort by using our image research assistance to pick requisite images. So, if you think searching for an image online is tiresome just call or email your request for a free image search. Our skilled researchers will do the search for you and give you the results before you know it.</p>
                            <p>Please fill out the Image Research form below and our team will get in touch with you :</p>
                        </Col>
                        <Col xs={12} className="mb-2 text-justify">
                        {alertMsg && <Alert className="font-weight-bolder" severity="success"> {alertMsg} </Alert>}
                            <Form className="w-75 p-4" onSubmit={submit}>
                                <Row>
                                    <Col md={6} xs={12}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="label">Name: *</Form.Label>
                                            <Form.Control type="text" value={name} onChange={({ target }) => setName(target.value)} />
                                            {errMsg && <Form.Text className="text-danger">
                                                {errMsg.name}
                                            </Form.Text>}
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="label">Company: *</Form.Label>
                                            <Form.Control type="text" value={company} onChange={({ target }) => setCompany(target.value)} />
                                            {errMsg && <Form.Text className="text-danger">
                                                {errMsg.company}
                                            </Form.Text>}
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6} xs={12}>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="label">Phone: *</Form.Label>
                                            <Form.Control type="text" maxLength="12" value={phone} onChange={({ target }) => !isNaN(Number(target.value)) && setPhone(target.value)} />
                                            {errMsg && <Form.Text className="text-danger">
                                                {errMsg.phone}
                                            </Form.Text>}
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3">
                                            <Form.Label className="label">Email: *</Form.Label>
                                            <Form.Control type="text" value={email} onChange={({ target }) => setEmail(target.value)} />
                                            {errMsg && <Form.Text className="text-danger">
                                                {errMsg.email}
                                            </Form.Text>}
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group className="mb-3">
                                    <Form.Label className="label">Your Project Title: (Needed for reference to your selection): *</Form.Label>
                                    <Form.Control type="text" value={pTitle} onChange={({ target }) => setPTitle(target.value)} />
                                    {errMsg && <Form.Text className="text-danger">
                                        {errMsg.pTitle}
                                    </Form.Text>}
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label className="label">Description of Needed Images: *</Form.Label>
                                    <Form.Control type="text" as="textarea" rows={3} value={imgDes} onChange={({ target }) => setImgDes(target.value)} />
                                    {errMsg && <Form.Text className="text-danger">
                                        {errMsg.imgDes}
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
                                <Button type="submit" className='float-right mt-3' id="btnsendmail">
                                    Send Mail
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default FreeResearch