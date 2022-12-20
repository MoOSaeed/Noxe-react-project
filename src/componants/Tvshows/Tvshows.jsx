import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

export default function Tvshows() {

    const [TrendingTvs, setTrendingTvs] = useState([])
    console.log(TrendingTvs);

    let getTrindingTvs = async () => {
        let { data } = await axios.get('https://api.themoviedb.org/3/trending/tv/day?api_key=c636ed7787cc302d96bf88ccf334e0d8')
        setTrendingTvs(data.results);
    }

    useEffect(() => {
        getTrindingTvs()
    }, [])

    return (

        <>
            <div className="row my-3 py-5">
                <div className="col-md-4">
                    <div>
                        <div className="prdr w-25 mb-4"></div>
                        <h3>Trending</h3>
                        <h3>Tv shows</h3>
                        <h3>To watch now</h3>
                        <span className="text-muted">most watched Tv shows by day</span>
                        <div className="prdr mt-4 w-100"></div>
                    </div>
                </div>
                {TrendingTvs.map((item, index) => (
                    <div key={index} className="col-md-2">
                        <Link className='nav-link' to={`/Details/${item.id}/${item.media_type}`}>
                            <div className="item">
                                <img
                                    className="w-100"
                                    src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                                    alt=""
                                />
                                <h6>
                                    {item.title}
                                    {item.name}
                                </h6>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </>

    )
}
