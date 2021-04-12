import React from 'react';
import './App.css';
import { useState } from 'react';
import { appContext } from './appContext/appContext';
import Header from './components/Header/Header';
import Home from './components/Main/Section/Section';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/About/About';
import SearchedResult from './components/Main/SearchedResult/SearchedResult';
import MovieInfos from './components/Main/SearchedResult/MovieInfos/MovieInfos';
import Error404 from './components/Error/Error';
import Footer from './components/Footer/Footer';
import Spinner from './components/Spinner/Spinner';


const App = () => {
  const [movieName, setMovieName] = useState(null);
  const [movies, setMovies] = useState(null);
  const [movieByID, setMovieByID] = useState(null);
  const [spinner, setSpinner] = useState(false);
  const [menu, setMenu] = useState(null);
  
  return (
    <Router>
      <div className="App">
        <appContext.Provider value={{
          movieName, setMovieName,
          movies, setMovies,
          movieByID, setMovieByID,
          spinner, setSpinner,
          menu, setMenu,
        }}>
          <Header />
          <Spinner />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/movies" exact render={() => <SearchedResult movie={"movie"} />} />
            <Route path="/series" exact render={() => <SearchedResult series={"series"} />} />
            <Route path="/about" exact component={About} />
            <Route path="/infos" exact component={MovieInfos} />
            <Route path="/error" exact component={Error404} />
          </Switch>
          <Footer />
        </appContext.Provider>
      </div>
    </Router>
  );
}


export default App;
