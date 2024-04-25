import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import thucLogo from '../../media/images/thucLogo.png';

function Home() {
  return (
  <Container>
      <Row>
        <Col xs={12} md={12}>
          <Image src={thucLogo} />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;