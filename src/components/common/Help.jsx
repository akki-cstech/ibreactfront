import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Help = () => {
    return (
        <div>
            <ListGroup className='My_AccountFields bg-light'>
                <ListGroup.Item action >
                    <h4> Help Topics </h4>
                </ListGroup.Item>
                <ListGroup.Item action >
                    <Link to="/static/pricing">
                        <i className="fa fa-angle-double-right"></i>{' '}
                        Pricing
                    </Link>
                </ListGroup.Item>
                <ListGroup.Item action >
                    <Link to="/static/searchtips">
                        <i className="fa fa-angle-double-right"></i>{' '}
                        Search Tips
                    </Link>
                </ListGroup.Item>
                <ListGroup.Item action >
                    <Link to="/static/ordering">
                        <i className="fa fa-angle-double-right"></i>{' '}
                        Ordering
                    </Link>
                </ListGroup.Item>
                <ListGroup.Item action >
                    <Link to="/static/downloading">
                        <i className="fa fa-angle-double-right"></i>{' '}
                        Downloading
                    </Link>
                </ListGroup.Item>
                <ListGroup.Item action >
                    <Link to="/static/licensing">
                        <i className="fa fa-angle-double-right"></i>{' '}
                        Licensing
                    </Link>
                </ListGroup.Item>
                <ListGroup.Item action >
                    <Link to="/static/lightbox">
                        <i className="fa fa-angle-double-right"></i>{' '}
                        Wishlist
                    </Link>
                </ListGroup.Item>
                <ListGroup.Item action >
                    <Link to="/static/myaccountshelp">
                        <i className="fa fa-angle-double-right"></i>{' '}
                        My Account
                    </Link>
                </ListGroup.Item>
                <ListGroup.Item action >
                    <Link to="/static/technical">
                        <i className="fa fa-angle-double-right"></i>{' '}
                        Technical
                    </Link>
                </ListGroup.Item>
                <ListGroup.Item action >
                    <Link to="/static/contactus">
                        <i className="fa fa-angle-double-right"></i>{' '}
                        Contact Us
                    </Link>
                </ListGroup.Item>
                <ListGroup.Item action >
                    <Link to="/static/glossary">
                        <i className="fa fa-angle-double-right"></i>{' '}
                        Glossary
                    </Link>
                </ListGroup.Item>
                <ListGroup.Item action >
                    <Link to="/static/contributor">
                        <i className="fa fa-angle-double-right"></i>{' '}
                        Be a Contributor
                    </Link>
                </ListGroup.Item>
            </ListGroup>
        </div >
    )
}

export default Help