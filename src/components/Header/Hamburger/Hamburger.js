import './Hamburger.css';
import { appContext } from '../../../appContext/appContext';
import { useContext } from 'react';

const Hamburger = () => {
    const { setMenu } = useContext(appContext);
    const dropMenu = () => {
        setMenu(prev => {
            return prev === "menu" ? null : "menu";
        })
    };

    return (
        <div className="Hamburger" onClick={dropMenu}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
};

export default Hamburger;