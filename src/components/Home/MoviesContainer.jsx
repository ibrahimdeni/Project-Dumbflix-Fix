import React from 'react';
import { useState } from 'react';
import { Row, Col, CardGroup } from "react-bootstrap";
import MoviesList from './MoviesList'
import tgf from "../../assets/images/tgf.png"
import batman from "../../assets/images/batman.png"
import avenger from "../../assets/images/avenger.png"
import joker from "../../assets/images/joker.png"
import parasite from "../../assets/images/parasite.png"
import chernobyl from "../../assets/images/chernobyl.png"

const MovielistContainer = () => {
    const [movieList, setMovieList] = useState([
        {
            movImage: tgf,
            title: "The GodFather",
            year: 1972
        },
        {
            movImage: batman,
            title: "The Dark Knight",
            year: 2008
        },
        {
            movImage: avenger,
            title: "Avengers: Endgame",
            year: 2019
        },
        {
            movImage: joker,
            title: "Joker",
            year: 2019
        },
        {
            movImage: parasite,
            title: "Gisaengchung",
            year: 2019
        },
        {
            movImage: chernobyl,
            title: "Chernobyl",
            year: 2019
        },
    ]);

    return (
        <div style={{ backgroundColor: "black" }} className='py-5 px-5'>
        <CardGroup style={{ backgroundColor: "black" }}>
                <h3 className="text-start text-white fw-bold mb-3">Movies</h3>
                <Row className="row row-col-6">
                    {movieList.map((movie, index) => (
                        <Col>
                            <MoviesList
                                movImage={movie.movImage}
                                title={movie.title}
                                year={movie.year}
                            />
                        </Col>
                    ))}
                </Row>
        </CardGroup>
        </div>
    );
};

export default MovielistContainer;