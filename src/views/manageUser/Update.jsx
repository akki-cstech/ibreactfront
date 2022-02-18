import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { COUNTRY_OPTIONS_LIST, JOB_OPTIONS_LIST, STATE_OPTIONS_LIST } from "./consts.js";
import { editUserForm, loginUser } from '../../utils/apis/api'
import { useHistory } from 'react-router-dom'
import './styles.css'

const Update = ({ myDtl, setUser }) => {
    // console.log('check info', myDtl)
    const history = useHistory()
    const [GSTIN, setGSTIN] = useState(myDtl.f_GSTIN)
    const [regEmail, setRegEmail] = useState(myDtl.f_email)
    const [fName, setFName] = useState(myDtl.fName)
    const [lName, setLName] = useState(myDtl.lName)
    const [cName, setCName] = useState(myDtl.f_companyname)
    const [jobDes, setJobDes] = useState(myDtl.f_Identify_User)
    const [cityOrState, setCityOrState] = useState(myDtl.f_state)
    const [bType, setBType] = useState(myDtl.f_businessType)
    const [zip, setZip] = useState(myDtl.CS_pin)
    const [pNo, setPNo] = useState(myDtl.CS_phone)
    const [mob, setMob] = useState(myDtl.f_mobileno)
    const [address, setAddress] = useState(myDtl.f_address)
    const [country, setCountry] = useState(myDtl.f_country)
    const [errMsg, setErrMsg] = useState(null)
    const [submited, setSubmited] = useState(false)

    const afterSubmit = () => {
        let submitMe = true
        const iChars = "!@#$%^&*()+=-[]\\';,./{}|\":<>?1234567890";
        let err = {};

        if (fName !== '') {
            setErrMsg({ ...errMsg, fName: "" })
            for (var i = 0; i < fName.split("").length; i++) {
                if (iChars.indexOf(fName.charAt(i)) !== -1) {
                    err.fName = "Your firstName has special characters or numbers. \nThese are not allowed.\n Please remove them and try again.";
                    submitMe = false
                }
            }
        } else {
            submitMe = false
            err.fName = "First Name is required"
        }

        if (lName !== '') {
            setErrMsg({ ...errMsg, lName: "" })
            for (var i = 0; i < lName.split("").length; i++) {
                if (iChars.indexOf(lName.charAt(i)) !== -1) {
                    submitMe = false
                    err.lName = "Your Last Name has special characters or numbers. \nThese are not allowed.\n Please remove them and try again."
                }
            }
        } else {
            submitMe = false
            err.lName = "Last Name is required!"
        }

        if (zip && zip.length === 0) {
            err.zip = "Pin Code is required!"
            submitMe = false
        }
        else if (zip.length < 4 || zip.length > 8) {
            err.zip = "Pin Code should be 4 to 8 character!"
            submitMe = false
        }

        if (cName === '') {
            err.cName = "Company Name is required!"
            submitMe = false
        }

        if (jobDes === '') {
            err.jobDes = "Job Description must be Selected!"
            submitMe = false
        }

        if (bType === '') {
            err.bType = "Business Type is required!"
            submitMe = false
        }

        if (mob.length === 0) {
            err.mob = "Mobile Number is required!"
            submitMe = false
        }

        if (pNo.length === 0) {
            err.pNo = "Phone Number is required!"
            submitMe = false
        }

        if (country.length === 0) {
            submitMe = false
            err.country = "Country must be Selected!"
        }

        if (address.length === 0) {
            submitMe = false
            err.address = "Address is required!"
        }

        if (cityOrState.length === 0) {
            submitMe = false
            err.cityOrState = "City/State is required!"
        }
       
        if (GSTIN.length === 0) {
            submitMe = false
            err.GSTIN = "GSTIN is required!"
        }

        setErrMsg(err)
        return submitMe

    }

    useEffect(() => {
        if (submited) {
            afterSubmit()
        }
    }, [submited, fName, country, address, mob, pNo, cityOrState, jobDes, zip, bType, cName, lName, GSTIN])

    const submit = async (e) => {
        e.preventDefault();
        setSubmited(true)
        if (!afterSubmit()) {
            return
        }

        const update = await editUserForm({
            email: regEmail,
            firstName: fName,
            lastName: lName,
            companyName: cName,
            jobDescription: jobDes,
            businessType: bType,
            country,
            state: cityOrState,
            pinCode: zip,
            phone: pNo,
            mobile: mob,
            add: address,
            gstid: GSTIN
        })

        if (update && update.message === 'Congratulations! Your Profile has been Updated successfully.') {
            window.localStorage.setItem(
                'updatedUser', JSON.stringify(update)
            )
            const modifiedUser = await loginUser({ email: myDtl.f_email, password: myDtl.f_password })
            // console.log('ar4e updated', modifiedUser)
            if (!modifiedUser.error) {
                window.localStorage.setItem(
                    'loggedUser', JSON.stringify(modifiedUser)
                )
                setUser(modifiedUser)
            }
            history.push('/myaccounts')
        }
    }

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md={6} lg={6} className="border rounded" style={{ boxShadow: "3px 2px 2px grey" }}>
                    <Form onSubmit={submit}>
                        <Row className="mb-3 mt-4">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label className="font-weight-bold text-dark">Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" value={regEmail} disabled />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridGSTIN">
                                <Form.Label className="font-weight-bold text-dark">GSTIN No.</Form.Label>
                                {myDtl.f_GSTIN && myDtl.f_GSTIN.length === 0 && <Form.Control className="form-control"
                                    type="text"
                                    placeholder="Enter the GSTIN"
                                    name="GSTIN"
                                    value={GSTIN}
                                    onChange={({ target }) => setGSTIN(target.value)}
                                />}
                                {myDtl.f_GSTIN && myDtl.f_GSTIN.length > 0 && <Form.Control value={GSTIN} disabled />}
                                {errMsg && <span className="text-danger"> {errMsg.GSTIN} </span>}
                            </Form.Group>
                        </Row>

                        <Row>
                            <Form.Group className="mb-3" as={Col} controlId="formGridFirstName">
                                <Form.Label className="font-weight-bold text-dark">First Name</Form.Label> {' '} <span className="text-danger font-weight-bold">*</span>
                                <Form.Control className="form-control"
                                    type="text"
                                    placeholder="Enter the First Name"
                                    value={fName}
                                    name="fName"
                                    onChange={({ target }) => setFName(target.value)}
                                />
                                {
                                    errMsg && <span className="text-danger"> {errMsg.fName} </span>
                                }
                            </Form.Group>

                            <Form.Group className="mb-3" as={Col} controlId="formGridLastName">
                                <Form.Label className="font-weight-bold text-dark">Last Name</Form.Label> {' '} <span className="text-danger font-weight-bold">*</span>
                                <Form.Control className="form-control"
                                    type="text"
                                    placeholder="Enter the Last Name"
                                    value={lName}
                                    name="lName"
                                    onChange={({ target }) => setLName(target.value)}
                                />
                                {
                                    errMsg && <span className="text-danger"> {errMsg.lName} </span>
                                }
                            </Form.Group>
                        </Row>

                        <Row>
                            <Form.Group className="mb-3" as={Col} controlId="formGridCompanyName">
                                <Form.Label className="font-weight-bold text-dark">Company Name</Form.Label> {' '} <span className="text-danger font-weight-bold">*</span>
                                <Form.Control className="form-control"
                                    type="text"
                                    placeholder="Enter the Company Name"
                                    value={cName}
                                    name="cName"
                                    onChange={({ target }) => setCName(target.value)}
                                />
                                {
                                    errMsg && <span className="text-danger"> {errMsg.cName} </span>
                                }
                            </Form.Group>

                            <Form.Group className="mb-3" as={Col} controlId="formGridJobDes">
                                <Form.Label className="font-weight-bold text-dark">Job Description</Form.Label> {' '} <span className="text-danger font-weight-bold">*</span>
                                <select name="jobDes" className="form-control" value={jobDes} defaultValue="" value={jobDes} onChange={({ target }) => setJobDes(target.value)}>
                                    {JOB_OPTIONS_LIST.map(job => <option value={job.id}> {job.name} </option>)}
                                </select>
                                {
                                    errMsg && <span className="text-danger"> {errMsg.jobDes} </span>
                                }
                            </Form.Group>
                        </Row>

                        <Row>
                            <Form.Group className="mb-3" as={Col} controlId="formGridBusinessType ">
                                <Form.Label className="font-weight-bold text-dark">Business Type</Form.Label> {' '} <span className="text-danger font-weight-bold">*</span>
                                <Form.Control className="form-control"
                                    type="text"
                                    placeholder="Enter the Business type"
                                    name="bType"
                                    value={bType}
                                    onChange={({ target }) => setBType(target.value)}
                                />
                                {
                                    errMsg && <span className="text-danger"> {errMsg.bType} </span>
                                }
                            </Form.Group>

                            <Form.Group className="mb-3" as={Col} controlId="formGridCountry">
                                <Form.Label className="font-weight-bold text-dark">Country</Form.Label> {' '} <span className="text-danger font-weight-bold">*</span>
                                <select name="country" className="form-control" value={country} defaultValue="" value={country} onChange={({ target }) => setCountry(target.value)}>
                                    {COUNTRY_OPTIONS_LIST.map(country => <option value={country.id}> {country.name} </option>)}

                                </select>
                                {
                                    errMsg && <span className="text-danger"> {errMsg.country} </span>
                                }
                            </Form.Group>
                        </Row>

                        <Row>
                            <Form.Group className="mb-3" as={Col} controlId="formGridState">
                                <Form.Label className="font-weight-bold text-dark">State</Form.Label> {' '} <span className="text-danger font-weight-bold">*</span>
                                {country !== 'India' && <Form.Control className="form-control"
                                    type="text"
                                    placeholder="Enter the State Or Region"
                                    value={cityOrState}
                                    name="cityOrState"
                                    onChange={({ target }) => setCityOrState(target.value)}
                                />}
                                {country === 'India' && 
                                <select name="cityOrState" className="form-control" value={cityOrState} defaultValue="" value={cityOrState} onChange={({ target }) => setCityOrState(target.value)}>
                                {STATE_OPTIONS_LIST.map(state => <option value={state.id} > {state.name} </option>)}
                                </select>}
                                {
                                    errMsg && <span className="text-danger"> {errMsg.cityOrState} </span>
                                }
                            </Form.Group>

                            <Form.Group className="mb-3" as={Col} controlId="formGridZipCode">
                                <Form.Label className="font-weight-bold text-dark">Zip Code</Form.Label> {' '} <span className="text-danger font-weight-bold">*</span>
                                <Form.Control className="form-control"
                                    type="number"
                                    placeholder="Enter the Pin Code"
                                    value={zip}
                                    name="zip"
                                    onChange={({ target }) => setZip(target.value)}
                                />
                                {
                                    errMsg && <span className="text-danger"> {errMsg.zip} </span>

                                }
                            </Form.Group>
                        </Row>

                        <Row>
                            <Form.Group className="mb-3" as={Col} controlId="formGridPH">
                                <Form.Label className="font-weight-bold text-dark">Phone Number</Form.Label> {' '} <span className="text-danger font-weight-bold">*</span>
                                <Form.Control className="form-control"
                                    type="number"
                                    placeholder="Enter the Phone Number"
                                    value={pNo}
                                    name="pNo"
                                    onChange={({ target }) => setPNo(target.value)}
                                    style={{ appearance: "none", margin: 0 }}
                                />
                                {
                                    errMsg && <span className="text-danger"> {errMsg.pNo} </span>
                                }
                            </Form.Group>

                            <Form.Group className="mb-3" as={Col} controlId="formGridMob">
                                <Form.Label className="font-weight-bold text-dark">Mobile Number</Form.Label> {' '} <span className="text-danger font-weight-bold">*</span>
                                <Form.Control className="form-control"
                                    type="number"
                                    placeholder="Enter the Mobile Number"
                                    name="mob"
                                    value={mob}
                                    onChange={({ target }) => setMob(target.value)}
                                    style={{ appearance: "none", margin: 0 }}
                                />
                                {
                                    errMsg && <span className="text-danger"> {errMsg.mob} </span>
                                }
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress">
                            <Form.Label className="font-weight-bold text-dark">Address</Form.Label> {' '} <span className="text-danger font-weight-bold">*</span>
                            <Form.Control className="form-control"
                                as="textarea"
                                style={{ height: '100px' }}
                                placeholder="Enter the Address"
                                value={address}
                                name="address"
                                onChange={({ target }) => setAddress(target.value)}
                            />
                            {
                                errMsg && <span className="text-danger"> {errMsg.address} </span>
                            }
                        </Form.Group>

                        <Button variant="dark" type="submit" className="mx-auto d-block" style={{ padding: "12px 45px", marginBottom: "45px" }}>
                            UPDATE PROFILE
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Update;