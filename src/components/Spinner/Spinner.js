import React from 'react';
import './Spinner.css';
import { appContext } from '../../appContext/appContext';
import { useContext } from 'react';

const Spinner = () => {
    const { spinner } = useContext(appContext);
    let spin = {};

    if (spinner) {
        spin = {
            "position": "absolute",
            "zIndex": "1"
        }
    } else {
        spin = {
            "position": "absolute",
            "zIndex": "-1",
            "opacity": "0"
        }
    }

    return (
        <div className="Spinner" style={spin}>
            <img src="Images/spinner.svg" alt="img" />
        </div>
    )
};

export default Spinner;