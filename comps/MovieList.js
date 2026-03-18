import React from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ data, error }) => {
    if (error) {
        return <div className="error">{error}</div>;
    }

    return (
        <div className="container">
            <div className="row">
                {data.map((movie, i) => (
                    <MovieCard key={movie.imdbID || i} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default MovieList;
