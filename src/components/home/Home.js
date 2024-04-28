import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import phinDripBackground from '../../media/images/phinDripBackground.png';
import Carousel from 'react-bootstrap/Carousel';
import Background1 from '../../media/images/background1.jpeg';
import Background2 from '../../media/images/background2.jpeg';
import Background3 from '../../media/images/background3.jpeg';


function Home() {
  return (
    <div>
      <Container fluid className="bg-black text-white">
        <Row>
          <Col xs={12} md={6} className="my-2">
            <Image
              src={phinDripBackground}
              fluid
            />
          </Col>
          <Col xs={12} md={6} className="my-auto home-message">
            <h1>Welcome to Thức Cafe</h1>
            <p>Passion Brewed Quality</p>
          </Col>
        </Row>
      </Container>
      <h1 className="my-5">The story begins with 4 of us</h1>
      <Container fluid>
        <Row>
          <Col xs={12} md={4} className="my-auto home-message">
            <h3>Thức Tỉnh</h3>
            <p>Feeling of enlightenment and realization; to be spiritually awaken</p>
          </Col>
          <Col xs={12} md={4} className="my-auto home-message">
            <h3>Thưởng Thức</h3>
            <p>To take time and appreciate & admire the true beauty of a form of art</p>
          </Col>
          <Col xs={12} md={4} className="my-auto home-message">
            <h3>Tri Thức</h3>
            <p>The collection of knowledge, understanding, and wisdom acquired through long-lasting learning and experience</p>
          </Col>
        </Row>
      </Container>
      <Carousel className="my-5">
      <Carousel.Item>
      <Image
              src={Background1}
              height="500"
              width="700"
            />
        <Carousel.Caption>
          <h3>Come Get Ready With Us</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image
              src={Background2}
              height="500"
              width="700"
            />       
      <Carousel.Caption>
          <h3>Sip Vietnamese Tradition</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Image
              src={Background3}
              height="500"
              width="700"
            />        
        <Carousel.Caption>
          <h3>Coming Soon</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Home;