import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { Textbox, Select, Textarea } from "react-inputs-validation";
import "react-inputs-validation/lib/react-inputs-validation.min.css";
import "./styles.css";
import { COUNTRY_OPTIONS_LIST, JOB_OPTIONS_LIST, STATE_OPTIONS_LIST } from "./consts.js";

const Update = () => {
    const [GSTIN, setGSTIN] = useState({ value: '', hasError: true, errMsg: '' })
    const [fName, setFName] = useState({ value: '', hasError: true, errMsg: '' })
    const [lName, setLName] = useState({ value: '', hasError: true, errMsg: '' })
    const [cName, setCName] = useState({ value: '', hasError: true, errMsg: '' })
    const [jobDes, setJobDes] = useState({ value: '', hasError: true, errMsg: '' })
    const [bType, setBType] = useState({ value: '', hasError: true, errMsg: '' })
    const [country, setCountry] = useState({ value: '', hasError: true, errMsg: '' })
    const [cityOrState, setCityOrState] = useState({ value: '', hasError: true, errMsg: '' })
    const [zip, setZip] = useState({ value: '', hasError: true, errMsg: '' })
    const [pNo, setPNo] = useState({ value: '', hasError: true, errMsg: '' })
    const [mob, setMob] = useState({ value: '', hasError: true, errMsg: '' })
    const [address, setAddress] = useState({ value: '', hasError: true, errMsg: '' })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [hasMovieError, setHasMovieError] = useState(true)
    const [validate, setValidate] = useState(false)

    const checkHasError = () => {
        if (isSubmitting || GSTIN.hasError || setHasMovieError
            // || fName.hasError || lName.hasError || cName.hasError || jobDes.hasError || bType.hasError || country.hasError || state.hasError || pNo.hasError || mob.hasError || address.hasError
        ) {
            return true;
        } else {
            return false;
        }
    }

    const handleGSTINChange = (value, e) => {
        let hasError = true;
        let errMsg = "";
        if (value.replace(/\s/g, "") !== "") {
            hasError = false;
        } else {
            errMsg = "GSTIN is required";
        }
        setGSTIN({ value, hasError, errMsg });
    }

    const handleFNameChange = (value, e) => {
        let hasError = true;
        let errMsg = "";
        if (value.replace(/\s/g, "") !== "") {
            hasError = false;
        } else {
            errMsg = "First Name is required";
        }
        setFName({ value, hasError, errMsg });
    }

    const handleLNameChange = (value, e) => {
        let hasError = true;
        let errMsg = "";
        if (value.replace(/\s/g, "") !== "") {
            hasError = false;
        } else {
            errMsg = "Last Name is required";
        }
        setLName({ value, hasError, errMsg });
    }

    const handleCNameChange = (value, e) => {
        let hasError = true;
        let errMsg = "";
        if (value.replace(/\s/g, "") !== "") {
            hasError = false;
        } else {
            errMsg = "Company Name is required";
        }
        setCName({ value, hasError, errMsg });
    }

    const handleBTypeChange = (value, e) => {
        let hasError = true;
        let errMsg = "";
        if (value.replace(/\s/g, "") !== "") {
            hasError = false;
        } else {
            errMsg = "Business Type is required";
        }
        setBType({ value, hasError, errMsg });
    }

    const handleStateChange = (value, e) => {
        let hasError = true;
        let errMsg = "";
        if (value.replace(/\s/g, "") !== "") {
            hasError = false;
        } else {
            errMsg = "State is required";
        }
        setCityOrState({ value, hasError, errMsg });
    }

    function htmlEscape(str) {
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    const handleZipChange = (value, e) => {
        e.preventDefault();
        let hasError = true;
        let errMsg = "";
        if (value.replace(/\s/g, "") !== "") {
            var zip = value;
            let hasError = true;
            let errMsg = "";

            if (!!zip) {
                zip = zip.match(/[^\s\-]+?/g).join("");
                var c = (zip.length > 4 && zip.length < 8) ? zip.length : 8;
                let re = new RegExp("^\\d{" + c + "}$");
                errMsg = (!!zip.match(re)) ? "Yay, \"" + htmlEscape(value) + "\" is a zip code!" : "Hey, \"" + htmlEscape(value) + "\" is not a zip code!";
                hasError = errMsg.indexOf("is a zip code") !== -1 ? false : true
            }

        } else {
            errMsg = "Zip is required";
        }
        setZip({ value, hasError, errMsg });
    }

    const handlePhoneChange = (value, e) => {
        let hasError = true;
        let errMsg = "";
        if (value.replace(/\s/g, "") !== "") {
            hasError = false;
        } else {
            errMsg = "Phone is required";
        }
        setPNo({ value, hasError, errMsg });
    }

    const handleMobChange = (value, e) => {
        let hasError = true;
        let errMsg = "";
        if (value.replace(/\s/g, "") !== "") {
            hasError = false;
        } else {
            errMsg = "Mobile Number is required";
        }
        setMob({ value, hasError, errMsg });
    }

    const handleAddressChange = (value, e) => {
        let hasError = true;
        let errMsg = "";
        if (value.replace(/\s/g, "") !== "") {
            hasError = false;
        } else {
            errMsg = "Address is required";
        }
        setAddress({ value, hasError, errMsg });
    }

    const submit = (e) => {
        if (checkHasError()) {
            return;
        }
        alert("submitted!");
    }

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md={10} lg={10} className="border rounded" style={{ boxShadow: "3px 2px 2px grey" }}>
                    <Form onSubmit={
                        checkHasError()
                            ? e => {
                                e.preventDefault();
                                return;
                            }
                            : submit
                    }>
                        <Row className="mb-3 mt-4">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label className="font-weight-bold text-dark">Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" disabled />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridGSTIN">
                                <Form.Label className="font-weight-bold text-dark">GSTIN No.</Form.Label>
                                <Textbox
                                    attributesInput={{
                                        placeholder: "Enter the GSTIN No.",
                                        type: "text"
                                    }}
                                    style={{ border: '1px solid #ced4da', }}
                                    customStyleInput={{
                                        paddingTop: "0",
                                        paddingBottom: "0",
                                        height: "38px",
                                        borderRadius: "5px",
                                        paddingLeft: "10px",
                                        paddingRight: "0px",
                                        border: "none",
                                        textAlign: "left"
                                    }}
                                    value={GSTIN.value}
                                    onChange={handleGSTINChange}
                                    onBlur={() => { }}
                                    validationOption={{
                                        check: false
                                    }}
                                />
                                {GSTIN.errMsg == "" ? (
                                    ""
                                ) : (
                                    <div className="errorMsg text-danger ml-2">{GSTIN.errMsg}</div>
                                )}
                            </Form.Group>
                        </Row>

                        <Row>
                            <Form.Group className="mb-3" as={Col} controlId="formGridFirstName">
                                <Form.Label className="font-weight-bold text-dark">First Name</Form.Label> {' '} <span className="text-danger font-weight-bold">*</span>
                                <Textbox
                                    attributesInput={{
                                        placeholder: "Enter the First Name",
                                        type: "text"
                                    }}
                                    style={{ border: '1px solid #ced4da', }}
                                    customStyleInput={{
                                        paddingTop: "0",
                                        paddingBottom: "0",
                                        height: "38px",
                                        borderRadius: "5px",
                                        paddingLeft: "10px",
                                        paddingRight: "0px",
                                        border: "none",
                                        textAlign: "left"
                                    }}
                                    value={fName.value}
                                    onChange={handleFNameChange}
                                    onBlur={() => { }}
                                    validationOption={{
                                        check: false
                                    }}
                                />
                                {fName.errMsg == "" ? (
                                    ""
                                ) : (
                                    <div className="errorMsg text-danger ml-2">{fName.errMsg}</div>
                                )}
                            </Form.Group>

                            <Form.Group className="mb-3" as={Col} controlId="formGridLastName">
                                <Form.Label className="font-weight-bold text-dark">Last Name</Form.Label> {' '} <span className="text-danger font-weight-bold">*</span>
                                <Textbox
                                    attributesInput={{
                                        placeholder: "Enter the Last Name",
                                        type: "text"
                                    }}
                                    style={{ border: '1px solid #ced4da', }}
                                    customStyleInput={{
                                        paddingTop: "0",
                                        paddingBottom: "0",
                                        height: "38px",
                                        borderRadius: "5px",
                                        paddingLeft: "10px",
                                        paddingRight: "0px",
                                        border: "none",
                                        textAlign: "left"
                                    }}
                                    value={lName.value}
                                    onChange={handleLNameChange}
                                    onBlur={() => { }}
                                    validationOption={{
                                        check: false
                                    }}
                                />
                                {lName.errMsg == "" ? (
                                    ""
                                ) : (
                                    <div className="errorMsg text-danger ml-2">{lName.errMsg}</div>
                                )}
                            </Form.Group>
                        </Row>

                        <Row>
                            <Form.Group className="mb-3" as={Col} controlId="formGridCompanyName">
                                <Form.Label className="font-weight-bold text-dark">Company Name</Form.Label> {' '} <span className="text-danger font-weight-bold">*</span>
                                <Textbox
                                    attributesInput={{
                                        placeholder: "Enter the Company Name",
                                        type: "text"
                                    }}
                                    style={{ border: '1px solid #ced4da', }}
                                    customStyleInput={{
                                        paddingTop: "0",
                                        paddingBottom: "0",
                                        height: "38px",
                                        borderRadius: "5px",
                                        paddingLeft: "10px",
                                        paddingRight: "0px",
                                        border: "none",
                                        textAlign: "left"
                                    }}
                                    value={cName.value}
                                    onChange={handleCNameChange}
                                    onBlur={() => { }}
                                    validationOption={{
                                        check: false
                                    }}
                                />
                                {cName.errMsg == "" ? (
                                    ""
                                ) : (
                                    <div className="errorMsg text-danger ml-2">{cName.errMsg}</div>
                                )}
                            </Form.Group>

                            <Form.Group className="mb-3" as={Col} controlId="formGridJobDes">
                                <Form.Label className="font-weight-bold text-dark">Job Description</Form.Label> {' '} <span className="text-danger font-weight-bold">*</span>
                                <Select
                                    attributesWrapper={{}}
                                    attributesInput={{
                                        id: "JobDes",
                                        name: "JobDes"
                                    }}
                                    value={jobDes.value} // Optional.[String].Default: "".
                                    disabled={false} // Optional.[Bool].Default: false.
                                    showSearch={true}
                                    validate={validate} // Optional.[Bool].Default: false. If you have a submit button and trying to validate all the inputs of your form at onece, toggle it to true, then it will validate the field and pass the result via the "validationCallback" you provide.
                                    validationCallback={res => {
                                        setHasMovieError(res)
                                        setValidate(false)
                                    }
                                    } // Optional.[Func].Default: none. Return the validation result.
                                    optionList={JOB_OPTIONS_LIST} // Required.[Array of Object(s)].Default: [].
                                    classNameSelect="" // Optional.[String].Default: "".
                                    classNameWrapper="" // Optional.[String].Default: "".
                                    classNameContainer="" // Optional.[String].Default: "".
                                    classNameOptionListContainer="" // Optional.[String].Default: "".
                                    classNameOptionListItem="" // Optional.[String].Default: "".
                                    customStyleSelect={{
                                        height: "26px",

                                    }} // Optional.[Object].Default: {}.
                                    customStyleWrapper={{}} // Optional.[Object].Default: {}.
                                    customStyleContainer={{ borderRadius: "5px", background: "white" }} // Optional.[Object].Default: {}.
                                    customStyleOptionListContainer={{
                                        maxHeight: "200px",
                                        overflow: "auto",
                                        fontSize: "14px",
                                    }} // Optional.[Object].Default: {}.
                                    customStyleOptionListItem={{}} // Optional.[Object].Default: {}.
                                    onChange={(res, e) => {
                                        setJobDes({ value: res.id });
                                        console.log(e);
                                    }} // Optional.[Func].Default: () => {}. Will return the value.
                                    onBlur={() => { }} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                                    validationOption={{
                                        name: "Job Description", // Optional.[String].Default: "". To display in the Error message. i.e Please select a ${name}.
                                        check: true, // Optional.[Bool].Default: true. To determin if you need to validate.
                                        required: true // Optional.[Bool].Default: true. To determin if it is a required field.
                                    }}
                                />
                            </Form.Group>
                        </Row>

                        <Row>
                            <Form.Group className="mb-3" as={Col} controlId="formGridBusinessType ">
                                <Form.Label className="font-weight-bold text-dark">Business Type</Form.Label> {' '} <span className="text-danger font-weight-bold">*</span>
                                <Textbox
                                    attributesInput={{
                                        placeholder: "Enter the Business Type",
                                        type: "text"
                                    }}
                                    customStyleInput={{
                                        paddingTop: "0",
                                        paddingBottom: "0",
                                        height: "38px",
                                        borderRadius: "5px",
                                        paddingLeft: "10px",
                                        paddingRight: "0px",
                                        border: "none",
                                        textAlign: "left"
                                    }}
                                    value={bType.value}
                                    onChange={handleBTypeChange}
                                    onBlur={() => { }}
                                    validationOption={{
                                        check: false
                                    }}
                                />
                                {bType.errMsg == "" ? (
                                    ""
                                ) : (
                                    <div className="errorMsg text-danger ml-2">{bType.errMsg}</div>
                                )}
                            </Form.Group>

                            <Form.Group className="mb-3" as={Col} controlId="formGridCountry">
                                <Form.Label className="font-weight-bold text-dark">Country</Form.Label> {' '} <span className="text-danger font-weight-bold">*</span>
                                <Select
                                    attributesWrapper={{}}
                                    attributesInput={{
                                        id: "country",
                                        name: "country"
                                    }}
                                    value={country.value} // Optional.[String].Default: "".
                                    disabled={false} // Optional.[Bool].Default: false.
                                    showSearch={true}
                                    validate={validate} // Optional.[Bool].Default: false. If you have a submit button and trying to validate all the inputs of your form at onece, toggle it to true, then it will validate the field and pass the result via the "validationCallback" you provide.
                                    validationCallback={res => {
                                        setHasMovieError(res)
                                        setValidate(false)
                                    }
                                    } // Optional.[Func].Default: none. Return the validation result.
                                    optionList={COUNTRY_OPTIONS_LIST} // Required.[Array of Object(s)].Default: [].
                                    classNameSelect="" // Optional.[String].Default: "".
                                    classNameWrapper="" // Optional.[String].Default: "".
                                    classNameContainer="" // Optional.[String].Default: "".
                                    classNameOptionListContainer="" // Optional.[String].Default: "".
                                    classNameOptionListItem="" // Optional.[String].Default: "".
                                    customStyleSelect={{ height: "26px" }} // Optional.[Object].Default: {}.
                                    customStyleWrapper={{}} // Optional.[Object].Default: {}.
                                    customStyleContainer={{ borderRadius: "5px", background: "white" }} // Optional.[Object].Default: {}.
                                    customStyleOptionListContainer={{
                                        maxHeight: "200px",
                                        overflow: "auto",
                                        fontSize: "14px"
                                    }} // Optional.[Object].Default: {}.
                                    customStyleOptionListItem={{}} // Optional.[Object].Default: {}.
                                    onChange={(res, e) => {
                                        setCountry({ value: res.id })
                                        console.log(e);
                                    }} // Optional.[Func].Default: () => {}. Will return the value.
                                    onBlur={() => { }} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                                    validationOption={{
                                        name: "Country or Region", // Optional.[String].Default: "". To display in the Error message. i.e Please select a ${name}.
                                        check: true, // Optional.[Bool].Default: true. To determin if you need to validate.
                                        required: true // Optional.[Bool].Default: true. To determin if it is a required field.
                                    }}
                                />
                            </Form.Group>
                        </Row>

                        <Row>
                            <Form.Group className="mb-3" as={Col} controlId="formGridState">
                                <Form.Label className="font-weight-bold text-dark">State</Form.Label> {' '} <span className="text-danger font-weight-bold">*</span>
                                {country.value !== "IN" && <Textbox
                                    attributesInput={{
                                        placeholder: "Enter the State",
                                        type: "text"
                                    }}
                                    customStyleInput={{
                                        paddingTop: "0",
                                        paddingBottom: "0",
                                        height: "38px",
                                        borderRadius: "5px",
                                        paddingLeft: "10px",
                                        paddingRight: "0px",
                                        border: "none",
                                        textAlign: "left"
                                    }}
                                    value={cityOrState.value}
                                    onChange={handleStateChange}
                                    onBlur={() => { }}
                                    validationOption={{
                                        check: false
                                    }}
                                />}
                                {country.value === "IN" && <Select
                                    attributesWrapper={{}}
                                    attributesInput={{
                                        id: "state",
                                        name: "state"
                                    }}
                                    value={cityOrState.value} // Optional.[String].Default: "".
                                    disabled={false} // Optional.[Bool].Default: false.
                                    showSearch={true}
                                    validate={validate} // Optional.[Bool].Default: false. If you have a submit button and trying to validate all the inputs of your form at onece, toggle it to true, then it will validate the field and pass the result via the "validationCallback" you provide.
                                    validationCallback={res => {
                                        setHasMovieError(res)
                                        setValidate(false)
                                    }
                                    } // Optional.[Func].Default: none. Return the validation result.
                                    optionList={STATE_OPTIONS_LIST} // Required.[Array of Object(s)].Default: [].
                                    classNameSelect="" // Optional.[String].Default: "".
                                    classNameWrapper="" // Optional.[String].Default: "".
                                    classNameContainer="" // Optional.[String].Default: "".
                                    classNameOptionListContainer="" // Optional.[String].Default: "".
                                    classNameOptionListItem="" // Optional.[String].Default: "".
                                    customStyleSelect={{ height: "26px" }} // Optional.[Object].Default: {}.
                                    customStyleWrapper={{}} // Optional.[Object].Default: {}.
                                    customStyleContainer={{ borderRadius: "5px", background: "white" }} // Optional.[Object].Default: {}.
                                    customStyleOptionListContainer={{
                                        maxHeight: "200px",
                                        overflow: "auto",
                                        fontSize: "14px"
                                    }} // Optional.[Object].Default: {}.
                                    customStyleOptionListItem={{}} // Optional.[Object].Default: {}.
                                    onChange={(res, e) => {
                                        setCityOrState({ value: res.id })
                                        console.log(e);
                                    }} // Optional.[Func].Default: () => {}. Will return the value.
                                    onBlur={() => { }} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                                    validationOption={{
                                        name: "State or City", // Optional.[String].Default: "". To display in the Error message. i.e Please select a ${name}.
                                        check: true, // Optional.[Bool].Default: true. To determin if you need to validate.
                                        required: true // Optional.[Bool].Default: true. To determin if it is a required field.
                                    }}
                                />}
                                {cityOrState.errMsg == "" ? (
                                    ""
                                ) : (
                                    <div className="errorMsg text-danger ml-2">{cityOrState.errMsg}</div>
                                )}
                            </Form.Group>

                            <Form.Group className="mb-3" as={Col} controlId="formGridZipCode">
                                <Form.Label className="font-weight-bold text-dark">Zip Code</Form.Label> {' '} <span className="text-danger font-weight-bold">*</span>
                                {/* <Form.Control /> */}
                                <Textbox
                                    attributesInput={{
                                        placeholder: "Enter the Zip Code",
                                        type: "text"
                                    }}
                                    customStyleInput={{
                                        paddingTop: "0",
                                        paddingBottom: "0",
                                        height: "38px",
                                        borderRadius: "5px",
                                        paddingLeft: "10px",
                                        paddingRight: "0px",
                                        border: "none",
                                        textAlign: "left"
                                    }}
                                    value={zip.value}
                                    onChange={handleZipChange}
                                    onBlur={() => { }}
                                    validationOption={{
                                        check: false
                                    }}
                                />
                                {zip.errMsg == "" ? (
                                    ""
                                ) : (
                                    <div className="errorMsg text-danger ml-2">{zip.errMsg}</div>
                                )}
                            </Form.Group>
                        </Row>

                        <Row>
                            <Form.Group className="mb-3" as={Col} controlId="formGridPH">
                                <Form.Label className="font-weight-bold text-dark">Phone Number</Form.Label> {' '} <span className="text-danger font-weight-bold">*</span>
                                <Textbox
                                    attributesInput={{ // Optional.
                                        id: 'Number',
                                        name: 'Number',
                                        type: 'text', // Input type [text, password, number]. NOTE: provide "text" for better performance since different browsers run differently with "number".
                                        placeholder: 'Enter the Phone Number',
                                    }}
                                    customStyleInput={{
                                        paddingTop: "0",
                                        paddingBottom: "0",
                                        height: "38px",
                                        borderRadius: "5px",
                                        paddingLeft: "10px",
                                        paddingRight: "0px",
                                        border: "none",
                                        textAlign: "left"
                                    }}
                                    value={pNo.value} // Optional.[String].Default: "".
                                    onChange={handlePhoneChange} // Required.[Func].Default: () => {}. Will return the value.
                                    onBlur={() => { }} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                                    validationOption={{
                                        check: false,
                                        type: 'number', // Optional.[String].Default: "string". Validation type, options are ['string', 'number', 'alphanumeric', 'alpha'].
                                        // mantissa: 10, // Optional.[Number].Default: -1. Number precision.
                                    }}
                                />

                                {pNo.errMsg == "" ? (
                                    ""
                                ) : (
                                    <div className="errorMsg text-danger ml-2">{pNo.errMsg}</div>
                                )}
                            </Form.Group>

                            <Form.Group className="mb-3" as={Col} controlId="formGridMob">
                                <Form.Label className="font-weight-bold text-dark">Mobile Number</Form.Label> {' '} <span className="text-danger font-weight-bold">*</span>
                                <Textbox
                                    attributesInput={{ // Optional.
                                        id: 'Number',
                                        name: 'Number',
                                        type: 'text', // Input type [text, password, number]. NOTE: provide "text" for better performance since different browsers run differently with "number".
                                        placeholder: 'Enter the Mobile Number',
                                    }}
                                    customStyleInput={{
                                        paddingTop: "0",
                                        paddingBottom: "0",
                                        height: "38px",
                                        borderRadius: "5px",
                                        paddingLeft: "10px",
                                        paddingRight: "0px",
                                        border: "none",
                                        textAlign: "left"
                                    }}
                                    value={mob.value} // Optional.[String].Default: "".
                                    onChange={handleMobChange} // Required.[Func].Default: () => {}. Will return the value.
                                    onBlur={() => { }} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                                    validationOption={{
                                        check: false,
                                        type: 'number', // Optional.[String].Default: "string". Validation type, options are ['string', 'number', 'alphanumeric', 'alpha'].
                                        // mantissa: 10, // Optional.[Number].Default: -1. Number precision.
                                    }}
                                />

                                {mob.errMsg == "" ? (
                                    ""
                                ) : (
                                    <div className="errorMsg text-danger ml-2">{mob.errMsg}</div>
                                )}
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress">
                            <Form.Label className="font-weight-bold text-dark">Address</Form.Label> {' '} <span className="text-danger font-weight-bold">*</span>
                            {/* <Form.Control
                                as="textarea"
                                style={{ height: '100px' }}
                            /> */}
                            <Textarea
                                attributesInput={{ // Optional.
                                    id: 'address',
                                    name: 'address',
                                    type: 'text',
                                    placeholder: 'Place your address here ^-^',
                                }}
                                value={address.value} // Optional.[String].Default: "".
                                onChange={handleAddressChange} // Required.[Func].Default: () => {}. Will return the value.
                                onBlur={(e) => { }} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                                validationOption={{
                                    check: false,
                                    name: 'address', // Optional.[String].Default: "". To display in the Error message. i.e Please enter your {name}.
                                }}
                            />
                            {address.errMsg == "" ? (
                                    ""
                                ) : (
                                    <div className="errorMsg text-danger ml-2">{address.errMsg}</div>
                                )}
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