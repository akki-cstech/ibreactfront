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


const StaticRouteMain = ({user, setUser}) => {
    const { path } = useRouteMatch()

    return (
        <React.Fragment>
            <Route path={`${path}/contactus`}>
                <Static user={user} setUser={setUser}>
                    <Contact />
                </Static>
            </Route>
            <Route path={`${path}/pricing`}>
                <Static user={user} setUser={setUser}>
                    <Pricing />
                </Static>
            </Route>
            <Route path={`${path}/aboutus`}>
                <Static user={user} setUser={setUser}>
                    <AboutUs />
                </Static>
            </Route>
            <Route path={`${path}/licensing`}>
                <Static user={user} setUser={setUser}>
                    <LicenseRouter />
                </Static>
            </Route>
            <Route path={`${path}/searchtips`}>
                <Static user={user} setUser={setUser}>
                    <SearchTips />
                </Static>
            </Route>
            <Route path={`${path}/testimonials`}>
                <Static user={user} setUser={setUser}>
                    <Testimonial />
                </Static>
            </Route>
            <Route path={`${path}/termsofuse`}>
                <Static user={user} setUser={setUser}>
                    <Term />
                </Static>
            </Route>
            <Route path={`${path}/faq`}>
                <Static user={user} setUser={setUser}>
                    <FAQ />
                </Static>
            </Route>
            <Route path={`${path}/privacypolicy`}>
                <Static user={user} setUser={setUser}>
                    <PrivacyPolicy />
                </Static>
            </Route>
            <Route path={`${path}/freeresearch`}>
                <Static user={user} setUser={setUser}>
                    <FreeResearch />
                </Static>
            </Route>
            <Route path={`${path}/technical`}>
                <Static user={user} setUser={setUser}>
                    <Technical />
                </Static>
            </Route>
            <Route path={`${path}/ordering`}>
                <Static user={user} setUser={setUser}>
                    <Ordering />
                </Static>
            </Route>
            <Route path={`${path}/downloading`}>
                <Static user={user} setUser={setUser}>
                    <Downloading />
                </Static>
            </Route>
            <Route path={`${path}/lightbox`}>
                <Static user={user} setUser={setUser}>
                    <Wishlist />
                </Static>
            </Route>
            <Route path={`${path}/myaccountshelp`}>
                <Static user={user} setUser={setUser}>
                    <StaticAcc />
                </Static>
            </Route>
            <Route path={`${path}/glossary`}>
                <Static user={user} setUser={setUser}>
                    <Glossory />
                </Static>
            </Route>
            <Route path="/static/contributor" path={`${path}/licensing`}>
                <Static user={user} setUser={setUser}>
                    <Contributor />
                </Static>
            </Route>
        </React.Fragment>
    )
}

export default StaticRouteMain