import React, { useState } from 'react';
import fetch from 'isomorphic-unfetch';
import Main from '../layouts/main';
import SearchBar from '../comps/SearchBar';
import MovieList from '../comps/MovieList';

const API_KEY = 'APIKEY'; // Should be in .env in a real app

const Index = () => {
    const [input, setInput] = useState('');
    const [data, setData] = useState([]);
    const [error, setError] = useState('');

    const handleClick = () => {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${input}`)
            .then((results) => results.json())
            .then((data) => {
                if (data.Response === "True") {
                    setData(Array.from(data['Search']));
                    setError('');
                } else {
                    setError(data.Error || 'No Movie found');
                    setData([]);
                }
            })
            .catch((err) => {
                setError('Something went wrong. Please try again.');
                setData([]);
            });
    };

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const meta = {
        title: 'Movie Search powered by Next JS',
        description: 'This is a sample test app built with Next JS and OMDB API'
    };

    return (
        <Main meta={meta}>
            <SearchBar 
                input={input} 
                onChange={handleChange} 
                onClick={handleClick} 
            />
            <MovieList 
                data={data} 
                error={error} 
            />
        </Main>
    );
};

export default Index;
