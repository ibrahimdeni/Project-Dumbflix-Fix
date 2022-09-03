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
import serigala from "../../assets/images/serigala.png"
import grave from "../../assets/images/grave.png"
import totoro from "../../assets/images/totoro.png"
import quiet from "../../assets/images/quiet.png"
import frozen from "../../assets/images/frozen.png"
import suicide from "../../assets/images/suicide.png"

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
        {
            movImage: serigala,
            title: "Serigala Terakhir",
            year: 2009
        },
        {
            movImage: grave,
            title: "Grave of the Fireflies",
            year: 1988
        },
        {
            movImage: totoro,
            title: "My Neighbor Totoro",
            year: 1988
        },
        {
            movImage: quiet,
            title: "A Quiet Place: Part II",
            year: 2020
        },
        {
            movImage: frozen,
            title: "Frozen 2",
            year: 2019
        },
        {
            movImage: suicide,
            title: "Suicide Squad",
            year: 2016
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