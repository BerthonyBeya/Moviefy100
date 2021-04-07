import './SearchedResult.css';
import DisplayMovie from './DisplayMovie/DisplayMovie';
import { appContext } from '../../../appContext/appContext';
import { useContext } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';


const SearchedResult = props => {
    const { movies, setMovies } = useContext(appContext);
    const movie = props.movie;
    const series = props.series;

    let moviesOrSeries = movie ? movie : series;
    
    const display = () => {
        if (movies !== null) {
            const allMovies = movies.map(movie => {
                return <DisplayMovie Poster={movie.Poster} id={movie.imdbID} key={movie.imdbID} />
            });
            return allMovies;

        } else {

            const fetching = async () => {
                let allResult = '';

                try {
                    // Fetching data
                    const firstResult = await axios(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MY_KEY}&type=${moviesOrSeries}&s=avengers`);
                    const secondResult = await axios(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MY_KEY}&type=${moviesOrSeries}&s=friends`);
                    const thirdResult = await axios(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MY_KEY}&type=${moviesOrSeries}&s=superman`);

                    if (firstResult.data.Search && firstResult.data.Search && thirdResult.data.Search) {
                        // Adding all the fetched data together
                        allResult = [...firstResult.data.Search,
                        ...secondResult.data.Search,
                        ...thirdResult.data.Search];


                    } else if (firstResult.data.Search && firstResult.data.Search && !thirdResult.data.Search) {
                        allResult = [...firstResult.data.Search,
                        ...secondResult.data.Search];

                    } else if (firstResult.data.Search && !firstResult.data.Search && !thirdResult.data.Search) {
                        allResult = [...firstResult.data.Search];
                    }

                    setMovies(() => {
                        return allResult;
                    });

                    const theMovies = movies.map(movie => {
                        return <DisplayMovie Poster={movie.Poster} key={movie.imdbID} />
                    });

                    return theMovies;

                } catch (err) {
                    console.log(err);
                };
            };

            fetching();
        };
    };

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" lang="en" />
                <title>results | Moviefy100 </title>
                <meta name="description" content="Welcome to moviefy100 results page.
                 This is the result of whatever it is you're looking for. enjoy!
                " />
            </Helmet>
            <section className='SearchedResult'>
                {display()}
            </section>
        </>
    )
};

export default SearchedResult;