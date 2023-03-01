import { Link } from "react-router-dom";

import {FaStar} from 'react-icons/fa';

const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = (movie, showLink = true) =>{
    console.log(movie)
    const movieObject = movie.movie;
    return(
        <div className="movie-card">
            <img src={imageUrl + movieObject.poster_path} alt={movieObject.title} />
            <h2>{movieObject.title  }</h2>
            <p>
                <FaStar /> {movieObject.vote_average.toFixed(1)}
            </p>
            {showLink && <Link to={`/movie/${movieObject.id}`}>Detalhes</Link>}
        </div>
    )
    
}

export default MovieCard