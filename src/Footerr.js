import { Link } from "react-router-dom";

function Footerr() {
    return (
     <>
        <footer class="bg-white rounded-lg shadow dark:bg-gray-900 bottom-0 w-full">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:pt-8">
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="/" class="hover:underline">PharMaps™</Link>. tous les droits sont réservés.</span>
            </div>
        </footer>
     </>
    );
  }
  
  export default Footerr;
  