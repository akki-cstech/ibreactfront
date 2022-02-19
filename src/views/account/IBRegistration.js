import React, { useState, useEffect } from 'react';
import Footer from '../../components/RegFooter';
import { loginUser } from '../../utils/apis/api';
import { useHistory, Link } from 'react-router-dom'
import Alert from '@mui/material/Alert';

const IBRegistration = ({ setUser }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState(null)
    const [errObj, setErrObj] = useState(null)
    const [submitted, setSubmitted] = useState(false)
    const history = useHistory()

    const loginHandler = async event => {
        event.preventDefault()
        // console.log('check email and password', email, password)
        if (email === '' || password === '') {
            setErrObj({ email: "Email must be a valid email address", pwd: "Password is required" })
            setEmail('')
            setPassword('')
            setSubmitted(true)
            return false
        }

        const user = await loginUser({ email, password })
        if (!user.error) {
            window.localStorage.setItem(
                'loggedUser', JSON.stringify(user)
            )
            setEmail('')
            setPassword('')
            setUser(user)
            history.push('/myaccounts')
        }

        setErrMsg(user.error)
        setTimeout(() => {
            setErrMsg(null)
        }, 5000)
    }

    const afterSubmit = () => {
        if(submitted){
            if (email !== '') {
                let lastAtPos = email.lastIndexOf("@");
                let lastDotPos = email.lastIndexOf(".");
                if (
                    !(
                        lastAtPos < lastDotPos &&
                        lastAtPos > 0 &&
                        email.indexOf("@@") === -1 &&
                        lastDotPos > 2 &&
                        email.length - lastDotPos > 2
                    )
                ) {
                    // console.log('hello2')
                    setErrObj({ ...errObj, email: "Email must be a valid email address"})
                }
                else{
                    // console.log('hello3')
                    setErrObj({ ...errObj, email: '' })
                }
            }

            password !== '' ? setErrObj({...errObj, pwd: ''}) : setErrObj({ ...errObj, pwd: "Password is required" })
        }
    }

    useEffect(() => {
        document.title = "ImagesBazaar: Sign In"
        afterSubmit()
    }, [email, password])

    return (
        <div className='container-fluid p-3'>
            <div>
                <img className="mx-auto d-block" style={{ width: '11%' }} alt="logo" src="/images/logo svg.svg" />
            </div>
            <div className='row w-75 mx-auto mt-4' style={{ background: "#333" }}>
                <div className="col-md-6 col-sm-12 hidden-xs col-xs-6 col-lg-6">
                    <img className="d-flex" alt="logingirl" style={{
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }} src="/images/AuthImages/content-bg1.jpg" />
                </div>
                <div className='col-md-6 col-sm-12 col-xs-6'>
                    <div style={{ padding: "47px 0px 0px 37px" }}>
                        <h1 className='text-light' >Sign In</h1>
                        <p>(if you already have an account)</p>
                    </div>
                    <div className='row' style={{ padding: "15px 55px 15px 37px" }}>
                        <div className='col-lg-12'>
                            {errMsg && <Alert severity="error" className='mb-2 font-weight-bold' > {errMsg} </Alert>}
                            <form onSubmit={loginHandler}>
                                <div className='mb-3'>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fa fa-envelope"></i></span>
                                        </div>
                                        <input type="email" className="form-control" name="loginEmail" value={email} onChange={({ target }) => setEmail(target.value)} maxLength="200" placeholder="Enter Email" />
                                    </div>
                                    {errObj && <span style={{ color: "red" }}> {errObj.email} </span>}
                                </div>
                                <div className='mb-3'>
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fa fa-lock"></i></span>
                                        </div>
                                        <input type="password" className="form-control" name="loginPassword" value={password} onChange={({ target }) => setPassword(target.value)} maxLength="200" placeholder="Enter Password" />
                                    </div>
                                    {errObj && <span style={{ color: "red" }}> {errObj.pwd} </span>}
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <input type="submit" className="btn mt-2 btn-dark text-light" value="Sign In" />
                                </div>
                            </form>
                        </div>
                        <div className='col-lg-12 mt-3'>
                            <div className="text-center" style={{ marginBottom: "10px" }}>
                                <Link to="/forgetPassword" className="font-weight-bold" style={{ fontSize: "17px", textDecoration: "none", color: "#00FFFF" }}>Forgot
                                    Password?</Link>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="text-center">
                                <div>Not Registered Yet? </div>
                                <div className="Register_Now">
                                    <Link style={{ textDecoration: "none", cursor: "pointer", color: "#00FFFF", fontSize: "35px" }} to="/register" >Register Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default IBRegistration
