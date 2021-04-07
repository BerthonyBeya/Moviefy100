import './Form.css';
import { FaSearch } from 'react-icons/fa';
import { appContext } from '../../../../appContext/appContext';
import { useContext, useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';


const Form = props => {
    const {
        movieName, setMovieName,
        movies, setMovies,
        setSpinner
    } = useContext(appContext);


    const inputValue = useRef(null);
    const isMounted = useRef(false);
    const isMoviesUpdated = useRef(false);
    const moviesRedirect = useHistory();
    const error404Redirect = useHistory();
    const emptyField = useRef();


    // Collecting the inputvalue and adding it to the setMovieName state
    const changeHandler = event => {
        inputValue.current = event.target.value;
    };

    const clickHandler = event => {
        event.preventDefault();

        // Setting input value to empty after clicking
        emptyField.current.value = '';

        setMovieName(() => {
            return inputValue.current;
        });

        if (movieName === inputValue.current) {
            return alertify.alert('Field is empty!');

        } else {
            setSpinner(() => {
                return true;
            });
        }
    };




    //This method runs only when the 'movieName' is updated
    useEffect(() => {
        if (isMounted.current) {
            const fetching = async () => {
                let allResult = '';

                // Send alert if the inputfield is empty
                if (movieName == null) return alertify.alert('Field is empty!');

                // Fetching data
                const firstResult = await axios(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MY_KEY}&s=${movieName}`);
                const secondResult = await axios(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MY_KEY}&s=${movieName}&page=2`);
                const thirdResult = await axios(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MY_KEY}&s=${movieName}&page=3`);

                if (firstResult.data.Search && secondResult.data.Search && thirdResult.data.Search) {
                    // Adding all the fetched data together
                    allResult = [...firstResult.data.Search,
                    ...secondResult.data.Search,
                    ...thirdResult.data.Search];

                } else if (firstResult.data.Search && secondResult.data.Search && !thirdResult.data.Search) {
                    allResult = [...firstResult.data.Search,
                    ...secondResult.data.Search];

                } else if (firstResult.data.Search && !secondResult.data.Search && !thirdResult.data.Search) {
                    allResult = [...firstResult.data.Search];

                } else {
                    return error404Redirect.push('/error');
                }

                setMovies(() => {
                    return allResult;
                });
            }

            fetching();
        } else {
            isMounted.current = true;
        }
    }, [movieName, setMovies, error404Redirect]);



    // Runs only when the 'movies' state is updated
    useEffect(() => {
        setSpinner(() => {
            return false;
        });

        if (isMoviesUpdated.current) {
            moviesRedirect.push("/movies");
        } else {
            isMoviesUpdated.current = true;
        }
    }, [movies, moviesRedirect, setSpinner]);



    return (
        <form className={props.Form}>
            <input
                ref={emptyField}
                className={props.FormInput}
                type="text"
                name="movieName"
                onChange={event => changeHandler(event)}
                placeholder={props.placeHolder}
            />
            <button
                className={props.FormButton}
                onClick={event => clickHandler(event)}
                type="submit">
                <FaSearch />
            </button>
        </form>
    )
};

export default Form;