import React from 'react'
import { useRouteMatch, Route } from 'react-router-dom'
import Static from './Static'
import Contact from './Contact'
import Pricing from './Pricing'
import AboutUs from './AboutUs'
import LicenseRouter from './license'
import SearchTips from './SearchTips'
import Testimonial from './Testimonial'
import Term from './Terms'
import FAQ from './FAQ'
import PrivacyPolicy from './PrivacyPolicy'
import FreeResearch from './FreeResearch'
import Technical from './Technical'
import Ordering from './Ordering'
import Downloading from './Downloading'
import Wishlist from './Wishlist'
import StaticAcc from './StaticAcc'
import Glossory from './Glossory'
import Contributor from './Contributor'


const StaticRouteMain = () => {
    const { path } = useRouteMatch()

    return (
        <React.Fragment>
            <Route path={`${path}/contactus`}>
                <Static>
                    <Contact />
                </Static>
            </Route>
            <Route path={`${path}/pricing`}>
                <Static>
                    <Pricing />
                </Static>
            </Route>
            <Route path={`${path}/aboutus`}>
                <Static>
                    <AboutUs />
                </Static>
            </Route>
            <Route path={`${path}/licensing`}>
                <Static>
                    <LicenseRouter />
                </Static>
            </Route>
            <Route path={`${path}/searchtips`}>
                <Static>
                    <SearchTips />
                </Static>
            </Route>
            <Route path={`${path}/testimonials`}>
                <Static>
                    <Testimonial />
                </Static>
            </Route>
            <Route path={`${path}/termsofuse`}>
                <Static>
                    <Term />
                </Static>
            </Route>
            <Route path={`${path}/faq`}>
                <Static>
                    <FAQ />
                </Static>
            </Route>
            <Route path={`${path}/privacypolicy`}>
                <Static>
                    <PrivacyPolicy />
                </Static>
            </Route>
            <Route path={`${path}/freeresearch`}>
                <Static>
                    <FreeResearch />
                </Static>
            </Route>
            <Route path={`${path}/technical`}>
                <Static>
                    <Technical />
                </Static>
            </Route>
            <Route path={`${path}/ordering`}>
                <Static>
                    <Ordering />
                </Static>
            </Route>
            <Route path={`${path}/downloading`}>
                <Static>
                    <Downloading />
                </Static>
            </Route>
            <Route path={`${path}/lightbox`}>
                <Static>
                    <Wishlist />
                </Static>
            </Route>
            <Route path={`${path}/myaccountshelp`}>
                <Static>
                    <StaticAcc />
                </Static>
            </Route>
            <Route path={`${path}/glossary`}>
                <Static>
                    <Glossory />
                </Static>
            </Route>
            <Route path="/static/contributor">
                <Static>
                    <Contributor />
                </Static>
            </Route>
        </React.Fragment>
    )
}

export default StaticRouteMain