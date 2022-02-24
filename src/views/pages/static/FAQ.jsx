import React from 'react'
import { Container, Row, Col, Accordion } from 'react-bootstrap'
import Help from '../../../components/common/Help'
import { Link } from 'react-router-dom'
// import '../../../stylesheet/Faq.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const FAQ = () => {
    return (
        <Container className="mt-4 pb-4">
            <Row>
                <Col sm={3}>
                    <Help />
                </Col>
                <Col>
                    <Row>
                        <Col xs={12} className="bg-light" style={{ fontSize: "28px", position: "relative", top: "8px" }}>
                            <i className="fa fa-question-circle"></i> FAQ
                        </Col>
                        <Col className="mt-4">
                            <Accordion>
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Q: Why can't I find the images I'm searching for?</Accordion.Header>
                                    <Accordion.Body>
                                        Read our <Link to="/static/searchtips">Search Tips</Link> for information on how to
                                        quickly find the images you
                                        need. We can also help you find the perfect and most relevant images you need.
                                        We have a professionally
                                        trained staff of researchers who know the collections like the back of their
                                        hands. You will receive an
                                        email with a direct link to the <Link to="/static/lightbox">Lightbox</Link> we created.
                                        <br />You need to Login
                                        or Register to avail this <Link to="/static/freeresearch">Free Research</Link>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Q: Can I search without being registered?</Accordion.Header>
                                    <Accordion.Body>
                                        Yes. You can search and download free comping images without registering on our
                                        site. The image comps
                                        you download will have a watermark on them. But to save images to your Lightbox
                                        for later access, you'll
                                        need to <Link to="/ibregistration">Login</Link> or <Link to="/register">Register</Link>.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Q: How do I download free comping images?</Accordion.Header>
                                    <Accordion.Body>
                                        From the Search Results, Lightbox or Image Details page, Right Click &amp; Select 'Save Picture As'.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Q: Can I search without being registered?</Accordion.Header>
                                    <Accordion.Body>
                                        Yes. You can search and download free comping images without registering on our
                                        site. The image comps
                                        you download will have a watermark on them. But to save images to your Lightbox
                                        for later access, you'll
                                        need to <Link to="/ibregistration">Login</Link> or <Link to="/register">Register</Link>.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>Q: How do I get detailed information about an image?</Accordion.Header>
                                    <Accordion.Body>
                                        To view in-depth information about an image, go to the Image Details page by clicking any thumbnail image on the Search Results page or in your Lightbox. The Image Details page provides complete information about an image, such as keywords associated with that image, file sizes and additional information.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5">
                                    <Accordion.Header>Q: How can I search the images using Image ID?</Accordion.Header>
                                    <Accordion.Body>
                                        You can search using the Image ID that appears in the Image Details page or below the thumbnail images displayed on the Search Results page. Just enter this Image ID in the Search box and press 'Search' button.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="6">
                                    <Accordion.Header>Q: Do I need to register to purchase?</Accordion.Header>
                                    <Accordion.Body>
                                        Yes, you need to register. <Link to="/register">Click here </Link>for
                                        detailed registration information. If you are not yet registered, you will be
                                        prompted to complete your
                                        mailing and billing profile as part of the image purchasing process.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="7">
                                    <Accordion.Header>Q: How safe is it to use my credit card on your site?</Accordion.Header>
                                    <Accordion.Body>
                                        We use the latest encryption technology to help ensure that your information is
                                        kept safe while in
                                        transit. You can read about security in our <Link to="/static/privacypolicy">Privacy
                                            Policy </Link> . Images
                                        Bazaar is a secure e-commerce site. Your payment information will be routed,
                                        processed and secured
                                        through Payseal, the payment gateway provided by ICICI Bank.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="8">
                                    <Accordion.Header>Q: How do I determine image prices?</Accordion.Header>
                                    <Accordion.Body>
                                        You can find the details of our <Link to="/static/pricing">Help -
                                            Pricing</Link>
                                        section. <br />When you're
                                        ready to purchase the image:<br />
                                        On your Search Results page or the Image Details page, click the 'shopping cart'
                                        icon underneath the
                                        thumbnail to add the image to your order.<br />
                                        Select the Non-Exclusive Price depending upon your requirement by checking the
                                        Radio button on the left.
                                        And click on the 'Add to Cart' button.<br />
                                        You have the option to 'Checkout' OR 'Continue Shopping' at this stage.<br />
                                        To make payment, you will get these options : <br />

                                        <ul>
                                            <li>Pay using Credit Card</li>
                                            <li>Drop Cheque/Demand Draft in favour of MASH AUDIO VISUALS PVT. LTD. at
                                                any ICICI Bank Outlet in
                                                your city (account no. 015405002335)</li>
                                            <li>Transfer funds online from your bank account to ICICI BANK Account No.
                                                015405002335 of MASH
                                                AUDIO VISUALS PVT. LTD.</li>
                                            <li> Send Cheque/Demand Draft in favour of MASH AUDIO VISUALS PVT. LTD.
                                                Payable at NEW DELHI to the
                                                address given below :</li>
                                        </ul>

                                        <strong>Mash Audio Visuals Pvt. Ltd.</strong><br />
                                        505, Aggarwal Prestige Mall, <br />
                                        Plot No. 2, Road No. 44, <br />
                                        Pitampura, New Delhi-110034
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="9">
                                    <Accordion.Header>Q: Why is the file size I have downloaded smaller than the file size mentioned on the Image Detail page?</Accordion.Header>
                                    <Accordion.Body>
                                        The file you download will be smaller than the file you purchased! Files are compressed for quick and easy download. As is standard practice in the industry, we provide you with "JPEG" files (identifiable by the ".jpg" extension added to the file name), which by definition are compressed to facilitate transmission and therefore are not as large as the original file. When you load the file into a photo editor such as PhotoShop, it will automatically expand to full size.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="10">
                                    <Accordion.Header>Q: How can I download an image I've previously purchased and will I be charged again for re-downloading it?</Accordion.Header>
                                    <Accordion.Body>
                                        We send you a link to download the Image(s) you have purchased at your email
                                        address. But this link
                                        expires in 15 days. To download images from a previous purchase, please send us
                                        a request at <a href="mailto:orders@imagesbazaar.com">orders@imagesbazaar.com</a> for the
                                        same and we will do the
                                        needful. You will not be charged again.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="11">
                                    <Accordion.Header>Q: How can I print out a past sales order?</Accordion.Header>
                                    <Accordion.Body>
                                        To print an Invoice for any past sales order, roll over 'My Account' in the top navigation bar. Then click the Order Reference number of the previous orders you'd like to print. When the order pops up, use your browser's 'Print' icon to print out the screen.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="12">
                                    <Accordion.Header>Q: How do I save an image to my computer?</Accordion.Header>
                                    <Accordion.Body>
                                        Please read our <Link to="/static/downloading">Download Tips</Link> in the Help section
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="13">
                                    <Accordion.Header>Q: What's the difference between RGB and CMYK formats?</Accordion.Header>
                                    <Accordion.Body>
                                        When an RGB image is converted to CMYK, several parameters must be taken into consideration, including paper stock, four-color film output device, layout software programs used, types of inks used and special effects intended by you, the designer. An RGB format provides you with the most flexible format. That's why we deliver images in Adobe RGB colour space.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="14">
                                    <Accordion.Header>Q: How large can I print your digital images?</Accordion.Header>
                                    <Accordion.Body>
                                        As a general rule of thumb, our images can safely be enlarged to 125% of their
                                        original image size
                                        without affecting the quality - our images are regularly used on billboards.
                                        Since it's critical that
                                        you know what resolution you need for the output device, we recommend that you
                                        consult directly with
                                        your printer or service bureau to find out the specific capabilities of the
                                        device that will be used.
                                        And, of course, you can always <Link to="/contactus">Contact Us</Link> for more
                                        details.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="15">
                                    <Accordion.Header>Q: How do I retain the original quality of an image when I want to enlarge it?</Accordion.Header>
                                    <Accordion.Body>

                                        <p>All the images are delivered in 'jpeg' format. Firstly, you must save an image
                                            downloaded from the
                                            website in 'tiff' format before making any adjustments or manipulations. This is
                                            because every time you
                                            resave a 'jpeg' image, it will lead to a loss in the quality of that image.
                                            Secondly, for the best
                                            quality, remember this general guideline: The image resolution (ppi) should
                                            remain equal to twice the
                                            screen frequency (lpi). You have options, however, to adjust the screen
                                            frequency, re-sample the image
                                            at a higher resolution, or lower the ppi-to-lpi ratio. For more details, read
                                            the following tips for
                                            enlarging images: </p>
                                        <p>Tips for enlarging images </p>
                                        <ul>
                                            <li>The Hi-res images on Imagesbazaar.com have been optimized for a final
                                                print
                                                size of 5"x7.5",
                                                9"x13.5", 12"x18", 16"x24" and 20"x30", using a screen frequency of 150
                                                lpi.
                                                You can, however, print
                                                the images at a larger size. For the best quality, remember the general
                                                guideline of keeping the
                                                image resolution (ppi) equal to twice the screen frequency (lpi).</li>
                                            <li>Use a lower screen frequency.</li>
                                            <li>If you require only a low screen frequency, you can enlarge the image
                                                and
                                                still maintain the 2:1
                                                ratio of ppi to lpi. Lower screen frequencies will allow you to enlarge
                                                the
                                                images even further.
                                            </li>
                                            <li>Re-sample the image to a higher resolution.</li>
                                            <li>Many image-editing programs will allow you to re-sample an image to a
                                                higher
                                                resolution. Re-sampling
                                                will enable you to maintain the 2:1 ratio of ppi to lpi. Software
                                                programs
                                                can add data to your
                                                image by interpolating the colors of adjacent pixels in the image. This
                                                can
                                                cause the image to
                                                appear somewhat out of focus or blurry. To compensate for this, you may
                                                want
                                                to apply a sharpening
                                                filter to the image to eliminate some of the blurring. We recommend that
                                                you
                                                experiment with this
                                                technique to determine if the results will be satisfactory for your
                                                needs.
                                            </li>
                                            <li>Use a lower ppi-to-lpi ratio, such as 1.5 to 1.</li>
                                            <li>The recommendation of the image resolution (ppi) equaling twice the
                                                screen
                                                frequency (lpi) is to
                                                ensure the highest quality. You can go below this ratio with relatively
                                                little noticeable difference
                                                in quality. You should never go below a 1:1 ratio of ppi to lpi. Be sure
                                                to
                                                experiment with
                                                different ratios to determine which works best for your requirements.
                                            </li>
                                        </ul>

                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="16">
                                    <Accordion.Header>Q: Downloaded a high-resolution image, but it's opening up at 72dpi. What happened?</Accordion.Header>
                                    <Accordion.Body>
                                        Depending on how the image was saved, it may open at a screen resolution of 72 dpi. This doesn't necessarily mean you downloaded a low-resolution image by mistake. Check the dimensions. Change the dpi of the image to 300 without re-sampling the image. If the dimensions come down to 5"x7.5"(10MB image), 9"x13.5"(31.2MB image) and 12"x18"(55.6MB image) when you change the dpi to 300, then you know you have the correct image. Simply re-save the image at 300 dpi.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="17">
                                    <Accordion.Header>Q: How can I get rights to the images I purchase?</Accordion.Header>
                                    <Accordion.Body>
                                        All images on our site are available for the following purchases : <br />

                                        Non-Exclusive Price, which is determined by 'file size' for buying an image
                                        under <Link to="/static/mashnonexeclusiverightagreement"> MASH Non-Exclusive Rights
                                            Agreement</Link>. <br />

                                        What are Non-Exclusive Rights? <br />
                                        Our images can be sold multiple times to different clients. Non-Exclusive Rights
                                        means that other people
                                        can buy the image you have chosen. <br />
                                        Note : Nevertheless, you can't redistribute or resell images after taking
                                        NON-EXCLUSIVE RIGHTS. <br />

                                        <Link to="/static/mashnonexeclusiverightagreement">Click Here </Link> to view the
                                        detailed explanation of
                                        Non-Exclusive Rights Agreement.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="18">
                                    <Accordion.Header>Q: What is a model release and what is its importance?</Accordion.Header>
                                    <Accordion.Body>
                                        <p>A model release is a written agreement between the model and the photographer
                                            where the model has granted
                                            the photographer permission to use the photographs commercially. Model Release
                                            generally permits the use
                                            of the image(s) for all purposes, with exceptions for controversial, sensitive
                                            or defamatory uses. <br />
                                            When you enlarge a thumbnail image by clicking on it, the Model Release Status
                                            information is displayed
                                            below each stock image </p>

                                        <p>When is a signed model release needed? <br />Images, which depict people, may
                                            require a signed model
                                            release. It is up to you to decide whether the license usage will require a
                                            release. You should be aware
                                            that when a model release is available additional considerations may mean that
                                            the model release in
                                            itself is not sufficient, e.g. if the image is to be used for sensitive issues.
                                        </p>

                                        <div>What situations would make a signed model release void? <br />Some image uses
                                            would
                                            make a signed release
                                            void. Following is for guidance only and is not a full list :
                                            <ul>
                                                <li>Defamation of Character - embellishment, distortion or fictionalization
                                                    of a person's character.
                                                </li>
                                                <li>Sensationalized use - a use intended to distort the "truth" of an image.
                                                </li>
                                                <li>Sensitive Issues </li>
                                                <li>Alcohol</li>
                                                <li>Gambling</li>
                                                <li>Guns and weapons</li>
                                                <li>Medical and mental health issues</li>
                                                <li>Negative financial portrayal</li>
                                                <li>Political fanaticism</li>
                                                <li>Religious fanaticism</li>
                                                <li>Sexual and sexual health issues</li>
                                                <li>Tobacco</li>Always Remember!
                                            </ul>
                                        </div>
                                        <p>No matter whom you are buying stock images from, us or anyone else, there is
                                            absolutely no way we can
                                            overemphasize the significance of these model release issues - if those images
                                            have recognizable people
                                            in them. </p>
                                        <p>MAKE SURE that the photo agency you are dealing with has signed and "perfected"
                                            model releases and that
                                            they are available. Do NOT make the mistake of saying to yourself that, well, if
                                            there's a problem, it's
                                            the photo agency's problem, not mine. It is your problem and it can very rapidly
                                            become a huge one if
                                            you're not careful. </p>
                                        <p>See our <Link to="/static/licensing">Help - Licensing</Link> page for more on how
                                            our images are licensed.
                                        </p>
                                        <p>If you are unsure whether a Model Release will be necessary please <Link to="/contactus">contact
                                            us</Link> . </p>
                                        <p>* Images Bazaar does not offer legal advice and it is the responsibility of the
                                            licensee of an image to
                                            determine whether a release is necessary. You are advised to seek legal advice
                                            before relying on any
                                            information contained in this website.</p>

                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default FAQ