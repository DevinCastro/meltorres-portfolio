import React from 'react'
import '../../index.css'
import { Container, Row, Col, Button, Jumbotron } from 'reactstrap'



const Film = () => {
  return (
    <>
      <section>

        <Container>
          <h1>Video Portfolio</h1>


          <div className="space"></div>

          <Row>
            <Col md="6">
              <h3>Product Demos:</h3>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL-rULeXL4gXPCiaLNWLWGEHOW_WEBkQpi" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Col>
            <Col md="6">
              <h3>Playthroughs:</h3>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL-rULeXL4gXOUMAh4bXLr5oSebT532Qr-" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <h3>Music Videos:</h3>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL-rULeXL4gXMKGDkiTHffLi79KhEQWH4B" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Col>
            <Col md="6">
              <h3>Corporate Videos</h3>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL-rULeXL4gXMCG0nEMidCfYJd4tVXp9MI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Col>
          </Row>


          <div className="space"></div>

        </Container>
      </section>
    </>
  )
}

export default Film
