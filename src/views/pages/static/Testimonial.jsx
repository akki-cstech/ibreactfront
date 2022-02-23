import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Help from '../../../components/common/Help'

const Testimonial = () => {
    return (
        <Container>
            <Row>
                <Col sm={3}>
                    <Help />
                </Col>
                <Col>
                    <Row>
                        <Col xs={12} className="mt-4 d-flex ml-1 bg-light">
                            <i style={{ fontSize: "25px", margin: "0px 15px 25px 4px", position: "relative", top: "12px" }} className="fa fa-user-plus"></i> <h3 style={{ position: "relative", top: "8px" }}> Testimonials </h3>
                        </Col>
                        <Col xs={12} className="mt-4 mb-4 border-bottom">
                            <Row>
                                <Col xs={2}> <img style={{ width: "auto", height: "auto" }} src="https://www.imagesbazaar.com/images/testimonial/Junaid.jpg" alt="" /></Col>
                                <Col className="mr-4 pr-4 pb-4">
                                    <h3>Outstanding experience in customer satisfaction.</h3>
                                    <p className="text-justify text-secondary">I was planning to have a photo shoot for our website for my upcoming brand where
                                        I-
                                        had approached photographers for the same. The budgets given by them were way
                                        beyond
                                        the budgets I had for executing the same. Time was running out and I thought why
                                        not
                                        check online so visited IB website and checked if this can save time and money
                                        and I
                                        can complete the same in the deadline..to be very frank never expected that this
                                        will happen in time and I thought I have to keep following up like any other Job
                                        which I had aligned… But believe it guys it was just a click ,I recived a quote
                                        and
                                        I did the payment and recived the images within 20 min this was Unbelievable
                                        experience in this world where people find excuses for timely delivery and this
                                        had
                                        happened to me where IB team never gave time to me to come back to them on
                                        anything
                                        …IB team Keep up the for the good work!!!</p>
                                    <h4 className="mt-2"> - Junaid Ahmed, Marketing Manager, Digicomp Complete Solutions Limited</h4>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} className="mt-4 mb-4 border-bottom">
                            <Row>
                                <Col xs={2}> <img style={{ width: "auto", height: "auto" }} src="https://www.imagesbazaar.com/images/testimonial/VikasMishra.jpg" alt="" /></Col>
                                <Col className="mr-4 pr-4 pb-4">
                                    <h3>Pleasure dealing with ImagesBazaar</h3>
                                    <p className="text-justify text-secondary">Thanks to ImagesBazaar and his team to provide such a wonderful service. My
                                        experience with ImagesBazaar is different from others, you help me out to find
                                        what
                                        I was looking for. In my views ImagesBazaar is a fabulous service provider. Even
                                        my
                                        friends and colleagues, working in different advertising agencies, suggested me
                                        about ImagesBazaar. I am really thankful and very happy by the effort made by
                                        ImagesBazaar.</p>
                                    <h4 className="mt-2"> - Vikas Mishra, Films Rajendraa</h4>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} className="mt-4 mb-4 border-bottom">
                            <Row>
                                <Col xs={2}><img style={{ width: "auto", height: "auto" }} src="https://www.imagesbazaar.com/images/testimonial/Najeeb-photo.jpg" alt="" /></Col>
                                <Col className="mr-4 pr-4 pb-4">
                                    <h3>ImagesBazaar.... Great concept!</h3>
                                    <p className="text-justify text-secondary">I am really pleased to place on record the great experience of sharing your site.
                                        Our
                                        team joins me in conveying our congratulations and gratitude for the great work
                                        you
                                        are offering to the other workforce and wish you all the very best.</p>
                                    <h4 className="mt-2"> - Ar. C Najeeb, Owner, Najeeb Associates</h4>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} className="mt-4 mb-4 border-bottom">
                            <Row>
                                <Col xs={2}> <img style={{ width: "auto", height: "auto" }} src="https://www.imagesbazaar.com/images/testimonial/satender.jpg" alt="" /></Col>
                                <Col className="mr-4 pr-4 pb-4">
                                    <h3>I liked the searching process which is very simple</h3>
                                    <p className="text-justify text-secondary">I was trying to search for 3-4 days for these kind of images and I found perfect
                                        pictures for my layout at ImagesBazaar.com. I Found absolutely right pictures. I
                                        liked the searching process which is very simple (View similar images is very
                                        good
                                        option). Communication &amp; support is very appreciated. I found a very responsible
                                        team at ImagesBazaar.com. Thank You!</p>
                                    <h4 className="mt-2"> - Satender Kumar, Graphic Designer, Print Well Graphics</h4>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} className="mt-4 mb-4 border-bottom">
                            <Row>
                                <Col xs={2}><img style={{ width: "auto", height: "auto" }} src="https://www.imagesbazaar.com/images/testimonial/FaisalR.jpg" alt="" /></Col>
                                <Col className="mr-4 pr-4 pb-4">
                                    <h3>My desired images</h3>
                                    <p className="text-justify text-secondary">For my recent communication, I was thinking for few picture with out of box
                                        expressions. I was tensed and discussed with few art directors and talked with
                                        few
                                        models also but I was not convinced. Finally my search ended at
                                        ImagesBazaar.com.
                                        Found absolutely right pictures. Awesome! Simple downloading process &amp; quick
                                        access
                                        to images helped me much. The entire service is really great. Thanks a lot for
                                        such
                                        a vast collection of images and helping me finding my desired images!</p>
                                    <h4 className="mt-2"> - Khandker Fazle Rabbi, Chief of MIS, Pran-RFL Group</h4>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} className="mt-4 mb-4 border-bottom">
                            <Row>
                                <Col xs={2}><img style={{ width: "auto", height: "auto" }} src="https://www.imagesbazaar.com/images/testimonial/UtpaalKamdar.jpg" alt="" /></Col>
                                <Col className="mr-4 pr-4 pb-4">
                                    <h3>ImagesBazaar'. Simple, Quick and Images that touches the chord.</h3>
                                    <p className="text-justify text-secondary">I just picked the image in instant. It conveyed the message that I was looking
                                        for.
                                        As soon as the transaction was complete, my cell phone was ringing and I was
                                        assisted with any support I might need related to the image I picked. What more
                                        one
                                        could ask for, you get quality product with fabulous instant support. It is
                                        because
                                        of ImagesBazaar that one can made their website look more beautiful,
                                        professional
                                        and Indian. Best Wishes.</p>
                                    <h4 className="mt-2"> - Utpaal Kamdar, Owner, Investinoptions.in</h4>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} className="mt-4 mb-4 border-bottom">
                            <Row>
                                <Col xs={2}> <img style={{ width: "auto", height: "auto" }} src="https://www.imagesbazaar.com/images/testimonial/Shanmuha.jpg" alt="" /></Col>
                                <Col className="mr-4 pr-4 pb-4">
                                    <h3>Very simple and user friendly!</h3>
                                    <p className="text-justify text-secondary">I was amazed by the Quantity and Quality of pictures available at
                                        ImagesBazaar.com.
                                        The website Navigation and the online order process is very simple and user
                                        friendly. No doubt I will recommend to my friends.</p>
                                    <h4 className="mt-2"> - Shanmuharajan, CEO, eDOTS Web Technology</h4>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} className="mt-4 mb-4 border-bottom">
                            <Row>
                                <Col xs={2}> <img style={{ width: "auto", height: "auto" }} src="https://www.imagesbazaar.com/images/testimonial/paritosh.jpg" alt="" /></Col>
                                <Col className="mr-4 pr-4 pb-4">
                                    <h3>Best fit for my designn</h3>
                                    <p className="text-justify text-secondary">My designer suggested ImagesBazaar to me because we needed Indian faces for our
                                        client, and as always ImagesBazaar has the perfect image and it's the best fit
                                        for
                                        my design. The website is completely user friendly as well as a very good and
                                        quick
                                        checkout process. Even the customer support has been excellent. It's been a
                                        delight
                                        working with ImagesBazaar!
                                    </p>
                                    <h4 className="mt-2"> - Paritosh Ajmera, Director, FoxyMoron</h4>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} className="mt-4 mb-4 border-bottom">
                            <Row>
                                <Col xs={2}><img style={{ width: "auto", height: "auto" }} src="https://www.imagesbazaar.com/images/testimonial/Narasimham.jpg" alt="" /></Col>
                                <Col className="mr-4 pr-4 pb-4">
                                    <h3>You have a great system in place!</h3>
                                    <p className="text-justify text-secondary">I am really happy with your service and was able to find the images that I
                                        wanted. As
                                        soon as I purchased it online, I got a call from your support staff to make sure
                                        that I was able to download the images correctly. I think you have a great
                                        system in
                                        place. Please keep it up. I will continue to buy images from you. Best wishes.
                                    </p>
                                    <h4 className="mt-2"> - Dr. Narasimham Jammi, Director, Jammi Pharmaceuticals</h4>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} className="mt-4 mb-4 border-bottom">
                            <Row>
                                <Col xs={2}> <img style={{ width: "auto", height: "auto" }} src="https://www.imagesbazaar.com/images/testimonial/saichand.jpg" alt="" /></Col>
                                <Col className="mr-4 pr-4 pb-4">
                                    <h3>A great experience at ImagesBazaar</h3>
                                    <p className="text-justify text-secondary">I got the exact Indian image that I am looking for. The support service is very
                                        prompt. It has wide payment options which made my purchase a great experience.!
                                    </p>
                                    <h4 className="mt-2"> - SaiChand Talluri, Asst. Manager Digital Marketing, Vasathi Housing Limited
                                    </h4>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} className="mt-4 mb-4 border-bottom">
                            <Row>
                                <Col xs={2}> <img style={{ width: "auto", height: "auto" }} src="https://www.imagesbazaar.com/images/testimonial/Shivani-De.jpg" alt="" /></Col>
                                <Col className="mr-4 pr-4 pb-4">
                                    <h3>Shots captured depict interesting moods</h3>
                                    <p className="text-justify text-secondary">We were looking for images with some sort of story, with Indian faces for our
                                        product
                                        and Images Bazaar suited our requirement perfectly. Not only the images are of
                                        great
                                        clarity, but shots captured depict interesting moods. Not to mention the huge
                                        variety to choose from. Registration was so easy, ordering and delivery
                                        procedures
                                        so prompt. Best part is the service. I received confirmation mail instantly and
                                        also
                                        a follow-up and payment receipt call. The whole procedure is so hassle free... I
                                        am
                                        impressed!
                                    </p>
                                    <h4 className="mt-2"> - Shivani De, Senior Manager Sales &amp; Marketing, Silver Crest Clothing Pvt.Ltd.
                                    </h4>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} className="mt-4 mb-4 border-bottom">
                            <Row>
                                <Col xs={2}><img style={{ width: "auto", height: "auto" }} src="https://www.imagesbazaar.com/images/testimonial/Subhash-Lagali.jpg" alt="" /></Col>
                                <Col className="mr-4 pr-4 pb-4">
                                    <h3>Not only your product is amazing but also your services.</h3>
                                    <p className="text-justify text-secondary">Being an advertising agency we always require good Indian images which will suite
                                        our
                                        requirements. And we always found the solutions at Images bazaar. The after
                                        sales
                                        service is very prompt and crisp. Congratulations........
                                    </p>
                                    <h4 className="mt-2"> - Subhash Lagali, Director, Giri Media Services Pvt. Ltd.</h4>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} className="mt-4 mb-4 border-bottom">
                            <Row>
                                <Col xs={2}><img style={{ width: "auto", height: "auto" }} src="https://www.imagesbazaar.com/images/testimonial/Nowshir-Engineer_Director.jpg" alt="" /></Col>
                                <Col className="mr-4 pr-4 pb-4">
                                    <h3>Hats off to the team at ImagesBazaar!</h3>
                                    <p className="text-justify text-secondary">I was amazed to the see the ease and usability of the website to purchase an
                                        image
                                        for our campaign. The way the site is mapped is excellent and the entire process
                                        of
                                        creating my account to receiving the downloaded images was seamlessly done in 3
                                        minutes. Also the service of a call back to verify my purchase was excellent
                                        customer service!!! Well done.
                                    </p>
                                    <h4 className="mt-2"> - Nowshir Engineer, Managing Director, EMDI Institute of Media &amp; Communication
                                    </h4>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} className="mt-4 mb-4 border-bottom">
                            <Row>
                                <Col xs={2}> <img style={{ width: "auto", height: "auto" }} src="https://www.imagesbazaar.com/images/testimonial/mouneet.jpg" alt="" /></Col>
                                <Col className="mr-4 pr-4 pb-4">
                                    <h3>The collection of photographs is amazing!</h3>
                                    <p className="text-justify text-secondary">It was indeed a delight transacting on ImagesBazaar. The website is very
                                        user-friendly. The collection of photographs is amazing with a wide range of
                                        options
                                        for so many categories. Looking forward to using ImagesBazaar's services for our
                                        future requirements too.
                                    </p>
                                    <h4 className="mt-2"> -Mouneet Mehta, Head-Web &amp; Technology divisions, Life School</h4>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} className="mt-4 mb-4 border-bottom">
                            <Row>
                                <Col xs={2}> <img style={{ width: "auto", height: "auto" }} src="https://www.imagesbazaar.com/images/testimonial/Nagendran.jpg" alt="" /></Col>
                                <Col className="mr-4 pr-4 pb-4">
                                    <h3>Just a click make me comfortable.</h3>
                                    <p className="text-justify text-secondary">In my experience, "The most common trouble with advertising is that it tries too
                                        hard
                                        to impress people." But ImagesBazaar makes our work easier and comfortable as
                                        images
                                        that people can relate to speaks louder than words. We Appreciate the whole
                                        Team.
                                        All the Best!
                                    </p>
                                    <h4 className="mt-2"> - Nagendran.D.R, System Admin, Adinn Advertisements</h4>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} className="mt-4 mb-4 border-bottom">
                            <Row>
                                <Col xs={2}> <img style={{ width: "auto", height: "auto" }} src="https://www.imagesbazaar.com/images/testimonial/Shanmugam.jpg" alt="" /></Col>
                                <Col className="mr-4 pr-4 pb-4">
                                    <h3>Getting the right images at ImagesBazaar just gets easier.</h3>
                                    <p className="text-justify text-secondary">
                                        In the advertising industry, concept photo is important. In our tight schedule
                                        photo
                                        searching becomes very tedious and nerve wrecking sometimes. But ImagesBazaar
                                        helps
                                        to source the right pictures in different categories. For the last 4 years, I
                                        have
                                        been regularly referring and using ImagesBazaar for all my images. Team
                                        ImagesBazaar
                                        is very prompt and swift in the response and their level of service is beyond
                                        comparison. As a sr. visualiser, I am extremely satisfied with the service
                                        provided
                                        by Images Bazaar. Congrats and keep up the good work!
                                    </p>
                                    <h4 className="mt-2"> - Shanmugam.C, Sr. Visualiser, Calai campaigns Pvt. Ltd.</h4>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} className="mt-4 mb-4 border-bottom">
                            <Row>
                                <Col xs={2}> <img style={{ width: "auto", height: "auto" }} src="https://www.imagesbazaar.com/images/testimonial/Atit-Pic.jpg" alt="" /></Col>
                                <Col className="mr-4 pr-4 pb-4">
                                    <h3>A true global leader.</h3>
                                    <p className="text-justify text-secondary">
                                        Right from the start, Images Bazaar impressed us with their wonderful collection
                                        and
                                        quality of images. By partnering with Images Bazaar, we have been able to
                                        consistently deliver high quality and timely jobs. From their state of the art
                                        E-Commerce system to their helpful, knowledgeable, friendly customer service
                                        staff,
                                        our experience with Images Bazaar confirms that we've partnered with a true
                                        global
                                        leader of the commercial images industry.
                                    </p>
                                    <h4 className="mt-2"> - Atit Godiwala, Marketing Manager, Sreemangal Projects P. Ltd.</h4>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} className="mt-4 mb-4 border-bottom">
                            <Row>
                                <Col xs={2}> <img style={{ width: "auto", height: "auto" }} src="https://www.imagesbazaar.com/images/testimonial/lovebin.jpg" alt="" /></Col>
                                <Col className="mr-4 pr-4 pb-4">
                                    <h3>Great Images... Great Experience!</h3>
                                    <p className="text-justify text-secondary">
                                        We checked out stock photos from different websites, but none matched the
                                        quality of
                                        IMAGES BAZAAR. I appreciate Images Bazaar for providing images that are indeed
                                        worth
                                        its price. Even in the case of buying the photos, we truly had a hassle free
                                        experience. Keep up the good work. All the best to Images Bazaar!
                                    </p>
                                    <h4 className="mt-2"> - Lovebin, CEO, Kainotomias &amp; Lyseis Pvt Ltd.</h4>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} className="mt-4 mb-4 border-bottom">
                            <Row>
                                <Col xs={2}> <img style={{ width: "auto", height: "auto" }} src="https://www.imagesbazaar.com/images/testimonial/AbhishekMathai.jpg" alt="" /></Col>
                                <Col className="mr-4 pr-4 pb-4">
                                    <h3>Good collection catering to each need</h3>
                                    <p className="text-justify text-secondary">
                                        The service at imagesbazaar.com is excellent. Not only were the pictures
                                        received
                                        before time, the strong follow up ensures that there are no delays and makes it
                                        is a
                                        wonderful experience.
                                    </p>
                                    <h4 className="mt-2"> - Abhishek Mathai, Corporate Communications, Abhijeet Group.</h4>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} className="mt-4 mb-4 border-bottom">
                            <Row>
                                <Col xs={2}> <img style={{ width: "auto", height: "auto" }} src="https://www.imagesbazaar.com/images/testimonial/mohanb.jpg" alt="" /></Col>
                                <Col className="mr-4 pr-4 pb-4">
                                    <h3>Easy navigationtd</h3>
                                    <p className="text-justify text-secondary">
                                        When we think images, ImagesBazaar is the site that we turn to. A very neatly
                                        organised site with easy navigation, ImagesBazaar stands out amongst
                                        competition. We
                                        are thrilled at discovering a site with plenty of Indian images.
                                    </p>
                                    <h4 className="mt-2"> - Mohan B, Partner, River Design Solutions</h4>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} className="mt-4 mb-4 border-bottom">
                            <Row>
                                <Col xs={2}> <img style={{ width: "auto", height: "auto" }} src="https://www.imagesbazaar.com/images/testimonial/mayank.jpg" alt="" /></Col>
                                <Col className="mr-4 pr-4 pb-4">
                                    <h3>Really good Experience</h3>
                                    <p className="text-justify text-secondary">
                                        It was really nice shopping with ImagesBazaar as it has got the largest
                                        collection
                                        of Indian pics compared to any other website. The pics are really nice &amp; it is
                                        very
                                        difficult to select the best ones. Transaction process is also quite fast as
                                        compared to other websites. Again, it was really good experience shopping with
                                        ImagesBazaar.
                                    </p>
                                    <h4 className="mt-2"> - Mayank Awasthi, Web Designer, .</h4>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} className="mt-4 mb-4 border-bottom">
                            <Row>
                                <Col xs={2}><img style={{ width: "auto", height: "auto" }} src="https://www.imagesbazaar.com/images/testimonial/Sourabh.jpg" alt="" /></Col>
                                <Col className="mr-4 pr-4 pb-4">
                                    <h3>Photo shoots will soon become a thing of past</h3>
                                    <p className="text-justify text-secondary">
                                        Being in the Life Sciences sector, our marketing campaigns are very technical in
                                        nature and we had no option but to go for expensive and time consuming photo
                                        shoots
                                        to get images. The shift from planning, shooting and editing images after long
                                        tedious photo shoots will soon become a thing of past for us. And I appreciate
                                        this
                                        change and would like to thank you for the prompt delivery of images and the
                                        Indian
                                        faces which are so difficult to find elsewhere.
                                    </p>
                                    <h4 className="mt-2"> - Sourabh Mathur, Business Head, Probiosys Life Sciences</h4>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="mb-4">
                            <h3>What's your Story?</h3>
                            <p>We are looking forward to know about your experience with
                                ImagesBazaar. Simply email us your thoughts at <a href="mailto:bindu@imagesbazaar.com" className="text-info">bindu@imagesbazaar.com.</a> We would be honored to
                                have your inputs to include with the testimonials of our esteemed clients! Kindly feel free
                                to <Link className="text-info" to="/static/contactus">contact us</Link> for any query.</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Testimonial