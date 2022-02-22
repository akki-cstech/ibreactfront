import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Help = () => {
    return (
        <div>
            <ListGroup className='My_AccountFields'>
                <ListGroup.Item action >
                   <h4> Help Topics </h4>
                </ListGroup.Item>
                <ListGroup.Item action >
                    <i className="fa fa-angle-double-right"></i>{' '}
                    Pricing
                </ListGroup.Item>
                <ListGroup.Item action >
                    <i className="fa fa-angle-double-right"></i>{' '}
                    Search Tips
                </ListGroup.Item>
                <ListGroup.Item action >
                    <i className="fa fa-angle-double-right"></i>{' '}
                    Ordering
                </ListGroup.Item>
                <ListGroup.Item action >
                    <i className="fa fa-angle-double-right"></i>{' '}
                    Downloading
                </ListGroup.Item>
                <ListGroup.Item action >
                    <i className="fa fa-angle-double-right"></i>{' '}
                    Licensing
                </ListGroup.Item>
                <ListGroup.Item action >
                    <i className="fa fa-angle-double-right"></i>{' '}
                    Wishlist
                </ListGroup.Item>
                <ListGroup.Item action >
                    <i className="fa fa-angle-double-right"></i>{' '}
                    My Account
                </ListGroup.Item>
                <ListGroup.Item action >
                    <i className="fa fa-angle-double-right"></i>{' '}
                    Technical
                </ListGroup.Item>
                <ListGroup.Item action >
                    <i className="fa fa-angle-double-right"></i>{' '}
                    Contact Us
                </ListGroup.Item> <ListGroup.Item action >
                    <i className="fa fa-angle-double-right"></i>{' '}
                    Glossary
                </ListGroup.Item> <ListGroup.Item action >
                    <i className="fa fa-angle-double-right"></i>{' '}
                    Be a Contributor
                </ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default Help