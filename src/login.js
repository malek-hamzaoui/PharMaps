import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";



function Login() {
    return (
        <>
            <div className="container">
                <div className="pt-40 pb-20 px-30 flex flex-col justify-center items-center" >

                    <div className="w-1/3 shadow-lg px-6 py-4 rounded-md">
                        <div className="mb-4  text-green-500 font-bold uppercase ">
                            Se connecter à votre compte
                        </div>

                        <form>
                            <div className="grid gap-0 grid-rows-3 ">

                                <div className="grid grid-rows-4">

                                    <label
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>
                                    <input
                                        className="row-span-2 h-5/6"
                                        type="text"
                                        name="email"
                                        placeholder='Adresse Mail'
                                    />
                                </div>

                                <div className="grid grid-rows-4 ">

                                    <label
                                        htmlFor="mot de passe"
                                    >
                                        Mot de passe
                                    </label>
                                    <input
                                        className=" row-span-2 h-5/6 w-full"
                                        type="password"
                                        name="mot de passe"
                                        placeholder='Mot de pasee'
                                    />

                                </div>
                                <div className="grid grid-rows-3">
                                    <div className="row-span-2">
                                        <Link to="/stock">
                                            <button className=" h-3/4 w-full text-lg text-white bg-gradient-to-r from-green-800 to-green-500 " type="submit">
                                                Se Connecter
                                            </button>
                                        </Link>
                                    </div>
                                    <span className="place-self-center">pas de compte? <Link ><span className="text-green-500">Inscrivez-vous</span></Link> </span>
                                </div>

                            </div>
                        </form >
                    </div>
                </div >
            </div>

            <Footer />
        </>
    )
}

export default Login;