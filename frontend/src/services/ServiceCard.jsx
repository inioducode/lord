import React from "react";
import "./service-card.css";
import { Row,Col,Card,Button,CardTitle, CardText } from "reactstrap";


const ServiceCard = ({ item }) => {
  const {  title, desc, book, href } = item;

  return (
    <Row>
  <Col className="cards" >
    <Card  className="cardbd" body>
      <CardTitle tag="h5">
        {title}
      </CardTitle>
      <CardText>
        {desc}
      </CardText>
      <Button href={href} >
        {book}
        
      </Button>
    </Card>
  </Col>
</Row>
  );
};

export default ServiceCard;
