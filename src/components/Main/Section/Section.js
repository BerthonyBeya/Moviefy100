import './Section.css';
import Form from './Form/Form';
import { Helmet } from 'react-helmet';

const Section = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" lang="en" />
                <title>Home | Moviefy100 </title>
                <meta name="description" content="Welcome to moviefy100 home page" />
            </Helmet>

            <section className="Section">
                <img className="Section__logo" src="images/moviefy100.svg" alt="logo" />
                <Form
                    Form={"Form-section"}
                    FormInput={"Form-section__input"}
                    FormButton={"Form-section__button"}
                    placeHolder={"Enter Movies or Series name..."}
                />
            </section>
        </>
    )
}


export default Section;
