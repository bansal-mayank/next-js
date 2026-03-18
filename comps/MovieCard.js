import React from 'react';

const MovieCard = ({ movie }) => {
    if (movie['Poster'] === "N/A") return null;

    return (
        <div className="col-md-3">
            <style jsx>{`
                .img-responsive {
                    max-height: 400px;
                }
            `}</style>
            <img className="img-responsive" src={movie['Poster']} alt={movie['Title']} />
            <h2>
                <a href={`/about?id=${movie['imdbID']}`}>
                    {movie['Title']}
                </a>
            </h2>
            <p>Year: {movie['Year']}</p>
        </div>
    );
};

export default MovieCard;
