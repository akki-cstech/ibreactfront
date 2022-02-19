import React, { useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Textbox } from "react-inputs-validation";
import { changePassword } from '../../utils/apis/api'
import { useHistory, useLocation, Redirect } from 'react-router-dom';

const ChangePassword = ({ user }) => {
    const [oldPass, setOldPass] = useState({ value: '', hasError: true, errMsg: '' })
    const [newPass, setNewPass] = useState({ value: '', hasError: true, errMsg: '' })
    const [cPass, setCPass] = useState({ value: '', hasError: true, errMsg: '' })
    const [validate, setValidate] = useState(false)
    const [err, setErr] = useState(null)
    const history = useHistory()
    // const { pathname } = useLocation()
    // console.log('user', user)
    const handleOldPassChange = (value, e) => {
        let hasError = true;
        let errMsg = "";
        if (value.replace(/\s/g, "") !== "") {
            hasError = false;
        } else {
            errMsg = "Old Password is required";
        }
        setOldPass({ value, hasError, errMsg });
    }

    const handleNewPassChange = (value, e) => {
        let hasError = true;
        let errMsg = "";
        if (value.replace(/\s/g, "") !== "") {
            hasError = false;
        } else {
            errMsg = "New Password is required";
        }
        setNewPass({ value, hasError, errMsg });
    }

    const handleCPassChange = (value, e) => {
        let hasError = true;
        let errMsg = "";
        if (value.replace(/\s/g, "") !== "") {
            if (value !== newPass.value) {
                errMsg = "Confirm New Password must match";
                hasError = true;
            } else {
                hasError = false;
            }
        } else {
            errMsg = "Confirm New Password is required";
        }
        setCPass({ value, hasError, errMsg });
    }

    const checkHasError = () => {
        if (oldPass.hasError || newPass.hasError || cPass.hasError) {
            return true;
        } else {
            return false;
        }
    }

    const submit = async (e) => {
        e.preventDefault();
        setValidate(true)
        if (checkHasError()) {
            return
        }

        const rtnUser = await changePassword({ email: user.f_email, oldPassword: oldPass.value, newPassword: newPass.value })
        console.log('user return', rtnUser)
        
        if(rtnUser.error){
            setErr(rtnUser.error)
            setTimeout(() => setErr(null), 5000)
            return
        }

        window.location.href = `${window.location.origin}/myaccounts`
    }

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md={6} lg={6} className="border rounded" style={{ boxShadow: "3px 2px 2px grey" }}>
                    <h4 className="text-dark text-center mt-3">Change Password</h4><hr />
                    <Form onSubmit={submit}>
                        <Row>
                            <Col lg={12} md={12} sm={12} xs={12} className="mb-3 mt-4">
                                {err && <h4 className="text-danger" > {err} </h4>}
                                <Form.Group className="mb-3" controlId="formGridOldPass">
                                    <Form.Label className="font-weight-bold text-dark">Old Password</Form.Label>
                                    <Textbox
                                        attributesInput={{
                                            type: "password"
                                        }}
                                        customStyleInput={{
                                            paddingTop: "0",
                                            width: "100%",
                                            paddingBottom: "0",
                                            height: "38px",
                                            borderRadius: "5px",
                                            paddingLeft: "10px",
                                            paddingRight: "0px",
                                            border: "none",
                                            textAlign: "left",
                                            border: '1px solid #eee',
                                        }}
                                        validate={validate}
                                        validationCallback={(res) => {
                                            setOldPass({ ...oldPass, hasError: res })
                                            setValidate(false)
                                        }}
                                        value={oldPass.value}
                                        onChange={handleOldPassChange}
                                        validationOption={{
                                            check: true,
                                            required: true
                                        }}
                                    />
                                    {oldPass.errMsg == "" ? (
                                        ""
                                    ) : (
                                        <div className="errorMsg text-danger ml-2">{oldPass.errMsg}</div>
                                    )}
                                </Form.Group>
                            </Col>
                            <Col lg={12} md={12} sm={12} xs={12} className="mb-3">
                                <Form.Group className="mb-3" controlId="formGridNewPassword">
                                    <Form.Label className="font-weight-bold text-dark">New Password</Form.Label>
                                    <Textbox
                                        attributesInput={{
                                            type: "password"
                                        }}
                                        customStyleInput={{
                                            paddingTop: "0",
                                            paddingBottom: "0",
                                            width: "100%",
                                            height: "38px",
                                            borderRadius: "5px",
                                            paddingLeft: "10px",
                                            paddingRight: "0px",
                                            border: "none",
                                            textAlign: "left",
                                            border: '1px solid #eee',
                                        }}
                                        validate={validate}
                                        validationCallback={(res) => {
                                            setNewPass({ ...newPass, hasError: res })
                                            setValidate(false)
                                        }}
                                        value={newPass.value}
                                        onChange={handleNewPassChange}
                                        validationOption={{
                                            check: true,
                                            required: true
                                        }}
                                    />
                                    {newPass.errMsg == "" ? (
                                        ""
                                    ) : (
                                        <div className="errorMsg text-danger ml-2">{newPass.errMsg}</div>
                                    )}
                                </Form.Group>
                            </Col>
                            <Col lg={12} md={12} sm={12} xs={12} className="mb-3">
                                <Form.Group className="mb-3" controlId="formGridCPassword">
                                    <Form.Label className="font-weight-bold text-dark">Confirm New Password</Form.Label>
                                    <Textbox
                                        attributesInput={{
                                            type: "password"
                                        }}
                                        customStyleInput={{
                                            paddingTop: "0",
                                            paddingBottom: "0",
                                            width: "100%",
                                            height: "38px",
                                            borderRadius: "5px",
                                            paddingLeft: "10px",
                                            paddingRight: "0px",
                                            border: "none",
                                            textAlign: "left",
                                            border: '1px solid #eee',
                                        }}
                                        validate={validate}
                                        validationCallback={(res) => {
                                            setCPass({ ...cPass, hasError: res })
                                            setValidate(false)
                                        }}
                                        value={cPass.value}
                                        onChange={handleCPassChange}
                                        validationOption={{
                                            check: true,
                                            required: true
                                        }}
                                    />
                                    {cPass.errMsg == "" ? (
                                        ""
                                    ) : (
                                        <div className="errorMsg text-danger ml-2">{cPass.errMsg}</div>
                                    )}
                                </Form.Group>
                            </Col>
                        </Row>

                        <Button variant="dark" type="submit" className="mx-auto d-block" style={{ padding: "12px 45px", marginBottom: "45px" }}>
                            CHANGE PASSWORD
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default ChangePassword