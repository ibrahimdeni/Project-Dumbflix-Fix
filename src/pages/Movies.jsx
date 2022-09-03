import React from 'react'
import Navbar from '../components/Navbar'
import Main from '../components/Movies/Main'
import MoviesContainer from "../components/Movies/MoviesContainer"

function Home() {
    return (
      <div>
            <Navbar />
            <Main />
            <MoviesContainer />
      </div>
    )
  }
  
  export default Home;