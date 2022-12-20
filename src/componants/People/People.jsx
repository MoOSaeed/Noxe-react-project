import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function People() {

    const [TrendingPerson, setTrendingPerson] = useState([])


    let getTrindingPerson = async () => {
        let { data } = await axios.get('https://api.themoviedb.org/3/trending/person/day?api_key=c636ed7787cc302d96bf88ccf334e0d8')
        setTrendingPerson(data.results);
        console.log(data.results);
    }

    useEffect(() => {
        getTrindingPerson()
    }, [])
    return (
        <>
            <div className="row my-3 py-5">
                <div className="col-md-4">
                    <div>
                        <div className='prdr w-25 mb-3'> </div>
                        <h3>Trending</h3>
                        <h3>Person</h3>
                        <h3>to whatch now</h3>
                        <span className='text-muted'>most watched Person by day</span>
                        <div className='prdr w-100 mt-3'> </div>
                    </div>
                </div>
                {TrendingPerson.map((item, index) => (
                    <div key={index} className="col-md-2">
                        <Link className='nav-link' to={`/Details/${item.id}/${item.media_type}`}>
                            <div className="item">
                                <img className='w-100' src={`https://image.tmdb.org/t/p/original/${item.profile_path}`} alt="" />
                                <h3>{item.name}</h3>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}
