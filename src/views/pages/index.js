import React from 'react';
import { Route } from "react-router-dom";
import PricingRoute from "./routes/PricingRoute";
import AddtocartRoute from "./routes/AddtocartRoute";

const Sections = () => {
    return (
        <>
            <Route path="/pricing" component={PricingRoute} />
            <Route path="/addtocart" component={AddtocartRoute} />
        </>
    )
}

export default Sections;
