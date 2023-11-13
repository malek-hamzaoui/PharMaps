import React from 'react';

function MedCard({ name, status, nombre }) {

    const imgsrc = `/${name}.jpg`
    return (
        <>
            <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
                <div className="grid grid-rows-4 gap-4  px-6 py-4">
                    <img src={imgsrc} alt="photo med" className='row-span-3' />
                    <div className='row-span-1'>
                        <div className="font-bold text-xl mt-2 mb-2">{name}</div>
                        <div className="flex flex-row justify-between">
                            <p className="text-gray-700 text-base font-bold" style={{ color: status == "en stock" ? "green" : "red" }}>{status}</p>
                            <div className="">
                                <span className='text-sm font-semibold uppercase'>quantité: </span> {nombre}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )

}

export default MedCard;