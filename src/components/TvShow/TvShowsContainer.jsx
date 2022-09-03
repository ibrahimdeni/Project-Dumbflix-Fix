import React from 'react';
import { useState } from 'react';
import { Row, Col, CardGroup } from "react-bootstrap";
import MoviesList from './MoviesList'
import witcher from "../../assets/images/witcher.png"
import p3 from "../../assets/images/p3.png"
import got from "../../assets/images/got.png"
import moneyheist from "../../assets/images/moneyheist.png"
import touch from "../../assets/images/touch.png"
import arrow from "../../assets/images/arrow.png"
import you from "../../assets/images/you.png"
import castlevania from "../../assets/images/castlevania.png"
import theoa from "../../assets/images/theoa.png"
import locke from "../../assets/images/locke.png"
import reply from "../../assets/images/reply1988.png"
import panji from "../../assets/images/panji.png"

const MovielistContainer = () => {
    const [movieList, setMovieList] = useState([
        {
            movImage: witcher,
            title: "The Witcher",
            year: 2019
        },
        {
            movImage: p3,
            title: "Persona 3 The Movie",
            year: 2016
        },
        {
            movImage: got,
            title: "Game of Thrones",
            year: 2011
        },
        {
            movImage: moneyheist,
            title: "Money Heist",
            year: 2017
        },
        {
            movImage: touch,
            title: "Touch",
            year: 2020
        },
        {
            movImage: arrow,
            title: "Arrow",
            year: 2012
        },
        {
            movImage: you,
            title: "You",
            year: 2018
        },
        {
            movImage: castlevania,
            title: "Castlevania",
            year: 2017
        },
        {
            movImage: theoa,
            title: "The OA",
            year: 2016
        },
        {
            movImage: locke,
            title: "Locke & Key",
            year: 2020
        },
        {
            movImage: reply,
            title: "Reply 1988",
            year: 2015
        },
        {
            movImage: panji,
            title: "Panji Manusia Milenium",
            year: 1999
        },
    ]);

    return (
        <div style={{ backgroundColor: "black" }} className='pt-5 px-5'>
        <CardGroup style={{ backgroundColor: "black" }}>
                <h3 className="text-start text-white fw-bold mb-3">TV Series</h3>
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