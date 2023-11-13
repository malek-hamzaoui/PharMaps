import NavigationBar from "./NavigationBar";
import Product from "./Product"
import AboutUs from "./AboutUs"
import Footer from "./Footerr";
function App() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <div class="flex flex-col gap-2 px-8 pb-3 pt-32">
        <AboutUs></AboutUs>
      </div>
      <div class="flex flex-col gap-2 px-8 py-3">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Les produits les plus recherchés :</h5>
        <div class="flex flex-row gap-4 flex-wrap px-6 ">
          <Product ProductName="Insuline Actrapid" Description="insuline humaine d'action rapide, produite par biotech... "></Product>
          <Product ProductName="Antacid" Description="neutralise l'acidité de l'estomac... "></Product>
          <Product ProductName="Physiol 10 ml" Description="solution physiologique d'eau purifiée et de chlorure de sodium..."></Product>
          <Product ProductName="Allergica sirop" Description="traitement des symptomes de la rhinite allergique..."></Product>
          <Product ProductName="Panotile" Description="indiqué pour le traitement de plusieurs affectations de l'oreille..."></Product>
          <Product ProductName="Xanax 0.5 cp" Description="anxiolytiqueutilisé chez l'adulte..."></Product>
          <Product ProductName="Seringue insuline 100" Description="destinée aux injections sous-cutanées d'insuline en diabétologie..."></Product>
          <Product ProductName="Hepatic" Description="utilisé pour les traitements d'infections virales et du virus de l'hépatite..."></Product>
          <Product ProductName="Plaquenil" Description="traitement de certaines maladies articulaires..."></Product>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
