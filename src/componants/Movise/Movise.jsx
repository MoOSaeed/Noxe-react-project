
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


export default function Movise() {


    const [TrendingMOV, setTrendingMOV] = useState([])

    let getTrindingMovie = async () => {
        let { data } = await axios.get('https://api.themoviedb.org/3/trending/movie/day?api_key=c636ed7787cc302d96bf88ccf334e0d8')
        setTrendingMOV(data.results);
        console.log(TrendingMOV);
    }


    useEffect(() => {
        getTrindingMovie()
    }, [])

    return (
        <>
            <div className="row py-4 gy-3">
                <div className="col-md-4">
                    <div>
                        <div className=' prdr w-25 mb-4'></div>
                        <h3>Trending</h3>
                        <h3>Movies</h3>
                        <h3>To watch now</h3>
                        <span className="text-muted">most watched movies by day</span>
                        <div className="prdr mt-4 w-100"></div>
                    </div>
                </div>
                {TrendingMOV.map((item, index) => (
                    <div key={index} className="col-md-2">
                        <Link className='nav-link' to={`/Details/${item.id}/${item.media_type}`}>
                            <div className="item ">
                                <img className="w-100" src={'https://image.tmdb.org/t/p/original' + item.poster_path} alt="" />
                                <h2 className='h6 my-3'>{item.title}</h2>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}
