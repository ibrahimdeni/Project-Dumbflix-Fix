import React from 'react'
import Navbar from '../components/Navbar'
import Main from '../components/Home/Main'
import TvShowsContainer from "../components/Home/TvShowsContainer"
import MoviesContainer from "../components/Home/MoviesContainer"

function Home() {
    return (
      <div>
            <Navbar />
            <Main />
            <TvShowsContainer />
            <MoviesContainer />
      </div>
    )
  }
  
  export default Home;