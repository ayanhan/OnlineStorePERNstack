import React from 'react';
import {Button, Card, Col, Container, Image, Row} from "react-bootstrap";
import bigStar from '../assets/Star 1.png'

const DevicePage = () => {
  const device = {id: 1, name: "Iphone 12", price: 230000, rating: 5}
  const description = [
    {id: 1, title: 'Ram', description: '5 gb'},
    {id: 2, title: 'Camera', description: '14.1 megapixels'},
    {id: 3, title: 'CPU', description: 'intel i7 gb'},
    {id: 4, title: 'Memory', description: '128 gb'},
    {id: 5, title: 'Battery', description: '4000 mah'},
  ]
  return (
      <Container className="mt-3">
        <Row>
        <Col md={4}>
          <Image width={300} height={300} src={''} />
        </Col>
        <Col md={4}>
              <Row className="d-flex flex-column">
                <h2>{device.name}</h2>
                <div
                    className="d-flex align-items-center justify-content-center"
                    style={{background: `url(${bigStar}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64}}
                >
                  {device.rating}
                </div>
              </Row>

        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
          >
            <h3>{device.price}</h3>
            <Button variant={"outline-dark"} >Add to cart</Button>
          </Card>
        </Col>
        </Row>
        <Row className="d-flex flex-column m-3">
          <h1>Details</h1>
          {description.map((info, index) =>
            <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
              {info.title}: {info.description}
            </Row>
          )}
        </Row>
      </Container>

  );
};

export default DevicePage;
