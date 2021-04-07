import './Header.css';
import Navbar from './Navbar/Navbar';
import Form from '../Main/Section/Form/Form';
import Hamburger from './Hamburger/Hamburger';

const Header = () => {
    return (
        <header className="Header">
            <div>
                <img
                    className="Header__logo"
                    src="Images/moviefy100.svg"
                    alt="img"
                />
                <p className="Header__p">Browse For Your Favorite Movies</p>
            </div>
            <Navbar />
            <Form
                Form={"Form-header"}
                FormInput={"Form-header__input"}
                FormButton={"Form-header__button"}
                placeHolder={"Search..."}
            />
            <Hamburger />
        </header>
    )
}

export default Header;