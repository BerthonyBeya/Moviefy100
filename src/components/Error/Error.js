import React from 'react';
import './Error.css';
import { appContext } from '../../appContext/appContext';
import { useContext } from 'react';
import { Helmet } from 'react-helmet';

const Error = () => {
    const { setSpinner } = useContext(appContext);
    
    setSpinner(() => {
        return false;
    });

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" lang="en" />
                <title>error | Moviefy100 </title>
                <meta name="description" content="There was an error! Go back home and try again." />
            </Helmet>
            <div className="Error">
                <h1 className="Error__large-Txt">Movie not found! 404 Error.</h1>
                <p className="Error__small-Txt">
                    The movie you are looking for was not found.
                <a className="Error__Home-link" href="/home"> Return Home</a>
                </p>
            </div>
        </>
    )
};

export default Error;
