import React from "react";
import { Card } from "react-bootstrap";

const MoviesList = ({ movImage, title, year }) => {
    return (
        <div className='d-flex mx-auto pt-3 container-fluid'>
            <Card style={{ backgroundColor: "black", width: "100%" }} className="mx-2">
                <Card.Img variant="top" src={movImage} />
                <Card.Body className='text-light'>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text className="text-muted">
                        {year}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default MoviesList;
