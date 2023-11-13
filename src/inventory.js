

import React from "react";
import MedCard from "./medcard";
import NavigationBar from "./header";
import Footer from "./Footerr"
import PharmacieCard from "./pharmacieCard";

function Inventory() {

    return (
        <>


            <NavigationBar />

            <div className="container pt-24 px-8" >
                <div className="grid grid-cols-4 justify-center col-span-3">
                    <MedCard name="panadol" status="en stock" nombre="10" />
                    <MedCard name="doliprane" status="en stock" nombre="15" />
                    <MedCard name="gripex" status="en stock" nombre="2" />
                    <MedCard name="maxilase" status="épuisé" nombre="0" />
                    <MedCard name="efferalgan" status="en stock" nombre="8" />
                </div>

            </div>
            <Footer />
        </>
    )

}

export default Inventory;