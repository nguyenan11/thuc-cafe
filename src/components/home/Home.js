import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import phinDripBackground from '../../media/images/phinDripBackground.png';

function Home() {
  return (
    <div>
      <Container fluid className="bg-black text-white">
        <Row className="px-4">
          <Col>
            <Image
              src={phinDripBackground}
              fluid
            />
          </Col>
          <Col className="my-auto home-message">
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
    </div>
  );
}

export default Home;