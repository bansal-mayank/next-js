import React from 'react';

const SearchBar = ({ input, onChange, onClick }) => {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">Movie Search powered by Next JS</h1>
                <p className="lead">This is sample test app build and it uses Online movie database API</p>
                <style jsx>
                    {
                        `
                        input {
                            display: inline-block;
                            width: 500px;
                        }
                        @media only screen and (max-width: 600px) {
                            input {
                                display: block;
                                width: 100%;
                            }
                            button {
                                display: block;
                                margin: 0 auto;
                                margin-top: 15px;
                            }
                        }
                        `
                    }
                </style>
                <input 
                    className="form-control mr-sm-2" 
                    type="search" 
                    placeholder="Search movie" 
                    value={input} 
                    onChange={onChange} 
                />
                <button 
                    className="btn btn-outline-primary" 
                    type="submit" 
                    onClick={onClick}
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default SearchBar;
