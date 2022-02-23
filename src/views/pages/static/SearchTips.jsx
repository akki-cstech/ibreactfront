import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Help from '../../../components/common/Help'
import { Link } from 'react-router-dom'

const SearchTips = () => {
    return (
        <Container className="mt-4">
            <Row>
                <Col md={3} sm={3} className="hidden-xs">
                    <Help />
                </Col>
                <Col>
                    <Row>
                        <Col xs={12} className="mt-4 ml-1 d-flex flex-inline">
                            <i style={{ fontSize: "25px", margin: "5px 15px 25px 4px" }} className="fa fa-search"></i> <h3> Search Tips </h3>
                        </Col>
                        <Col xs={12} className="mb-3 text-justify">
                            <h5 style={{ borderBottom: "2px solid", padding: "2px", display: "inline" }}>Quick Search 'Image Categories'</h5>
                            <p className='mt-2'>
                                The way we handle our image groupings is different from what you'll find almost anywhere else, and understanding how to use it effectively can be a real time-saver for you. You can do a Quick Search by clicking on any subject or category listed on the left hand side of every page on our website.
                            </p>
                        </Col>
                        <Col xs={12} className="mb-3 text-justify">
                            <h5 style={{ borderBottom: "2px solid", padding: "2px", display: "inline" }}>Search Using Keywords or Image ID's</h5>
                            <ul className='mt-2' style={{listStyle: "disc", marginLeft: "36px"}}>
                                <li>Enter words in either singular or plural form; both forms will be searched. </li>
                                <li>Try typing the "-ing" form of actions (smiling, as opposed to smile). </li>
                                <li>When you simply enter multiple words, the system will look to match all words. </li>
                                <li>Do not include the number sign (#) with image numbers. </li>
                                <li>Check your misspellings or typos among your keywords </li>
                                <li>Do not use punctuation marks (eg: commas, hyphens, inverted commas, etc.) </li>
                            </ul>
                        </Col>
                        <Col xs={12} className="mb-3 text-justify">
                            <h5 style={{ borderBottom: "2px solid", padding: "2px", display: "inline" }}>Narrow your search results by using Search within results</h5>
                            <p className='mt-2'>
                                Once you find your initial images, you can refine your keyword search by using the 'Search within results' feature you will see at the top of any image results page.
                            </p>
                            <p className='mt-2'>
                                For instance, if you want a picture of a woman using a laptop, you would start by typing 'Woman and laptop' into the search box. If, in your set of results, you find there are too many shots of man and women in groups working at a laptop, select 'Search within results' option and type '1 person only' and the refined set of results will show images of only one woman using a laptop.
                            </p>
                        </Col>
                        <Col xs={12} className="mb-3 text-justify">
                            <h5 style={{ borderBottom: "2px solid", padding: "2px", display: "inline" }}>Searching Similar Images by Selecting Multiple Keywords </h5>
                            <p className='mt-2'>
                                No matter how you've arrived at a page of thumbnail images, you can always click on any thumbnail to bring up the larger version of that image. This is named as 'Image Details' page. This version contains all the keywords and categories associated with that image. Select checkboxes for the desired keywords and search afresh to see the other similar images in that category.
                            </p>
                        </Col>
                        <Col xs={12} className="mb-3 text-justify">
                            <h5 style={{ borderBottom: "2px solid", padding: "2px", display: "inline" }}>Searching by Advanced Search Options</h5>
                            <p className='mt-2'>
                                In the Advanced search options we have extended options to narrow down your search in terms of variable like - Orientation, Image Attributes, and People in an image.
                            </p>
                        </Col>
                        <Col xs={12} className="mb-3 text-justify">
                            <h5 style={{ borderBottom: "2px solid", padding: "2px", display: "inline" }}>Free Research</h5>
                            <p className='mt-2'>
                                If you are unable to find the EXACT image you are looking for then just fill up the <Link className='text-info'>Free Research form</Link> and our skilled researchers will search our collection of images and quickly create a selection just for you.
                            </p>
                        </Col>
                    </Row>

                </Col>
            </Row>
        </Container>
    )
}

export default SearchTips