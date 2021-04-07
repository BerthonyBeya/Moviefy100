import React from 'react';
import './MovieInfos.css';
import { appContext } from '../../../../appContext/appContext';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';


const MovieInfos = () => {
    const error404 = useHistory();
    const { movieByID, setSpinner } = useContext(appContext);
    let result = '';
    let metaTageTitle = movieByID ? movieByID.Title : 'infos';

    setSpinner(() => {
        return false;
    })

    if (movieByID == null) {
        result = error404.push('/error');

    } else {
        result = <div className="MovieInfos">
            <div className="MovieInfos__Boxe Box-1">
                <img className="MovieInfos__Img" src={movieByID.Poster} alt="img" />
            </div>
            <div className="MovieInfos__Boxe Box-2">
                <div className="infos"><h1>Title:</h1> <p>{movieByID.Title}</p></div>
                <div className="infos"><h1>Actors:</h1> <p>{movieByID.Actors}</p></div>
                <div className="infos"><h1>Awards:</h1> <p>{movieByID.Awards}</p></div>
                <div className="infos"><h1>BoxOffice:</h1> <p>{movieByID.BoxOffice}</p></div>
                <div className="infos"><h1>Country:</h1> <p>{movieByID.Country}</p></div>
                <div className="infos"><h1>Genre:</h1> <p>{movieByID.Genre}</p></div>
                <div className="infos"><h1>Director:</h1> <p>{movieByID.Director}</p></div>
                <div className="infos"><h1>Released:</h1> <p>{movieByID.Released}</p></div>
                <div className="infos"><h1>imdbRating:</h1> <p>{movieByID.imdbRating}</p></div>
                <div className="infos">
                    <h1><a className="MovieInfos__video" href={`https://www.imdb.com/title/${movieByID.imdbID}/`} target="_blank" rel="noreferrer">Watch Video</a></h1>
                </div>
            </div>

            <div className="MovieInfos__Boxe Box-3">
                <div className="infos"><h1>Plot:</h1> <p>{movieByID.Plot}</p></div>
            </div>
        </div>
    }

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" lang="en" />
                <title>{metaTageTitle} | Moviefy100 </title>
                <meta name="description" content="These are all the informations about 
                about movie. enjoy!
                " />
            </Helmet>

            {result}
        </div>
    )
};

export default MovieInfos;
