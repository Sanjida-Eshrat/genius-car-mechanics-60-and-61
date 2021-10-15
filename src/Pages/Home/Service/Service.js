import React from 'react';
import { Card, Col , Button } from 'react-bootstrap';

const Service = (props) => {
    const {title,price,description,img} = props.service;
    return (
        <div>
            <Col>
                <Card style={{height:'500px'}}>
                    <Card.Img variant="top" src={img} style={{height:'250px'}} className="img-fluid img-style"/>
                    <Card.Body>
                        <Card.Title>{title.slice(0,25)}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        <Card.Text>Price: $ {price}</Card.Text>
                        <Button variant="dark">Details</Button>{' '}
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;