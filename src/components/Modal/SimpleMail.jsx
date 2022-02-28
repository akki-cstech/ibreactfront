import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { ProposalMail } from '../../utils/apis/api';
import Alert from '@mui/material/Alert'

const MODEL_STYLES = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#FFF",
    padding: "50px",
    zIndex: 1000,
    borderRadius: "4px",
    width: "450px",
    border: "1px solid #eee",
};

const OVERLAY_STYLE = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,.7)",
    zIndex: 1000,
};

const SimpleMail = ({ open, onClose, link }) => {
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [msg, setMsg] = useState('')
    const [alertMsg, setAlertMsg] = useState(null)
    const [successMsg, setSuccessMsg] = useState(null)

    if (!open) return null;

    const byeAlert = () => setTimeout(() => setAlertMsg(null), 3000);

    const afterSubmit = () => {
        if (email === '' && subject === '' && msg === '') {
            setAlertMsg("Please Fill the Form..!")
            byeAlert()
            return false
        }

        if (email === '') {
            setAlertMsg("Email address is required")
            byeAlert()
            return false
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setAlertMsg("Enter a valid email address..!")
            byeAlert()
            return false
        }

        if (subject === '') {
            setAlertMsg("You have not entered mail Subject..!")
            byeAlert()
            return false
        }

        if (msg === '') {
            setAlertMsg("You have not entered mail Message..!")
            byeAlert()
            return false
        }

        return true
    }

    const submitHandler = async e => {
        e.preventDefault()
        if (!afterSubmit()) {
            return
        }

        const {message} = await ProposalMail({email, subject, msg, url: {proposal: `${window.location.origin}${link}`, order: `${window.location.origin}/static/ordering`, license: `${window.location.origin}/static/licensing`}})
      
        if(message === 'Proposal mail sent successfully!'){
            setEmail('')
            setMsg('')
            setSubject('')
            setSuccessMsg(message)
            setTimeout(() => {
                setSuccessMsg(null)
                onClose()
            }, 3000)
        }
    }

    return (
        <>
            <div style={OVERLAY_STYLE}></div>
            <div style={MODEL_STYLES}>
                <Button variant="dark" onClick={onClose} style={{ marginLeft: "310px", marginTop: "-10px" }}>X</Button>
                {alertMsg && <Alert className="font-weight-bolder mt-2" severity="error"> {alertMsg} </Alert>}
                {successMsg && <Alert className="font-weight-bolder mt-2" severity="success"> {successMsg} </Alert>}
                <Form onSubmit={submitHandler}>
                    <Form.Group className="mb-3">
                        <Form.Label>To Email</Form.Label>
                        <Form.Control value={email} onChange={({ target }) => setEmail(target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control value={subject} onChange={({ target }) => setSubject(target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows="5" value={msg} onChange={({ target }) => setMsg(target.value)} />
                    </Form.Group>
                    <Button variant="dark" className="btn-block" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    );
};

export default SimpleMail