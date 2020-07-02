import React from "react";
import { Link } from "react-router-dom";
import { Carousel, Card, Button, Form } from "react-bootstrap";
import Rating from '@material-ui/lab/Rating';
import "./reviews.css"


export default ({ product, reviews, contentChange, starsChange, handleSubmit, content, stars}) => (
    <div className="fondo" style={{ marginLeft: '200px', paddingTop: "70px", fontWeight: "lighter" }}>
        {console.log(reviews)}
        <div style={{ display: "flex", padding: "3rem", paddingTop: "70px" }}>
            <div>
                <Carousel style={{ width: "500px", height: "400px" }}>
                    <Carousel.Item style={{ margin: "0 auto", padding: '10px', width: '100%' }}>
                        <img
                            className="d-block w-100"
                            src={product.image}
                            style={{ maxWidth: "250px", maxHeight: "300px", margin: "auto" }}
                        />
                    </Carousel.Item>
                    <Carousel.Item style={{ margin: "0 auto", padding: '10px', width: '100%' }}>
                        <img
                            className="d-block w-100"
                            src={product.secondaryimage}
                            style={{ maxWidth: "250px", maxHeight: "300px", margin: "auto" }}
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
            <div>
                <Card border="light" style={{ width: "450px", height: "400px", display: "flex" }}>
                    <Card.Body>
                        <Card.Title style={{ fontSize: "45px" }}>{product.name}</Card.Title>
                        <Card.Title>{product.price} ARS</Card.Title>
                        <Card.Text>
                            {product.description}
                            <br />
                            <br />
                            <br />
                            <Rating value={product.valoration} readOnly size="medium" />
                            <br />
                        </Card.Text>
                    </Card.Body>
                </Card>

            </div>
        </div >
        <div className="reviews">
        <Form style={{ width: "1000px" }} onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Tu review sobre el producto:</Form.Label>
                <Form.Control 
                    onChange={contentChange}
                    name="content"
                    value={content}
                    size="lg"
                    style={{ width: "1000px" }}
                    type="text" 
                    placeholder="Agregar review" />
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Valoracion:</Form.Label>
                <Form.Control as="select"
                    onChange={starsChange}
                    name="content"
                    value={stars}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
                Enviar
  </Button>
        </Form>
        </div>
    </div>
);