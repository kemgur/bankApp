import React from 'react';
import {Card} from "react-bootstrap";
import {ListGroup,ListGroupItem} from "react-bootstrap";
import Gold01 from "../images/card/Gold01.jpeg";
import Platinum01 from "../images/card/Platinum01.jpeg";
import Silver01 from "../images/card/Silver01.jpeg";
import "./Product.css";

const cardData = [
    {
      title: "Gold Cards",
      image: Gold01,
      cards: [
        "Business Card",
        "Anatolia Express Card",
        "Secured Card",
        "Infinite Card",
      ],
      description:
        "Enjoy a 0% Intro APR on purchases and balance transfers for the first 12 billing cycles. After that, a variable APR applies $95/year there after.",
    },
    {
      title: "Platinum Cards",
      image: Platinum01,
      cards: ["Cash+ Card", "Shop & Fly Card"],
      description:
        "For a limited time, earn a $150 bonus after making $500 in eligible purchases within the first 90 days of account opening.Enjoy a 0% intro APR9 on balance transfers for the first 12 billing cycles. After that the APR is variable, currently 13.99%–23.99%.",
    },
    {
      title: "Silver Cards",
      image: Silver01,
      cards: ["Anatolia Travel Card", "Student Cash Back Credit Card"],
      description:
        "For a limited time, earn a $150 bonus after making $500 in eligible purchases within the first 90 days of account opening. Enjoy a 0% intro APR9 on balance transfers for the first 12 billing cycles. After that the APR is variable, currently 13.99%–23.99%.",
    },
  ];
  
const Product=()=> {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Gold1} />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
        </div>
    )
}

export default Product;
