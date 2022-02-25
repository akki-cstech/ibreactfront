import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Help from '../../../../components/common/Help'
import 'bootstrap/dist/css/bootstrap.min.css';

const NoExRight = () => {
    return (
        <Container className="mt-4 pb-4">
            <Row>
                <Col sm={3} className="hidden-xs">
                    <Help />
                </Col>
                <Col xs={12} sm={9}>
                    <Row className="justify-content-xs-center">
                        <Col xs={12} className="bg-light mb-4" style={{ fontSize: "28px", position: "relative", top: "8px" }}>
                            <i className="fa fa-lightbulb-o"></i> Mash Non-Exclusive Right License Agreement
                        </Col>
                        <Col xs={12} className="mb-2 mt-2 text-justify">
                            <p>THIS IS A LEGAL AGREEMENT (THE "AGREEMENT") BETWEEN YOU, YOUR COMPANY, LICENSEE, YOUR CLIENT, PURCHASER (IF ANY), AS THE CASE MAY BE (COLLECTIVELY "LICENSEE")</p>
                            <p>AND M/S MASH AUDIO VISUALS PVT. LTD., A COMPANY INCORPORATED UNDER THE COMPANIES ACT, 1956 AND HAVING ITS REGISTERED OFFICE AT 505, Aggarwal Prestige Mall, Plot No. 2, Road No. 44, Pitampura, New Delhi-110034, INDIA, HEREINAFTER REFERRED TO AS "MASH" (WHICH EXPRESSION SHALL MEAN AND INCLUDE ITS SUBSIDIARIES, AFFILIATES, SUCCESSORS, NOMINEES, ADMINISTRATORS AND PERMITTED ASSIGNS).</p>
                            <p>THIS AGREEMENT APPLIES TO ALL THE LICENSES ISSUED VIA THE WEB AND VIA LOCAL SALES REPRESENTATIVES, AND IS APPLICABLE TO ONLINE DELIVERY OF THE LICENSED MATERIAL. BY ORDERING A LICENSE, LICENSEE, DESIGNATED END USER AND PURCHASER, IS CONFIRMING THAT IT HAS CAPACITY TO ENTER INTO A CONTRACT UNDER ITS LOCAL LAWS.</p>
                        </Col>
                        <Col xs={12} className="mb-2 mt-2 text-justify">
                            <h5 style={{ borderBottom: "2px solid", padding: "2px", display: "inline" }}>1. DEFINITIONS. In this Agreement following definitions apply</h5>
                            <p className="mt-2"><strong>1.1 GALLERY DATABASE </strong>means any digital library catalogue of images maintained or accessed via MASH through its website www.imagesbazaar.com which may be divided in any manner.</p>
                            <p><strong>1.2 DISCLOSED AGENT OR PURCHASER </strong>means the entity acquiring the license on behalf of the Designated End User. The Disclosed Agent may be a design firm, freelancer, employee, or any other party contracted by the Designated End User. If the Disclosed Agent is NOT the same as the Designated End User, the Disclosed Agent acts as an agent for the Designated End User, and both the parties are bound by these terms and conditions.</p>
                            <p><strong>1.3 DESIGNATED END USER OR LICENSEE </strong>means the entity acquiring a license hereunder or, if there is a separate purchaser, the entity specifically designated as Licensee during the purchase process and set forth as such in the Invoice. During the purchase process of the Licensed Material, you will be asked to identify that specific "Designated End User" of the Licensed Material. If you are an agent or contractor or representative or designer working on a project for a specific client, it is that client and/or the specific product or service they are promoting who is the "Designated End User" of the image.</p>
                            <p><strong>1.4 LICENSED MATERIAL </strong>means any still image digital files, film or video footage, audio or sound, visual representation generated optically, electronically, digitally or by any other means, including, without limitation any original digital files, or in any other format protected by all the rights, including, without limitation copyright, trademark, patent or other intellectual property rights and proprietary rights which is licensed to Licensee by MASH under the terms and conditions of this Agreement. Any reference in this Agreement to the Licensed Material shall be to each individual item within the Licensed Material and also to the Licensed Material as a whole.</p>
                            <p><strong>1.5 EDITORIAL USE </strong>Non-private, non-commercial use and broad distribution for the purpose of conveying information, facts, or opinion to the general public relating to events that are newsworthy or of public interest.</p>
                            <p><strong>1.6. EDITORIAL LICENSED MATERIAL </strong>Licensed Material to be used for "Editorial Use".</p>
                            <p><strong>1.7 LICENSEE WORK </strong>means an end product or service that has been created by or on behalf of the Licensee using independent skill and effort and that incorporates a Reproduction of the Licensed Material as well as other material.</p>
                            <p><strong>1.8 REPRODUCTION AND REPRODUCE </strong>means any form of copying or publication of the whole or a part of any Licensed Material, via any medium and by whatever means, the distortion, alteration, cropping or manipulation of the whole or any part of the Licensed Material, and the creation of any derivative work from, or that incorporates, the Licensed Material.</p>
                            <p><strong>1.9 INVOICE </strong>means the computer-generated or pre-printed standard form invoice provided by MASH setting out the terms agreed between MASH and the Licensee. The Invoice shall be incorporated into this Agreement and all references to the Agreement shall include the Invoice.</p>
                            <p><strong>1.10 LICENSE FEE </strong>means the amount payable for the Licensed Material on MASH's Website.</p>
                            <p><strong>1.11 RIGHTS AND RESTRICTIONS </strong>means the information available to the Licensee at the time of the Licensed Material selection, either: (i) accompanying the Licensed Material on MASHs' website (including all areas of the purchase process); (ii) in a written quote issued by MASH; or (iii) in the editorial feed (if so delivered), and as might also be reflected in the Invoice. Such restrictions may include, without limitation, the permitted scope of use, duration of license, any territory or other use restrictions applicable to the Licensed Material selected, and the corresponding price for the license of such Licensed Material ("License Fee"). The Rights and Restrictions shall be incorporated into this Agreement and all references to the Agreement shall include the Rights and Restrictions.</p>
                        </Col>
                        <Col xs={12} className="mb-2 mt-2 text-justify">
                            <h5 style={{ borderBottom: "2px solid", padding: "2px", display: "inline" }}>2. GRANT OF RIGHTS AND RESTRICTIONS</h5>
                            <p className="mt-2"><strong>2.1</strong> MASH grants to the Licensee a limited, non-exclusive, non-sub-licensable,
                                non-transferable, temporary, restricted and non-assignable right to reproduce the Licensed Material
                                identified in the Invoice, solely to the extent explicitly stated in this Agreement. The rights granted
                                under the Agreement may be exercised by sub-contractors of the Licensee (including Purchaser), provided
                                that such sub-contractors agree to abide by all the terms and conditions of this Agreement and Terms of
                                Use of the Website. </p>
                            <p><strong>2.2</strong> Use of the Licensed Material is strictly limited to the use, medium, period of time,
                                placement, size of the Licensed Material, territory and any other restrictions specified in the Rights and
                                Restrictions and the Invoice. </p>
                            <p><strong>2.2.1 </strong> MASH grants a license to reproduce or use the Licensed Material (except for
                                images listed under the "Star Collection") for a period of 10 years only in the territory/country in which
                                the license to use the Licensed Material has been acquired by making the payment. The license will
                                automatically terminate, unless terminated earlier, at the end of the license period. If the Licensee
                                wants to use the Licensed Material after a period of 10 years, or want to use the Licensed Material in any
                                other territory/country, the Licensee has to procure a fresh license from MASH and pay the license fee as
                                per the current pricing of the Licensed Material at that time. </p>
                            <p><strong>2.2.2 </strong> Use of the Licensed Material listed under the "Star Collection" is under the
                                following terms and conditions:<br />
                                (i) The pricing of the "Star Collection" is based on the duration and territory of usage of the Licensed
                                Material. Further the usage of the Licensed Material is strictly restricted to the industry selected for
                                the Licensed Material. Any Licensed Material used outside the selected territory, industry or after the
                                time period of usage shall constitute breach of the Agreement and will amount to copyright infringement.
                                For web usage, the Licensed Material can be used worldwide. <br />
                                (ii) The Licensee is not authorized to use the Licensed Material under the "Star Collection" to give a
                                testimonial, endorsement or use the name of the model(s) in any manner without the prior written
                                permission from MASH. </p>
                            <p><strong>2.3 </strong> Pornographic, defamatory, libelous, immoral, obscene, fraudulent or otherwise
                                unlawful use of the Licensed Material is strictly prohibited, whether directly or in context or in
                                juxtaposition with specific subject matter. You further agree not to use the Licensed Material for any
                                sensitive subject matter, as determined by MASH, including, but not limited to, Sex related products and
                                services, sexually transmitted diseases, substance abuse, alcohol, tobacco, AIDS, cancer, mental ailments,
                                homosexual or alternative lifestyle issues, and physical or mental abuse, without advance written consent
                                from MASH. Sensitive subject usage pertains to both commercial and editorial usage. Contact MASH for
                                verification of model releases. Availability of model releases does not grant the right to use the
                                Licensed Material in any sensitive issues mentioned above.</p>
                            <p><strong>2.4 </strong>Unless additional rights are stipulated in the Rights and Restrictions or granted
                                specifically pursuant to a separate License Agreement, Editorial Licensed Material may not be used for,
                                including, but not limited to, any commercial, promotional, endorsement, advertising or merchandising use,
                                as part of billboard, trade show or exhibit display. For clarification, in this Agreement use of Licensed
                                Material in an "editorial" manner means restrictive use relating to events that are newsworthy or of
                                public interest. </p>
                            <p><strong>2.5 </strong>Licensed Material may be cropped, provided that the editorial integrity of
                                the Licensed Material is maintained and not compromised, but shall not, under any circumstances, otherwise
                                be rotated, altered, changed, manipulated and tampered with, either manually or electronically, without
                                MASH's prior written permission. </p>
                            <p><strong>2.6 </strong>Licensed Material shall not be incorporated into a logo, trademark or service mark.
                            </p>
                            <p><strong>2.7 </strong>Licensee may not make the Licensed Material available in any medium in a manner
                                intended to allow or invite persons to download or extract the Licensed Material.</p>
                            <p><strong>2.8 </strong>Licensed Material may not be modified, reconfigured or repurposed for any use in any
                                mobile-directed websites or mobile applications that are specifically created for viewing of the Licensed
                                Material on mobile applications, without obtaining the prior written consent of MASH. </p>
                            <p><strong>2.9 </strong>Licensee do not have the right to keep in possession or store any high-resolution
                                files of the Licensed Material on their server, any digital media, disk or drive whether online or in any
                                other medium from where any third party can have access to the Licensed Material. </p>
                            <p><strong>2.10 </strong>If any Licensed Material featuring a model or property is used in connection with a
                                subject that would be unflattering or controversial to a reasonable person to believe that the model
                                personally uses or endorses a product or service or if the Licensed Material is used along with some
                                descriptive information, including, but not limited to name, educational qualification, age, career
                                related information, Licensee must accompany each such use with a statement that indicates that: (i) the
                                Licensed Material is being used for illustrative purposes only; and (ii) any person depicted in the
                                Licensed Material, if any, is a model. </p>
                            <p><strong>2.11 </strong>Unless otherwise authorized by applicable law or specified in the Rights and
                                Restrictions, Licensee may not, directly or indirectly, reproduce the final product of the Licensed
                                Material in any secondary reproductions, such as compilations, in-context promotions or on file-sharing,
                                social networking websites such as YouTube, Facebook, Myspace, etc. or screen shots. Such reproductions
                                require an additional license and prior written permission from MASH and may be subject to payment of
                                additional license fees.
                            </p>
                            <p><strong>2.12 </strong>Licensed Material shall not be used contrary to any restriction on use that is
                                provided to Licensee prior to or at the time the Licensed Material is delivered to Licensee. Such
                                restrictions may be included in the Rights and Restrictions or in any other written communication from
                                MASH. Any such restriction provided to the Licensee shall be incorporated into and become part of this
                                Agreement. </p>
                            <p><strong>2.13 </strong>Licensed Material may be cropped but shall not, under any circumstances, otherwise
                                be altered, changed or tampered with, either manually or electronically, without MASH express written
                                permission.
                            </p>
                            <p><strong>2.14 </strong>Upon reasonable notice, MASH may inspect any records, accounts and books relating
                                to the Reproduction of any of the Licensed Material to ensure that the Licensed Material is being used in
                                accordance with this Agreement. </p>
                            <p><strong>2.15 </strong>Licensee grants to MASH the irrevocable, perpetual, royalty-free, non-exclusive
                                right and license to use Final Elements solely for the promotion of MASH or any of its subsidiaries. For
                                purposes of this paragraph, "Final Elements" shall mean any end product produced by Licensee pursuant to
                                this Agreement, including, but not limited to use in magazines, books, feature films, television
                                productions and other print. </p>
                            <p><strong>2.16 </strong>Where Purchaser is licensing Licensed Material on behalf of a Licensee, Purchaser
                                hereby represents and warrants that: (i) Purchaser is authorized to act as an agent on behalf of the
                                Licensee and has full power and authority to bind the Licensee to this Agreement; and (ii) if Licensee
                                disputes Purchaser's power and authority to act on behalf of Licensee with respect to this Agreement,
                                Purchaser shall be bound and liable for any failure of Licensee to comply with the terms of this
                                Agreement. Nothing in this Section shall serve to excuse Purchaser's obligation to make payment and be
                                liable to MASH for the Licensed Material.</p>
                            <p><strong>2.17 </strong>Licensee may not falsely represent, expressly or impliedly, that Licensee is the
                                original creator of a visual work that derives a substantial part of its artistic components from the
                                Licensed Material. </p>
                            <p><strong>2.18 </strong>If the Rights and Restrictions include website use, Licensee shall post terms and
                                conditions on its permitted websites that include restrictions on downloading the Licensed Material for
                                other than personal use, and prohibit republication, retransmission, reproduction or other use of the
                                Licensed Material. </p>
                            <p><strong>2.19 </strong>Any of the body parts or basic features of the model(s) in the Licensed material
                                must not be cropped, altered, manipulated or distorted without taking a prior written approval from MASH.
                            </p>
                        </Col>
                        <Col xs={12} className="mb-2 mt-2 text-justify">
                            <h5 style={{ borderBottom: "2px solid", padding: "2px", display: "inline" }}>3. INTELLECTUAL PROPERTY RIGHTS AND PHOTO CREDIT</h5>
                            <p className="mt-2"><strong>3.1</strong> MASH is the sole and exclusive owner of all the material and content on MASH's
                                Websites, including, without limitation www.imagesbazaar.com and websites of their affiliates and
                                subsidiaries. All material and content on these Websites, including, but not limited to design, layout,
                                images, 3D illustrations, documents, files, photographs, content, text, graphics, sound, videos, footage,
                                trade-dress, trademarks, patents, written material ("MASH Content") are the sole and exclusive property of
                                MASH and is protected by all the applicable laws, including, without limitation copyright, trademark,
                                trade-names, patents, designs, internet domain names, data protection, IT Act, privacy and publicity
                                rights and other rights and statutes. Use of any MASH Content without the prior express written permission
                                and license to use is strictly prohibited. All rights, title, ownership, intellectual property rights and
                                proprietary rights in the MASH's Website and its content shall always remain with MASH, its affiliates and
                                subsidiaries and shall not pass on to the Licensee, their representatives or any third party at any time.
                            </p>
                            <p><strong>3.2 COPYRIGHT </strong>MASH owns all copyrights in all the Content and Licensed Material on the
                                Website. No ownership in any Content and Licensed Material shall to the Licensee by the issuance of the
                                license contained in this Agreement. Except as expressly stated in this Agreement, MASH grants Licensee no
                                right or license, express or implied, to the Licensed Material. Licensee shall not remove any copyright or
                                other proprietary rights notice contained in the Licensed Material and in any related promotional
                                materials provided on this Website. </p>
                            <p><strong>3.3 TRADEMARKS </strong></p>
                            <p><strong>3.3.1 </strong>MASH is the exclusive owner and right holder of MASH Trademarks,
                                www.imagesbazaar.com, www.shotindia.com, Mash Audio Visuals or any other MASH's trade names, trademarks,
                                logos or service marks and any other slogan or design contained in the Website and otherwise used in
                                trade, including the names of all Licensed Material collections (''MASH Marks''). MASH Marks shall remain
                                the sole property of MASH, its affiliates and subsidiaries, and may not be copied, imitated or used, in
                                whole or in part, without the prior written permission of MASH or the applicable trademark holder. </p>
                            <p><strong>3.3.2 </strong>Licensee is not allowed to use, register, or assist others in using or registering
                                any trademarks, trade names, logos, internet domain names, or any mark or name confusingly similar to MASH
                                Marks or belonging to MASH without prior written consent from MASH. </p>
                            <p><strong>3.3.3 </strong>Licensee will not now or in the future contest the validity of MASH Marks nor will
                                oppose or assist others in opposing any registration of any of the MASH Marks. </p>
                            <p><strong>3.3.4 </strong>Licensee is not allowed to use any MASH Marks in connection with any of their
                                Works. All goodwill accruing to the MASH Marks shall belong exclusively to MASH. </p>
                            <p><strong>3.3.5 </strong> Licensee agrees not to use MASH Marks in any manner that might tarnish,
                                disparage, or reflect adversely on such trademarks or MASH. </p>
                            <p><strong>3.3.6 </strong>Licensee agrees not to use any MASH Marks or any variant thereof including
                                misspellings as a domain name or as part of a domain name regardless of the top-level domain, or as a
                                meta-tag, hidden text, keyword, or any other type of programming code or data. </p>
                            <p><strong>3.3.7 </strong>Licensee cannot at any time, adopt or use, without MASH's prior written consent
                                any word or marks which is similar to or likely to be confused with MASH Marks. In addition, the look and
                                feel of the Website, including all page headers, custom graphics, button icons and scripts, is the service
                                mark, trademark and/or trade dress of MASH and may not be copied, imitated or used, in whole or in part,
                                without MASH's prior written permission. </p>
                            <p><strong>3.3.8 </strong>Nothing in this Agreement shall confer upon Licensee any right of ownership in
                                MASH Marks. </p>
                            <p><strong>3.3.9 </strong>Licensee cannot use MASH Marks, Licensed Material or other Content of MASH to link
                                to their Website without the prior written consent of MASH. </p>
                            <p><strong>3.3.10 </strong>Licensee cannot frame or hotlink to the Website or any Content other than its own
                                without the prior written consent of MASH. </p>
                            <p><strong>3.3.11 </strong>All other trademarks, registered trademarks, product names and company names or
                                logos mentioned in the Website are the property of their respective owners. Reference to any products,
                                services, processes or other information, by trade name, trademark, manufacturer, supplier, or otherwise
                                does not constitute or imply endorsement, sponsorship or recommendation thereof by MASH.
                            </p>
                            <p><strong>3.3.12 PHOTO CREDIT</strong> Editorial Licensed Material must include the following credit line
                                adjacent to the Licensed Material: "ImagesBazaar/Photographer's Name" or as otherwise notified by MASH. If
                                Licensee omits the credit line in the use of Licensed Material, an additional fee in an amount up to one
                                hundred percent (100%) of the original License fee may be payable by Licensee, at MASH's sole discretion.
                                The foregoing fee shall be in addition to any other rights or remedies that MASH may have at law or in
                                equity. </p>
                        </Col>
                        <Col xs={12} className="mb-2 mt-2 text-justify">
                            <h5 style={{ borderBottom: "2px solid", padding: "2px", display: "inline" }}>4. RELEASES</h5>
                            <p className="mt-2"><strong>4.1</strong> MASH will notify Licensee if it has obtained a model release and/or a property
                                release for the Licensed Material, either in the Licensed Material on the Website, in the Rights and
                                Restrictions or by written notice to the Licensee. The warranty and indemnity set forth in Clauses 5.1(iv)
                                and 6.1 below are only provided if and when such written notification is given. If no such notification is
                                given, then no such model or property release has been obtained and thereby, the warranty and indemnity as
                                set forth in Clauses 5.1(iv) and 6.1 would become void and not enforceable. In the event that no
                                notification as to model or property release is provided by MASH, MASH shall not be liable for any claims
                                made by any third parties relating to use of the Licensed Material not having the model or property
                                release. Licensee acknowledges that some jurisdictions provide legal protection against a person's image,
                                likeness or property being used for commercial purposes without their consent. Neither MASH nor any party
                                on whose behalf MASH licenses Licensed Material (each, a "Licensor") makes any representations or
                                warranties as to whether any additional fees or payments may be due to any person depicted in the Licensed
                                Material pursuant to the requirements of any applicable law, and Licensee shall be solely responsible for
                                any such additional fees or payments.
                            </p>
                            <p><strong>4.2</strong> Except where Licensee is specifically notified that a model and/or property release
                                has been obtained by MASH, neither MASH nor any Licensor grants any rights or makes any warranties with
                                regard to the use of names, people, likeness, property, trademarks, trade dress, logos, registered,
                                unregistered or copyrighted audio, designs or works of art or architecture depicted in any Licensed
                                Material. Licensee shall be solely responsible for determining whether a release is required in connection
                                with any proposed use of the Licensed Material, and Licensee shall be solely responsible for obtaining any
                                required release. As to any release delivered with any Editorial Licensed Material, neither MASH, nor any
                                Licensor, makes any representation, warranty or guarantee as to its sufficiency with regard to any use of
                                the Licensed Material made by the Licensee. Licensee shall obtain all necessary individual, model,
                                property, team logo, trademark, audio and other releases, approvals and clearances from third parties as
                                may be required for the Licensee's use of the Licensed Material prior to using the Licensed Material.</p>
                        </Col>
                        <Col xs={12} className="mb-2 mt-2 text-justify">
                            <h5 style={{ borderBottom: "2px solid", padding: "2px", display: "inline" }}>5. WARRANTY AND LIMITATION OF LIABILITY</h5>
                            <p className="mt-2"><strong>5.1 </strong>MASH warrants that: (i) it has all necessary rights and authority to enter into and
                                perform this Agreement; (ii) the Licensed Material will be free from defects in material and workmanship
                                for thirty (30) days from delivery (Licensee's sole and exclusive remedy for a breach of this warranty
                                being the replacement of the Licensed Material); (iii) Licensee's use of the Licensed Material in its
                                original form, and when used strictly in accordance with this Agreement, will not infringe on any
                                copyrights or moral rights of any person or entity; and (iv) if a release is provided by MASH pursuant to
                                Section 4.1, Licensee's use of the Licensed Material in its original form, and when used in accordance
                                with this Agreement will not infringe on any trademark or other intellectual property right and will not
                                violate any right of privacy or right of publicity. </p>
                            <p><strong>5.2 </strong>Mash uses reasonable efforts to ensure the accuracy, correctness and reliability of
                                the information and Content, but Mash makes no representations or warranties as to the Content posted by
                                the third party User(s) as to its accuracy, correctness, reliability and any other irregularity. </p>
                            <p><strong>5.3 </strong> NEITHER MASH NOR ANY LICENSOR MAKES ANY OTHER WARRANTIES, EXPRESS OR IMPLIED,
                                REGARDING THE LICENSED MATERIAL OR ITS DELIVERY SYSTEMS, INCLUDING, WITHOUT LIMITATION, ANY IMPLIED
                                WARRANTIES OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. IN NO EVENT SHALL MASH, ITS AFFILIATES,
                                SUBSIDIARIES AND THEIR RESPECTIVE DIRECTORS, EMPLOYEES, AGENTS, MEMBERS OR ANY LICENSOR BE LIABLE TO
                                LICENSEE OR ANY OTHER PERSON OR ENTITY FOR ANY PUNITIVE, SPECIAL, INDIRECT, CONSEQUENTIAL OR INCIDENTAL
                                DAMAGES, OR ANY OTHER DAMAGES, COSTS OR LOSSES, INCLUDING BUT NOT LIMITED TO LOSS OF USE, LOSS OF PROFITS
                                OR LOSS OF DATA, WHETHER IN AN ACTION IN CONTRACT, TORT (INCLUDING, BUT NOT LIMITED TO NEGLIGENCE) OR
                                OTHERWISE, ARISING OUT OF THIS AGREEMENT, IN ANY WAY CONNECTED WITH THE USE OF THE WEBSITE, THE SERVICES,
                                MASH IMAGE CONTENT OR THE MAETRIALS CONTAINED IN OR ACCESSED THROUGH THE WEBSITE, INCLUDING WITHOUT
                                LIMITATION ANY DAMAGES CAUSED BY OR RESULTING FROM RELIANCE BY USER ON ANY INFORMATION OBTAINED FROM MASH,
                                OR THAT RESULTS FROM MISTAKES, OMISSIONS, INTERRUPTIONS, DELETION OF FILES OR EMAIL, ERRORS, DEFECTS,
                                VIRUSES, DELAYS IN OPERATION OR TRANSMISSION OR ANY FAILURE OF PERFORMANCE, WHETHER OR NOT RESULTING FROM
                                ACTS OF GOD, COMMUNICATIONS FAILURE, THEFT, DESTRUCTION OR UNAUTHORIZED ACCESS TO MASH'S RECORDS, PROGRAMS
                                OR SERVICES, EVEN IF MASH OR ITS LICENSORS, AS APPLICABLE, HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH
                                DAMAGES, COSTS OR LOSSES. MASH SHALLL NOT BE LIABLE FOR ANY DAMAGES, COSTS OR LOSSES ARISING OUT OF OR AS
                                A RESULT OF MODIFICATIONS MADE TO THE LICENSED MATERIAL BY LICENSEE OR THE CONTEXT IN WHICH LICENSED
                                MATERIAL IS USED IN A LICENSEE WORK. NO ACTION, REGARDLESS OF FORM OR NATURE, ARISING OUT OF THIS
                                AGREEMENT MAY BE BROUGHT BY OR ON BEHALF OF LICENSEE OR PURCHASER MORE THAN ONE (1) YEAR AFTER THE CAUSE
                                OF ACTION FIRST AROSE. SOME JURISDICTIONS DO NOT PERMIT THE EXCLUSION OR LIMITATION OF IMPLIED WARRANTIES
                                OR LIABILITY FOR CERTAIN CATEGORIES OF DAMAGES. </p>
                            <p><strong>5.4 </strong>In no event shall the aggregate liability of MASH, whether in contract, warranty,
                                tort (including negligence, whether active, passive or imputed), product liability, strict liability or
                                other theory, arising out of or relating to the use of the site exceed any compensation the Licensee or
                                the Purchaser pay, if any, to MASH for access to or use of the Website and the Licensed Material. </p>
                        </Col>
                        <Col xs={12} className="mb-2 mt-2 text-justify">
                            <h5 style={{ borderBottom: "2px solid", padding: "2px", display: "inline" }}>6. INDEMNIFICATION</h5>
                            <p className="mt-2"><strong>6.1 </strong>Provided Licensed Material is only used in accordance with this Agreement and Terms
                                of Use of the Website and Licensee is not otherwise in breach of this Agreement and as Licensee's sole and
                                exclusive remedy for any alleged or actual breach of the representations and warranties set forth in
                                Clause 5, MASH shall subject to clause 5.3, 6.3 and 9.7, defend, indemnify and hold Licensee harmless from
                                all damages (except punitive damages not directly attributable to acts of MASH), liabilities and expenses
                                (including reasonable attorneys' fees and permitted and authorized costs) arising out of or connected with
                                any actual or threatened lawsuit, claim or legal proceeding alleging that MASH is in breach of its
                                warranties as set forth in Clause 5 above. The foregoing states MASH's entire indemnification obligation
                                under this Agreement. </p>
                            <p><strong>6.2 </strong> Licensee shall defend, indemnify and hold MASH and its parent, subsidiaries and
                                commonly owned or controlled affiliates and their respective officers, directors, agents and employees
                                harmless from all damages (except punitive damages not directly attributable to acts of Licensee),
                                liabilities and expenses (including reasonable attorneys' fees and permitted and authorized costs) arising
                                out of or as a result of claims by third parties relating to: (i) Licensee's use of any Licensed Material
                                outside the scope of this Agreement; (ii) any other actual or alleged breach by Licensee of this
                                Agreement; or (iii) Licensee's failure to obtain any required release. Such indemnification is in addition
                                to MASH's right to terminate for a breach of the representations and warranties and is not a waiver or
                                limitation of MASH's other rights or remedies. </p>
                            <p><strong>6.3 </strong>The party seeking indemnification pursuant to this Clause 6 shall promptly notify
                                the other party of such claim. At indemnifying party's option, indemnifying party may assume the handling,
                                settlement or defense of any claim or litigation, in which event indemnified party shall cooperate in the
                                defense of any such claim or litigation. Indemnified party shall have the right to participate in such
                                litigation, at its own expense, through counsel selected by indemnified party. The indemnifying party will
                                not be liable for legal fees and other costs incurred prior to the other party giving notice of the claim
                                for which indemnity is sought.
                            </p>
                        </Col>
                        <Col xs={12} className="mb-2 mt-2 text-justify">
                            <h5 style={{ borderBottom: "2px solid", padding: "2px", display: "inline" }}>7. CONDITION OF LICENSED MATERIAL</h5>
                            <p>Licensee should examine all Licensed Material for possible defects (whether digital or otherwise) before
                                sending any Licensed Material for Reproduction. Without prejudice to Section 5.1(ii) above, MASH shall not
                                be liable for any loss or damage suffered by Licensee or any third party, whether directly or indirectly,
                                arising from any alleged or actual defect in any Licensed Material or its caption or in any way from its
                                Reproduction. </p>
                        </Col>
                        <Col xs={12} className="mb-2 mt-2 text-justify">
                            <h5 style={{ borderBottom: "2px solid", padding: "2px", display: "inline" }}>8. GOVERNING LAW AND JURISDICTION</h5>
                            <p>Any dispute, violation, controversy, contest or claim arising out of or relating to this Agreement or the
                                breach, termination or validity thereof (hereinafter the "Disputes") shall be resolved amicably in the
                                first instance. The Parties agree to meet to resolve such dispute in good faith. Should such a solution
                                not be reached, within [30] days from the date of commencement of the dispute, difference or disagreement
                                or such longer period of time as may be mutually agreed by the Parties in writing, such dispute,
                                difference or disagreement shall be referred to Arbitration and shall be finally resolved through
                                arbitration conducted by a tribunal of three arbitrators, with the right of each party to appoint an
                                arbitrator, who in turn will appoint a Presiding Arbitrator. The Presiding Arbitrator shall pass a
                                speaking award. Any order/directions/awards of the majority of the tribunal shall be final and binding on
                                both the parties. The arbitration proceedings shall be in accordance with the Indian Arbitration and
                                Conciliation Act 1996 and Rules there under as at present in force. The seat of arbitration shall be
                                Delhi, India. The arbitration shall be administered in accordance with its practice, rules and
                                regulations. If the award passed in the Arbitration proceeding is not acceptable to any of the Party, then
                                the Party is free to approach the appropriate court of law as agreed herein below. This Agreement shall be
                                construed in accordance with and governed by the laws of India without giving effect to their conflict of
                                laws principles or rules. The courts at Delhi, India shall have exclusive Jurisdiction. </p>
                        </Col>
                        <Col xs={12} className="mb-2 mt-2 text-justify">
                            <h5 style={{ borderBottom: "2px solid", padding: "2px", display: "inline" }}>9. MISCELLANEOUS</h5>
                            <p className="mt-2"><strong>9.1 UNAUTHORIZED USE </strong>Any use of the Licensed Material in a manner not expressly
                                authorized by this Agreement or in breach of a term of this Agreement constitutes copyright infringement
                                and other violation, entitling MASH to exercise all rights and remedies available to it under copyright
                                laws and other statutes around the world. Licensee shall be responsible for any damages resulting from any
                                such copyright infringement and other violation, including any claims by a third party. In addition and
                                without prejudice to MASHs' other remedies under this Agreement, MASH reserves the right to charge and
                                Licensee agrees to pay a fee equal to up to five (5) times MASH standard license fee for the unauthorized
                                use of the Licensed Material. </p>
                            <p><strong>9.2 TERMINATION </strong>Notwithstanding any of these terms and conditions, MASH reserves the
                                right, without notice in its sole discretion, to terminate Licensee's account and/or block Licensee's use
                                of the Website. Mash reserves the right to terminate this Agreement in the event Licensee: (i) enters the
                                Agreement after having received the notice from MASH for unauthorized use of the Licensed Material; (ii)
                                provides inaccurate information for proposed usage of the Licensed Material; or (iii) otherwise breaches
                                any of the terms and conditions of the Agreement and Terms of Use of the Website; (iv) Upon termination,
                                Licensee must destroy and cease to use, delete all digital files from Licensee's database, return to MASH
                                the Licensed Material copies and related documentation thereof with immediate effect, and also return the
                                License Work partial-control of Licensee. </p>
                            <p><strong>9.3 REMEDY FOR BREACH </strong>Licensee agree that any breach of this Agreement by Licensee or
                                their representatives would cause MASH irreparable harm, injury, loss and damage, the extent of which
                                would be impossible to ascertain and for which monetary damages would not be an adequate remedy.
                                Accordingly, in addition to any other remedies MASH may have at law or in equity, MASH shall be entitled
                                to injunctive and other equitable relief in the event of any such breach of this Agreement by Licensee or
                                their representatives.</p>
                            <p><strong>9.4 </strong>MASH reserves the right to change any of the terms and conditions contained in this
                                Agreement or any policy or guideline of the Website, at any time and in its sole discretion. Licensee's
                                continued use of the Website following the posting of such changes will constitute Licensee's acceptance
                                of such changes and Agreement. </p>
                            <p><strong>9.5 ELECTRONIC STORAGE</strong>For all Licensed Material that Licensee takes delivery of in
                                electronic form, Licensee must retain the copyright symbol, the name of MASH and the image number or other
                                identification number associated with the Licensed Material as may be included as part of the electronic
                                file containing the Licensed Material that is stored on Licensee's computers. Licensee may not make
                                additional high-resolution copies of the Licensed Material and Licensee shall maintain a robust firewall
                                to safeguard against unauthorized third-party access to the Licensed Material. Upon the expiration or
                                earlier termination of this Agreement, Licensee shall promptly delete and remove the Licensed Material
                                from Licensee's premises, computer systems and storage (electronic or physical) and shall ensure that its
                                subcontractors do likewise.</p>
                            <p><strong>9.6 AUDIT/CERTIFICATE OF COMPLIANCE </strong>Upon reasonable notice, Licensee shall provide
                                sample copies of Reproductions containing Licensed Material to MASH. In addition, upon reasonable notice,
                                MASH may, at its discretion, either through its own employees or through a third party, audit Licensee's
                                records directly related to this Agreement and use of Licensed Material in order to verify compliance with
                                the terms of this Agreement. Where MASH reasonably believes that Licensed Material is being used outside
                                the scope of the license granted under this Agreement, Licensee shall, at MASH request, provide a
                                certificate of compliance signed by an officer of Licensee, in a form to be approved by MASH.</p>
                            <p><strong>9.7 WITHDRAWAL</strong>Upon notice from MASH, or upon Licensee's knowledge that any Licensed
                                Material is subject to a threatened or actual claim of infringement, violation of another right, or any
                                other claim for which MASH may be liable herein, or if MASH withdraws any Licensed Material for any good
                                reason, Licensee will physically remove the Licensed Material from its premises, computer systems and
                                storage (electronic or physical) and, cease any future use at its own expense. </p>
                            <p><strong>9.8 SEVERABILITY </strong>If one or more of the provisions contained in this Agreement is found
                                to be invalid, illegal or enforceable in any respect, the validity, legality and enforceability of the
                                remaining provisions shall not be affected. Such provisions shall be revised only to the extent necessary
                                to make them enforceable. </p>
                            <p><strong>9.9 ENTIRE AGREEMENT </strong>This Agreement, Invoice and Terms of Use of the Website
                                (incorporated by reference) contain all the terms of this Agreement. </p>
                            <p><strong>9.10 WAIVER </strong>No action of MASH, other than express written waiver, may be construed as a
                                waiver of any of provisions of this Agreement. A delay on the part of MASH of its rights or remedies will
                                not operate as a waiver of such rights or remedies, and a single or partial exercise by MASH of any such
                                rights or remedies will not preclude other or further exercise of that right or remedy. A waiver of a
                                right or remedy on any occasion will not be construed as a bar to or waiver of rights or remedies on any
                                other occasion. Any rights not expressly granted herein are reserved.</p>
                        </Col>
                        <Col xs={12} className="mb-2 mt-2 text-justify">
                            <p><strong>ACKNOWLEDGEMENT</strong>
                                YOU ACKNOWLEDGE AND AGREE THAT YOU HAVE READ THIS AGREEMENT AND UNDERSTAND IT PRIOR TO AGREEING TO IT. IN
                                CONSIDERATION OF MASH AGREEING TO PROVIDE THE CONTENT, YOU AGREE TO BE BOUND BY ALL THE TERMS AND
                                CONDITIONS OF THIS AGREEMENT. YOU FURTHER AGREE THAT THIS IS THE ENTIRE AGREEMENT AND SUPERSEDES ANY
                                PROPOSAL OR PRIOR AGREEMENT, ORAL OR WRITTEN, AND ANY OTHER COMMUNICATION BETWEEN MASH AND YOU RELATING TO
                                THE SUBJECT OF THIS AGREEMENT.
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default NoExRight