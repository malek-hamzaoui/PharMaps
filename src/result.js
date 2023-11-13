import PharmacieCard from "./pharmacieCard";
import NavigationBar from "./NavigationBar";
import Footer from "./Footerr";




function Result() {
    return (
        <>
        <NavigationBar></NavigationBar>
        <div className="pb-3 pt-32 flex flex-col gap-4 px-8">
            <p className="px-4 font-bold text-xl">
            Resultat pour : Insuline
            </p>
            <div className="flex flex-row gap-1 flex-wrap">
                <PharmacieCard name="Pharmacie Ben Abdallah" distance="1 km" duree="10 mins" dureeVoiture="4 mins" status="en stock" />
                <PharmacieCard name="Pharmacie KAMMOUN" distance="2.3 km" duree="25 mins" dureeVoiture="6 mins" status="en stock"/>
                <PharmacieCard name="Pharmacie El Bahri" distance="3.5 km" duree="48 mins" dureeVoiture="10mins" status="en stock"/>
                <PharmacieCard name="Pharmacie Ben Jannet" distance="2 km" duree="20 mins" dureeVoiture="5 mins" status="en arrivage"/>
                <PharmacieCard name="Pharmacie EL HAMZAOUI" distance="4 km" duree="50 mins" dureeVoiture="11 mins" status="en arrivage"/>
                <PharmacieCard name="Pharmacie Neji" distance="500 m" duree="5 mins" dureeVoiture="3 mins" status="rupture de stock"/>
                <PharmacieCard name="Pharmacie TANIT" distance="1.8 km" duree="15 mins" dureeVoiture="5 mins" status="rupture de stock"/>
                <PharmacieCard name="Pharmacie DORRA ARIANA" distance="3 km" duree="35 mins" dureeVoiture="8 mins" status="rupture de stock"/>
            </div>
        </div>
        <div className="absolute w-full bottom-0">
            <Footer></Footer>
        </div>
        
        </>
    )

}
export default Result;