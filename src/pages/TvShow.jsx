import React from 'react'
import Navbar from '../components/Navbar'
import Main from '../components/TvShow/Main'
import TvShowsContainer from "../components/TvShow/TvShowsContainer"

function Home() {
    return (
      <div>
            <Navbar />
            <Main />
            <TvShowsContainer />
      </div>
    )
  }
  
  export default Home;