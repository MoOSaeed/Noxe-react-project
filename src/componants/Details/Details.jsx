import { isEditable } from '@testing-library/user-event/dist/utils';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'




export default function Details() {

    let parems = useParams();
    const [itemDetails, setitemDetails] = useState({});

    let getDetails = async () => {
        let { data } = await axios.get(`https://api.themoviedb.org/3/${parems.mediaType}/${parems.id}?api_key=c636ed7787cc302d96bf88ccf334e0d8&language=en-US`)
        setitemDetails(data);
    }

    useEffect(() => {
        getDetails()
    }, [])


    console.log(parems);
    return (
        <div className='row py-4'>
            <div className="col-md-3">
                {parems.mediaType == 'person' ?
                    < img className='w-100' src={'https://image.tmdb.org/t/p/original' + itemDetails.profile_path} alt="" /> :
                    < img className='w-100' src={'https://image.tmdb.org/t/p/original' + itemDetails.poster_path} alt="" />}
            </div>
            <div className="col-md-9">
                <h2>{itemDetails.title}{itemDetails.name}</h2>
                <p className='text-muted my-3'>{itemDetails.overview}{itemDetails.biography}</p>
            </div>
        </div>
    )
}
