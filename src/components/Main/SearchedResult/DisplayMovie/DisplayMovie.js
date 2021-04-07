import React from 'react'
import './DisplayMovie.css';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { appContext } from '../../../../appContext/appContext';
import { useContext } from 'react';


const DisplayMovie = props => {
    const { setMovieByID } = useContext(appContext);

    const redirect = useHistory();
    const clickHandler = async () => {
        const res = await (await axios(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MY_KEY}&i=${props.id}`)).data;
        setMovieByID(() => {
            return res;
        });
        redirect.push('/infos');
    };

    return (
        <div className="DisplayMovie" onClick={clickHandler}>
            <img className="DisplayMovie__img" src={props.Poster} alt="img" />
        </div>
    )
};

export default DisplayMovie;