import React, { useState, useEffect } from 'react';
import Footer from '../../components/RegFooter';
import { userRegistration } from '../../utils/apis/api';
import Alert from '@mui/material/Alert';
import { useHistory, Link } from 'react-router-dom'

const Register = () => {
    const [regEmail, setRegEmail] = useState('')
    const [pwd, setPwd] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [company, setCompany] = useState('')
    const [jobDes, setJobDes] = useState('')
    const [mobile, setMobile] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('India')
    const [captcha, setCaptcha] = useState(Math.floor(Math.random() * (10000 - 1000)) + 1000)
    const [code, setCode] = useState('')
    const [checked, setChecked] = useState(true);
    const [fNameErr, setFNameErr] = useState(null)
    const [lNameErr, setLNameErr] = useState(null)
    const [emailErr, setEmailErr] = useState(null)
    const [pwdErr, setPwdErr] = useState(null)
    const [companyErr, setCompanyErr] = useState(null)
    const [jobErr, setJobErr] = useState(null)
    const [phnErr, setPhnErr] = useState(null)
    const [countryErr, setCountryErr] = useState(null)
    const [cityErr, setCityErr] = useState(null)
    const [captchaErr, setCaptchaErr] = useState(null)
    const [checkErr, setCheckErr] = useState(null)
    const [errMsg, setErrMsg] = useState(null)
    const [submited, setSubmited] = useState(false)
    const history = useHistory()

    const captchaGenerator = () => {
        setCaptcha(Math.floor(Math.random() * (10000 - 1000)) + 1000)
    }

    const registerHandler = async event => {
        var valObj = {}
        event.preventDefault();
        let pass = true;
        const iChars = "!@#$%^&*()+=-[]\\';,./{}|\":<>?1234567890";

        if (firstName !== '') {
            for (var i = 0; i < firstName.split("").length; i++) {
                if (iChars.indexOf(firstName.charAt(i)) !== -1) {
                    setFNameErr("Your firstName has special characters or numbers. \nThese are not allowed.\n Please remove them and try again.");
                    pass = false;
                }
            }
        } else {
            // console.log('check 1st')
            setFNameErr("First Name is required!")
            pass = false;
        }

        if (lastName !== '') {
            for (var i = 0; i < lastName.split("").length; i++) {
                if (iChars.indexOf(lastName.charAt(i)) !== -1) {
                    setLNameErr("Your firstName has special characters or numbers. \nThese are not allowed.\n Please remove them and try again.");
                    pass = false;
                }
            }
        } else {
            setLNameErr("Last Name is required!");
            pass = false;
        }

        if (regEmail.length > 0) {
            let lastAtPos = regEmail.lastIndexOf("@");
            let lastDotPos = regEmail.lastIndexOf(".");

            if (
                !(
                    lastAtPos < lastDotPos &&
                    lastAtPos > 0 &&
                    regEmail.indexOf("@@") === -1 &&
                    lastDotPos > 2 &&
                    regEmail.length - lastDotPos > 2
                )
            ) {
                setEmailErr("Email must be a valid email address")
                pass = false;
            }
        }
        else {
            setEmailErr("Email address is required..")
            pass = false;
        }

        if (pwd.length === 0) {
            setPwdErr("Password is required")
            pass = false;
        }
        else if (pwd.length < 4) {
            setPwdErr("Password length should be 4 character")
            pass = false;
        }

        if (company.length === 0) {
            setCompanyErr("Company Name is required")
            pass = false
        }

        if (jobDes === '') {
            setJobErr("Job Description must be Selected")
            pass = false
        }

        if (mobile.length === 0) {
            setPhnErr("Mobile Number is required")
            pass = false
        }
        else {
            const alp = "!@#$%^&*()+=-[]\\';,./{}|\":<>?abcdefghijklomnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
            for (let i = 0; i < mobile.split("").length; i++) {
                if (alp.indexOf(mobile.charAt(i)) !== -1) {
                    setPhnErr("Mobile Number must be in number!");
                    pass = false
                }
            }
        }

        if (country === '') {
            setCountryErr("Country must be Selected")
            pass = false
        }
        if (city.length === 0) {
            setCityErr("City is required")
            pass = false
        }

        if (code.length === 0) {
            setCaptchaErr("Code is required")
            pass = false
        }
        else if (captcha != code) {
            setCaptchaErr("Captcha code should be correct")
            pass = false
        }

        if (checked === false) {
            setCheckErr("must be Checked")
            pass = false
        }

        if (!pass) {
            setSubmited(true)
            return false
        }

        // console.log('right way')
        const savedUser = await userRegistration({
            firstName,
            lastName,
            f_email: regEmail,
            CS_password: pwd,
            f_businessType: jobDes,
            f_mobileno: mobile,
            f_country: country,
            f_state: city,
            f_companyname: company
        })

        if (!savedUser.error) {
            window.localStorage.setItem(
                'loggedUser', JSON.stringify(savedUser)
            )
            setRegEmail('')
            setCaptcha(Math.floor(Math.random() * (10000 - 1000)) + 1000)
            setCity('')
            setCode('')
            setFirstName('')
            setLastName('')
            setCountry('')
            setMobile('')
            setJobDes('')
            setCompany('')
            setPwd('')
            history.push('/myaccounts')
        }

        setErrMsg(savedUser.error)
        setTimeout(() => {
            setErrMsg(null)
            captchaGenerator()
        }, 5000)
    }

    const afterSubmit = () => {
        if (submited) {
            const iChars = "!@#$%^&*()+=-[]\\';,./{}|\":<>?1234567890";

            if (firstName !== '') {
                setFNameErr(null)
                for (var i = 0; i < firstName.split("").length; i++) {
                    if (iChars.indexOf(firstName.charAt(i)) !== -1) {
                        setFNameErr("Your firstName has special characters or numbers. \nThese are not allowed.\n Please remove them and try again.");
                    }
                }
            } else {
                setFNameErr("First Name is required!")
            }

            if (lastName !== '') {
                setLNameErr(null)
                for (var i = 0; i < lastName.split("").length; i++) {
                    if (iChars.indexOf(lastName.charAt(i)) !== -1) {
                        setLNameErr("Your firstName has special characters or numbers. \nThese are not allowed.\n Please remove them and try again.");
                    }
                }
            } else {
                setLNameErr("Last Name is required!");
            }
    
            if (regEmail.length > 0) {
                let lastAtPos = regEmail.lastIndexOf("@");
                let lastDotPos = regEmail.lastIndexOf(".");
    
                if (
                    !(
                        lastAtPos < lastDotPos &&
                        lastAtPos > 0 &&
                        regEmail.indexOf("@@") === -1 &&
                        lastDotPos > 2 &&
                        regEmail.length - lastDotPos > 2
                    )
                ) {
                    setEmailErr("Email must be a valid email address")
                }
                else{
                    setEmailErr(null)
                }
            }
            else {
                setEmailErr("Email address is required..")
            }
    
            if (pwd.length === 0) {
                setPwdErr("Password is required")
            }
            else if (pwd.length < 4) {
                setPwdErr("Password length should be 4 character")
            }
            else{
                setPwdErr(null) 
            }
    
            if (company.length === 0) {
                setCompanyErr("Company Name is required")
            }else{
                setCompanyErr(null)
            }
    
            if (jobDes === '') {
                setJobErr("Job Description must be Selected")
            }else{
                setJobErr(null)
            }
    
            if (mobile.length === 0) {
                setPhnErr("Mobile Number is required")
            }
            else {
                setPhnErr(null)
                const alp = "!@#$%^&*()+=-[]\\';,./{}|\":<>?abcdefghijklomnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
                for (let i = 0; i < mobile.split("").length; i++) {
                    if (alp.indexOf(mobile.charAt(i)) !== -1) {
                        setPhnErr("Mobile Number must be in number!");
                    }
                }
            }
    
            if (country === '') {
                setCountryErr("Country must be Selected")
            }else{
                setCountryErr(null)
            }
            if (city.length === 0) {
                setCityErr("City is required")
            }else{
                setCityErr(null)
            }
    
            if (code.length === 0) {
                setCaptchaErr("Code is required")
            }
            else if (captcha != code) {
                setCaptchaErr("Captcha code should be correct")
            }
            else{
                setCaptchaErr(null)
            }
    
            if (checked === false) {
                setCheckErr("must be Checked")
            }else{
                setCheckErr(null)
            }
        }
    }

    useEffect(() => {
        document.title = "ImagesBazaar: Register"
        afterSubmit()
    }, [regEmail, pwd, firstName, lastName,company,jobDes,mobile,city, country,code,checked])

    return (
        <div className='container-fluid p-3'>
            {/* logo */}
            <div>
                <img className="mx-auto d-block" style={{ width: '11%' }} alt="logo" src="/images/logo svg.svg" />
            </div>
            {/* body container */}
            <div style={{
                padding: '0px 0px 0px 0px',
                borderRadius: '5px',
                boxShadow: '1px -1px 16px -7px rgba(0,0,0,0.2)',
                margin: '13px 0px 17px 0px',
                background: '#333'
            }} className="w-75 mx-auto">
                <div className="row">
                    <div className="col-md-6 col-sm-12 col-xs-12">
                        <div style={{ padding: '20px 0px 0px 37px' }}>
                            <span style={{
                                color: '#fff',
                                fontSize: '30px',
                                fontWeight: '500'
                            }}>Register</span>
                            <p style={{
                                marginBottom: '16px',
                                marginTop: '0px',
                                fontSize: '14px'
                            }}>(to create a new account!)</p>
                        </div>

                        <div style={{ padding: '6px 10px 20px 37px' }}>
                            <div className="row">
                                <div className="col-lg-12">
                                    {errMsg && <Alert severity="error" className='mb-2 font-weight-bold' > {errMsg} </Alert>}
                                    <form method="post" autocomplete="off" onSubmit={registerHandler}>
                                        <div className='mb-3'>
                                            <div className="input-group">
                                                <div className="input-group-prepend"> <span className="input-group-text"><i className="fa fa-user"></i></span> </div>
                                                <input type="text" className="form-control" placeholder="First Name" name="firstName" value={firstName} onKeyDown={afterSubmit} onChange={({ target }) => setFirstName(target.value)} maxlength="15" />
                                            </div>
                                            {fNameErr && <div className="text-danger d-block mb-3">
                                                <span> {fNameErr} </span>
                                            </div>}
                                        </div>
                                        <div className='mb-3'>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fa fa-user"></i></span>
                                                </div>
                                                <input type="text" className="form-control" value={lastName} name="lastName" onKeyDown={afterSubmit} onChange={({ target }) => setLastName(target.value)} placeholder="Last Name" maxlength="15" />
                                            </div>
                                            {lNameErr && <div className="text-danger d-block mb-3">
                                                <span> {lNameErr} </span>
                                            </div>}
                                        </div>
                                        <div className='mb-3'>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fa fa-envelope"></i></span>
                                                </div>
                                                <input type="text" className="form-control" name="regEmail" value={regEmail} onKeyDown={afterSubmit} onChange={({ target }) => setRegEmail(target.value)} placeholder="Email Address" maxlength="50" />
                                            </div>
                                            {emailErr && <div className="text-danger d-block mb-3">
                                                <span> {emailErr} </span>
                                            </div>}
                                        </div>
                                        <div className='mb-3'>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fa fa-lock"></i></span>
                                                </div>
                                                <input type="password" className="form-control" name="pwd" value={pwd} onKeyDown={afterSubmit} onChange={({ target }) => setPwd(target.value)} placeholder="Password" maxlength="15" />
                                            </div>
                                            {pwdErr && <div className="text-danger d-block mb-3">
                                                <span> {pwdErr} </span>
                                            </div>}
                                        </div>
                                        <div className='mb-3'>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fa fa-user"></i></span>
                                                </div>
                                                <input type="text" className="form-control" name="company" value={company} onKeyDown={afterSubmit} onChange={({ target }) => setCompany(target.value)} placeholder="Company Name" maxlength="550" />
                                            </div>
                                            {companyErr && <div className="text-danger d-block mb-3">
                                                <span> {companyErr} </span>
                                            </div>}
                                        </div>
                                        <div className='mb-3'>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fa fa-user"></i></span>
                                                </div>
                                                <select className="select form-control" size="1" name="jobDes" onKeyDown={afterSubmit} value={jobDes} onChange={({ target }) => setJobDes(target.value)}>
                                                    <option value="" selected="selected">Select Job Description</option>

                                                    <option value="Freelance Designer">Freelance Designer</option>

                                                    <option value="Graphic Designer">Graphic Designer</option>

                                                    <option value="Art Director">Art Director</option>

                                                    <option value="Accounts Payable">Account Executive </option>

                                                    <option value="Illustrator">Illustrator</option>

                                                    <option value="Art Buyer">Art Buyer</option>

                                                    <option value="Photo Editor">Photo Editor</option>

                                                    <option value="Creative Director">Creative Director</option>

                                                    <option value="Web Designer">Web Designer</option>

                                                    <option value="Multi-Media Producer">Multi-Media Producer</option>

                                                    <option value="Photographer">Photographer</option>

                                                    <option value="Student">Student</option>

                                                    <option value="Production Manager">Production Manager</option>

                                                    <option value="Marketing Director">Marketing Director</option>

                                                    <option value="Corp Communications Director">Corp Communications Director</option>

                                                    <option value="Owner/CEO">Owner/CEO</option>

                                                    <option value="Public Relations Officer">Public Relations Officer</option>

                                                    <option value="Religious Affiliate">Religious Affiliate</option>

                                                    <option value="Client Serving">Client Serving</option>

                                                    <option value="Other">Other</option>

                                                </select>
                                            </div>
                                            {jobErr && <div className="text-danger d-block mb-3">
                                                <span> {jobErr} </span>
                                            </div>}
                                        </div>
                                        <div className='mb-3'>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fa fa-mobile"></i></span>
                                                </div>
                                                <input type="text" className="form-control" name="mobile" placeholder="Mobile Number" value={mobile} onKeyDown={afterSubmit} onChange={({ target }) => !(isNaN(Number(target.value))) && setMobile(target.value)} maxlength="12" />
                                            </div>
                                            {phnErr && <div className="text-danger d-block mb-3">
                                                <span> {phnErr} </span>
                                            </div>}
                                        </div>
                                        <div className='mb-3'>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fa fa-user"></i></span>
                                                </div>
                                                <select className="form-control" onKeyDown={afterSubmit} value={country} name="country" onChange={({ target }) => setCountry(target.value)}>
                                                    <option value=""> Select your Country </option>

                                                    <option value="Afghanistan">
                                                        Afghanistan</option>
                                                    <option value="land Islands">
                                                        land Islands</option>
                                                    <option value="Albania">
                                                        Albania</option>
                                                    <option value="Algeria">
                                                        Algeria</option>
                                                    <option value="American Samoa">
                                                        American Samoa</option>
                                                    <option value="AndorrA">
                                                        AndorrA</option>
                                                    <option value="Angola">
                                                        Angola</option>
                                                    <option value="Anguilla">
                                                        Anguilla</option>
                                                    <option value="Antarctica">
                                                        Antarctica</option>
                                                    <option value="Antigua and Barbuda">
                                                        Antigua and Barbuda</option>
                                                    <option value="Argentina">
                                                        Argentina</option>
                                                    <option value="Armenia">
                                                        Armenia</option>
                                                    <option value="Aruba">
                                                        Aruba</option>
                                                    <option value="Australia">
                                                        Australia</option>
                                                    <option value="Austria">
                                                        Austria</option>
                                                    <option value="Azerbaijan">
                                                        Azerbaijan</option>
                                                    <option value="Bahamas">
                                                        Bahamas</option>
                                                    <option value="Bahrain">
                                                        Bahrain</option>
                                                    <option value="Bangladesh">
                                                        Bangladesh</option>
                                                    <option value="Barbados">
                                                        Barbados</option>
                                                    <option value="Belarus">
                                                        Belarus</option>
                                                    <option value="Belgium">
                                                        Belgium</option>
                                                    <option value="Belize">
                                                        Belize</option>
                                                    <option value="Benin">
                                                        Benin</option>
                                                    <option value="Bermuda">
                                                        Bermuda</option>
                                                    <option value="Bhutan">
                                                        Bhutan</option>
                                                    <option value="Bolivia">
                                                        Bolivia</option>
                                                    <option value="Bosnia and Herzegovina">
                                                        Bosnia and Herzegovina</option>
                                                    <option value="Botswana">
                                                        Botswana</option>
                                                    <option value="Bouvet Island">
                                                        Bouvet Island</option>
                                                    <option value="Brazil">
                                                        Brazil</option>
                                                    <option value="British Indian Ocean Territory">
                                                        British Indian Ocean Territory</option>
                                                    <option value="Brunei Darussalam">
                                                        Brunei Darussalam</option>
                                                    <option value="Bulgaria">
                                                        Bulgaria</option>
                                                    <option value="Burkina Faso">
                                                        Burkina Faso</option>
                                                    <option value="Burundi">
                                                        Burundi</option>
                                                    <option value="Cambodia">
                                                        Cambodia</option>
                                                    <option value="Cameroon">
                                                        Cameroon</option>
                                                    <option value="Canada">
                                                        Canada</option>
                                                    <option value="Cape Verde">
                                                        Cape Verde</option>
                                                    <option value="Cayman Islands">
                                                        Cayman Islands</option>
                                                    <option value="Central African Republic">
                                                        Central African Republic</option>
                                                    <option value="Chad">
                                                        Chad</option>
                                                    <option value="Chile">
                                                        Chile</option>
                                                    <option value="China">
                                                        China</option>
                                                    <option value="Christmas Island">
                                                        Christmas Island</option>
                                                    <option value="Cocos (Keeling) Islands">
                                                        Cocos (Keeling) Islands</option>
                                                    <option value="Colombia">
                                                        Colombia</option>
                                                    <option value="Comoros">
                                                        Comoros</option>
                                                    <option value="Congo">
                                                        Congo</option>
                                                    <option value="Congo, The Democratic Republic of the">
                                                        Congo, The Democratic Republic of the</option>
                                                    <option value="Cook Islands">
                                                        Cook Islands</option>
                                                    <option value="Costa Rica">
                                                        Costa Rica</option>
                                                    <option value="Cote D&quot;Ivoire">
                                                        Cote D"Ivoire</option>
                                                    <option value="Croatia">
                                                        Croatia</option>
                                                    <option value="Cuba">
                                                        Cuba</option>
                                                    <option value="Cyprus">
                                                        Cyprus</option>
                                                    <option value="Czech Republic">
                                                        Czech Republic</option>
                                                    <option value="Denmark">
                                                        Denmark</option>
                                                    <option value="Djibouti">
                                                        Djibouti</option>
                                                    <option value="Dominica">
                                                        Dominica</option>
                                                    <option value="Dominican Republic">
                                                        Dominican Republic</option>
                                                    <option value="Ecuador">
                                                        Ecuador</option>
                                                    <option value="Egypt">
                                                        Egypt</option>
                                                    <option value="El Salvador">
                                                        El Salvador</option>
                                                    <option value="Equatorial Guinea">
                                                        Equatorial Guinea</option>
                                                    <option value="Eritrea">
                                                        Eritrea</option>
                                                    <option value="Estonia">
                                                        Estonia</option>
                                                    <option value="Ethiopia">
                                                        Ethiopia</option>
                                                    <option value="Falkland Islands (Malvinas)">
                                                        Falkland Islands (Malvinas)</option>
                                                    <option value="Faroe Islands">
                                                        Faroe Islands</option>
                                                    <option value="Fiji">
                                                        Fiji</option>
                                                    <option value="Finland">
                                                        Finland</option>
                                                    <option value="France">
                                                        France</option>
                                                    <option value="French Guiana">
                                                        French Guiana</option>
                                                    <option value="French Polynesia">
                                                        French Polynesia</option>
                                                    <option value="French Southern Territories">
                                                        French Southern Territories</option>
                                                    <option value="Gabon">
                                                        Gabon</option>
                                                    <option value="Gambia">
                                                        Gambia</option>
                                                    <option value="Georgia">
                                                        Georgia</option>
                                                    <option value="Germany">
                                                        Germany</option>
                                                    <option value="Ghana">
                                                        Ghana</option>
                                                    <option value="Gibraltar">
                                                        Gibraltar</option>
                                                    <option value="Greece">
                                                        Greece</option>
                                                    <option value="Greenland">
                                                        Greenland</option>
                                                    <option value="Grenada">
                                                        Grenada</option>
                                                    <option value="Guadeloupe">
                                                        Guadeloupe</option>
                                                    <option value="Guam">
                                                        Guam</option>
                                                    <option value="Guatemala">
                                                        Guatemala</option>
                                                    <option value="Guernsey">
                                                        Guernsey</option>
                                                    <option value="Guinea">
                                                        Guinea</option>
                                                    <option value="Guinea-Bissau">
                                                        Guinea-Bissau</option>
                                                    <option value="Guyana">
                                                        Guyana</option>
                                                    <option value="Haiti">
                                                        Haiti</option>
                                                    <option value="Heard Island and Mcdonald Islands">
                                                        Heard Island and Mcdonald Islands</option>
                                                    <option value="Holy See (Vatican City State)">
                                                        Holy See (Vatican City State)</option>
                                                    <option value="Honduras">
                                                        Honduras</option>
                                                    <option value="Hong Kong">
                                                        Hong Kong</option>
                                                    <option value="Hungary">
                                                        Hungary</option>
                                                    <option value="Iceland">
                                                        Iceland</option>
                                                    <option value="India" selected="selected">
                                                        India</option>
                                                    <option value="Indonesia">
                                                        Indonesia</option>
                                                    <option value="Iran, Islamic Republic Of">
                                                        Iran, Islamic Republic Of</option>
                                                    <option value="Iraq">
                                                        Iraq</option>
                                                    <option value="Ireland">
                                                        Ireland</option>
                                                    <option value="Isle of Man">
                                                        Isle of Man</option>
                                                    <option value="Israel">
                                                        Israel</option>
                                                    <option value="Italy">
                                                        Italy</option>
                                                    <option value="Jamaica">
                                                        Jamaica</option>
                                                    <option value="Japan">
                                                        Japan</option>
                                                    <option value="Jersey">
                                                        Jersey</option>
                                                    <option value="Jordan">
                                                        Jordan</option>
                                                    <option value="Kazakhstan">
                                                        Kazakhstan</option>
                                                    <option value="Kenya">
                                                        Kenya</option>
                                                    <option value="Kiribati">
                                                        Kiribati</option>
                                                    <option value="Korea, Democratic People&quot;S Republic of">
                                                        Korea, Democratic People"S Republic of</option>
                                                    <option value="Korea, Republic of">
                                                        Korea, Republic of</option>
                                                    <option value="Kuwait">
                                                        Kuwait</option>
                                                    <option value="Kyrgyzstan">
                                                        Kyrgyzstan</option>
                                                    <option value="Lao People&quot;S Democratic Republic">
                                                        Lao People"S Democratic Republic</option>
                                                    <option value="Latvia">
                                                        Latvia</option>
                                                    <option value="Lebanon">
                                                        Lebanon</option>
                                                    <option value="Lesotho">
                                                        Lesotho</option>
                                                    <option value="Liberia">
                                                        Liberia</option>
                                                    <option value="Libyan Arab Jamahiriya">
                                                        Libyan Arab Jamahiriya</option>
                                                    <option value="Liechtenstein">
                                                        Liechtenstein</option>
                                                    <option value="Lithuania">
                                                        Lithuania</option>
                                                    <option value="Luxembourg">
                                                        Luxembourg</option>
                                                    <option value="Macao">
                                                        Macao</option>
                                                    <option value="Macedonia, The Former Yugoslav Republic of">
                                                        Macedonia, The Former Yugoslav Republic of</option>
                                                    <option value="Madagascar">
                                                        Madagascar</option>
                                                    <option value="Malawi">
                                                        Malawi</option>
                                                    <option value="Malaysia">
                                                        Malaysia</option>
                                                    <option value="Maldives">
                                                        Maldives</option>
                                                    <option value="Mali">
                                                        Mali</option>
                                                    <option value="Malta">
                                                        Malta</option>
                                                    <option value="Marshall Islands">
                                                        Marshall Islands</option>
                                                    <option value="Martinique">
                                                        Martinique</option>
                                                    <option value="Mauritania">
                                                        Mauritania</option>
                                                    <option value="Mauritius">
                                                        Mauritius</option>
                                                    <option value="Mayotte">
                                                        Mayotte</option>
                                                    <option value="Mexico">
                                                        Mexico</option>
                                                    <option value="Micronesia, Federated States of">
                                                        Micronesia, Federated States of</option>
                                                    <option value="Moldova, Republic of">
                                                        Moldova, Republic of</option>
                                                    <option value="Monaco">
                                                        Monaco</option>
                                                    <option value="Mongolia">
                                                        Mongolia</option>
                                                    <option value="Montenegro">
                                                        Montenegro</option>
                                                    <option value="Montserrat">
                                                        Montserrat</option>
                                                    <option value="Morocco">
                                                        Morocco</option>
                                                    <option value="Mozambique">
                                                        Mozambique</option>
                                                    <option value="Myanmar">
                                                        Myanmar</option>
                                                    <option value="Namibia">
                                                        Namibia</option>
                                                    <option value="Nauru">
                                                        Nauru</option>
                                                    <option value="Nepal">
                                                        Nepal</option>
                                                    <option value="Netherlands">
                                                        Netherlands</option>
                                                    <option value="Netherlands Antilles">
                                                        Netherlands Antilles</option>
                                                    <option value="New Caledonia">
                                                        New Caledonia</option>
                                                    <option value="New Zealand">
                                                        New Zealand</option>
                                                    <option value="Nicaragua">
                                                        Nicaragua</option>
                                                    <option value="Niger">
                                                        Niger</option>
                                                    <option value="Nigeria">
                                                        Nigeria</option>
                                                    <option value="Niue">
                                                        Niue</option>
                                                    <option value="Norfolk Island">
                                                        Norfolk Island</option>
                                                    <option value="Northern Mariana Islands">
                                                        Northern Mariana Islands</option>
                                                    <option value="Norway">
                                                        Norway</option>
                                                    <option value="Oman">
                                                        Oman</option>
                                                    <option value="Pakistan">
                                                        Pakistan</option>
                                                    <option value="Palau">
                                                        Palau</option>
                                                    <option value="Palestinian Territory, Occupied">
                                                        Palestinian Territory, Occupied</option>
                                                    <option value="Panama">
                                                        Panama</option>
                                                    <option value="Papua New Guinea">
                                                        Papua New Guinea</option>
                                                    <option value="Paraguay">
                                                        Paraguay</option>
                                                    <option value="Peru">
                                                        Peru</option>
                                                    <option value="Philippines">
                                                        Philippines</option>
                                                    <option value="Pitcairn">
                                                        Pitcairn</option>
                                                    <option value="Poland">
                                                        Poland</option>
                                                    <option value="Portugal">
                                                        Portugal</option>
                                                    <option value="Puerto Rico">
                                                        Puerto Rico</option>
                                                    <option value="Qatar">
                                                        Qatar</option>
                                                    <option value="Reunion">
                                                        Reunion</option>
                                                    <option value="Romania">
                                                        Romania</option>
                                                    <option value="Russian Federation">
                                                        Russian Federation</option>
                                                    <option value="RWANDA">
                                                        RWANDA</option>
                                                    <option value="Saint Helena">
                                                        Saint Helena</option>
                                                    <option value="Saint Kitts and Nevis">
                                                        Saint Kitts and Nevis</option>
                                                    <option value="Saint Lucia">
                                                        Saint Lucia</option>
                                                    <option value="Saint Pierre and Miquelon">
                                                        Saint Pierre and Miquelon</option>
                                                    <option value="Saint Vincent and the Grenadines">
                                                        Saint Vincent and the Grenadines</option>
                                                    <option value="Samoa">
                                                        Samoa</option>
                                                    <option value="San Marino">
                                                        San Marino</option>
                                                    <option value="Sao Tome and Principe">
                                                        Sao Tome and Principe</option>
                                                    <option value="Saudi Arabia">
                                                        Saudi Arabia</option>
                                                    <option value="Senegal">
                                                        Senegal</option>
                                                    <option value="Serbia">
                                                        Serbia</option>
                                                    <option value="Seychelles">
                                                        Seychelles</option>
                                                    <option value="Sierra Leone">
                                                        Sierra Leone</option>
                                                    <option value="Singapore">
                                                        Singapore</option>
                                                    <option value="Slovakia">
                                                        Slovakia</option>
                                                    <option value="Slovenia">
                                                        Slovenia</option>
                                                    <option value="Solomon Islands">
                                                        Solomon Islands</option>
                                                    <option value="Somalia">
                                                        Somalia</option>
                                                    <option value="South Africa">
                                                        South Africa</option>
                                                    <option value="South Georgia and the South Sandwich Islands">
                                                        South Georgia and the South Sandwich Islands</option>
                                                    <option value="Spain">
                                                        Spain</option>
                                                    <option value="Sri Lanka">
                                                        Sri Lanka</option>
                                                    <option value="Sudan">
                                                        Sudan</option>
                                                    <option value="Suriname">
                                                        Suriname</option>
                                                    <option value="Svalbard and Jan Mayen">
                                                        Svalbard and Jan Mayen</option>
                                                    <option value="Swaziland">
                                                        Swaziland</option>
                                                    <option value="Sweden">
                                                        Sweden</option>
                                                    <option value="Switzerland">
                                                        Switzerland</option>
                                                    <option value="Syrian Arab Republic">
                                                        Syrian Arab Republic</option>
                                                    <option value="Taiwan, Province of China">
                                                        Taiwan, Province of China</option>
                                                    <option value="Tajikistan">
                                                        Tajikistan</option>
                                                    <option value="Tanzania, United Republic of">
                                                        Tanzania, United Republic of</option>
                                                    <option value="Thailand">
                                                        Thailand</option>
                                                    <option value="Timor-Leste">
                                                        Timor-Leste</option>
                                                    <option value="Togo">
                                                        Togo</option>
                                                    <option value="Tokelau">
                                                        Tokelau</option>
                                                    <option value="Tonga">
                                                        Tonga</option>
                                                    <option value="Trinidad and Tobago">
                                                        Trinidad and Tobago</option>
                                                    <option value="Tunisia">
                                                        Tunisia</option>
                                                    <option value="Turkey">
                                                        Turkey</option>
                                                    <option value="Turkmenistan">
                                                        Turkmenistan</option>
                                                    <option value="Turks and Caicos Islands">
                                                        Turks and Caicos Islands</option>
                                                    <option value="Tuvalu">
                                                        Tuvalu</option>
                                                    <option value="Uganda">
                                                        Uganda</option>
                                                    <option value="Ukraine">
                                                        Ukraine</option>
                                                    <option value="United Arab Emirates">
                                                        United Arab Emirates</option>
                                                    <option value="United Kingdom">
                                                        United Kingdom</option>
                                                    <option value="United States">
                                                        United States</option>
                                                    <option value="United States Minor Outlying Islands">
                                                        United States Minor Outlying Islands</option>
                                                    <option value="Uruguay">
                                                        Uruguay</option>
                                                    <option value="Uzbekistan">
                                                        Uzbekistan</option>
                                                    <option value="Vanuatu">
                                                        Vanuatu</option>
                                                    <option value="Venezuela">
                                                        Venezuela</option>
                                                    <option value="Viet Nam">
                                                        Viet Nam</option>
                                                    <option value="Virgin Islands, British">
                                                        Virgin Islands, British</option>
                                                    <option value="Virgin Islands, U.S.">
                                                        Virgin Islands, U.S.</option>
                                                    <option value="Wallis and Futuna">
                                                        Wallis and Futuna</option>
                                                    <option value="Western Sahara">
                                                        Western Sahara</option>
                                                    <option value="Yemen">
                                                        Yemen</option>
                                                    <option value="Zambia">
                                                        Zambia</option>
                                                    <option value="Zimbabwe">
                                                        Zimbabwe</option>

                                                </select>
                                            </div>
                                            {countryErr && <div className="text-danger d-block mb-3">
                                                <span> {countryErr} </span>
                                            </div>}
                                        </div>
                                        <div className='mb-3'>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text"><i className="fa fa-user"></i></span>
                                                </div>
                                                {country === 'India' && <select className='form-control' name="city" onKeyDown={afterSubmit} value={city} onChange={({ target }) => setCity(target.value)}>
                                                    <option value="" selected="selected">Select your State</option>
                                                    <option value="Andaman and Nicobar Islands">
                                                        Andaman and Nicobar Islands</option>
                                                    <option value="Andhra Pradesh">
                                                        Andhra Pradesh</option>
                                                    <option value="Andhra Pradesh (New)">
                                                        Andhra Pradesh (New)</option>
                                                    <option value="Arunachal Pradesh">
                                                        Arunachal Pradesh</option>
                                                    <option value="Assam">
                                                        Assam</option>
                                                    <option value="Bihar">
                                                        Bihar</option>
                                                    <option value="Chandigarh">
                                                        Chandigarh</option>
                                                    <option value="Chhattisgarh">
                                                        Chhattisgarh</option>
                                                    <option value="Dadra and Nagar Haveli">
                                                        Dadra and Nagar Haveli</option>
                                                    <option value="Daman and Diu">
                                                        Daman and Diu</option>
                                                    <option value="Delhi">
                                                        Delhi</option>
                                                    <option value="Goa">
                                                        Goa</option>
                                                    <option value="Gujarat">
                                                        Gujarat</option>
                                                    <option value="Haryana">
                                                        Haryana</option>
                                                    <option value="Himachal Pradesh">
                                                        Himachal Pradesh</option>
                                                    <option value="Jammu and Kashmir">
                                                        Jammu and Kashmir</option>
                                                    <option value="Jharkhand">
                                                        Jharkhand</option>
                                                    <option value="Karnataka">
                                                        Karnataka</option>
                                                    <option value="Kerala">
                                                        Kerala</option>
                                                    <option value="Lakshadweep">
                                                        Lakshadweep</option>
                                                    <option value="Madhya Pradesh">
                                                        Madhya Pradesh</option>
                                                    <option value="Maharashtra">
                                                        Maharashtra</option>
                                                    <option value="Manipur">
                                                        Manipur</option>
                                                    <option value="Meghalaya">
                                                        Meghalaya</option>
                                                    <option value="Mizoram">
                                                        Mizoram</option>
                                                    <option value="Nagaland">
                                                        Nagaland</option>
                                                    <option value="Odisha">
                                                        Odisha</option>
                                                    <option value="Puducherry">
                                                        Puducherry</option>
                                                    <option value="Punjab">
                                                        Punjab</option>
                                                    <option value="Rajasthan">
                                                        Rajasthan</option>
                                                    <option value="Sikkim">
                                                        Sikkim</option>
                                                    <option value="Tamil Nadu">
                                                        Tamil Nadu</option>
                                                    <option value="Telangana">
                                                        Telangana</option>
                                                    <option value="Tripura">
                                                        Tripura</option>
                                                    <option value="Uttar Pradesh">
                                                        Uttar Pradesh</option>
                                                    <option value="Uttarakhand">
                                                        Uttarakhand</option>
                                                    <option value="West Bengal">
                                                        West Bengal</option>
                                                </select>}
                                                {country !== 'India' && <input type="text" className="form-control" name="city" placeholder="Enter Your City/State" value={city} onKeyDown={afterSubmit} onChange={({ target }) => setCity(target.value)} />}
                                            </div>
                                            {cityErr && <div className="text-danger d-block mb-3">
                                                <span> {cityErr} </span>
                                            </div>}
                                        </div>
                                        <div className="input-group mb-3" id="Captcha_Code" style={{ width: '47%', float: 'left' }}>
                                            <div className="input-group-prepend" style={{ borderRight: "none", width: "100%" }}>
                                                <span className="input-group-text" style={{ cursor: "pointer" }} onClick={captchaGenerator}><i className="fa fa-refresh"></i></span>

                                                <p style={{
                                                    width: '100%',
                                                    border: '1px solid #494f50',
                                                    fontSize: '28px',
                                                    background: '#494f50',
                                                    height: '43px',
                                                    marginBottom: '0px',
                                                    borderRadius: '0px 5px 5px 0px',
                                                    padding: '0px 0px 0px 11px'
                                                }}> {captcha} </p>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <div className="input-group" style={{ marginLeft: "23px", width: '47%', float: 'left' }}>
                                                <input type="text" className="form-control" placeholder="Enter Code" name="code" maxlength="4" tabIndex="1" onKeyDown={afterSubmit} value={code} onChange={({ target }) => setCode(target.value)} />
                                            </div>
                                            {captchaErr && <div className="text-danger d-block mb-3">
                                                <span> {captchaErr} </span>
                                            </div>}
                                        </div>

                                        <div className="form-group">
                                            &nbsp;
                                            <label for="remember"><input type="checkbox" id="remember" name="checked" defaultChecked={checked} onMouseDown={afterSubmit} onChange={() => setChecked(!checked)} tabIndex="3" /> I agree to ImagesBazaar's <a href="https://www.imagesbazaar.com/termsofuse" style={{ textDecoration: "none", color: "#00FFFF" }}><b>Terms and Conditions.</b></a></label>
                                            {checkErr && <div className="text-danger d-block mb-3">
                                                <span> {checkErr} </span>
                                            </div>}
                                        </div>


                                        <div className="form-group">
                                            <div className="row justify-content-center">
                                                <div className="col-sm-6 col-sm-offset-3">
                                                    <input type="submit" tabIndex="4" className="btn" style={{
                                                        backgroundColor: 'black',
                                                        outline: 'none',
                                                        color: '#fff',
                                                        fontSize: '16px',
                                                        height: 'auto',
                                                        fontWeight: 'normal',
                                                        padding: '9px 54px',
                                                        textTransform: 'uppercase',
                                                        fontWeight: '500',
                                                        marginTop: '0px'
                                                    }} value="Register" />
                                                    {/* <img style={{ marginLeft: "13px", marginTop: "-13px", width: "144px", height: "10px", display: "none" }} id="imgloader" src="/images/loader2.gif" /> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="row justify-content-center">
                                                <div className="col-sm-6 col-sm-offset-3">
                                                    <div className='text-center'>
                                                        <span className='font-weight-bold'>Have an account?</span> <Link to="/ibregistration" className="btn btn-rounded" style={{
                                                            color: '#00FFFF',
                                                            fontSize: '28px'
                                                        }}>Sign in Now</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12 col-xs-12 col-lg-6 hidden-xs Register_Cls">
                        <div style={{ minHeight: '100%' }}>
                            <img src="/images/AuthImages/1.png" />
                        </div>
                    </div>
                </div>
            </div>
            {/* footer */}
            <Footer />
        </div>
    )
}

export default Register
