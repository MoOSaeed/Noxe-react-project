import React from 'react';
import Movise from '../Movise/Movise';
import People from '../People/People';
import Tvshows from '../Tvshows/Tvshows';




export default function Home() {

    return (
        <>
            < Movise />
            < div className='prdr'></div>
            < Tvshows />
            < div className='prdr'></div>
            < People />
        </>
    )
}


