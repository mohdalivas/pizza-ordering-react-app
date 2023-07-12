import { ReactNode, useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import Product from "../components/Product";
import Cart from "../components/Cart";
import IPizzaData from '../types/Pizza';
import { useShoppingCart } from "../context/ShoppingCartContext"

const pizzasArray: Array<IPizzaData> = [];

const MainPage = () => {
  const { pizzas } = useShoppingCart();

  return (
    <Container style={{ marginTop: "100", paddingTop: "60px", backgroundColor: "#EEE" }}>
      <Row>
        <Col xs sm={8} lg={8}>
          <h3>Pizza</h3>
        </Col>
        <Col xs sm={4} lg={4}>
          <div>
            <h4>Information</h4>
          </div>
        </Col>
        <Col xs sm={8} lg={8}>
          <Card style={{ backgroundColor: "#EEE" }}>
            <Row>
              {pizzas.length &&
                pizzas.map((item, i) =>
                  <Col key={i}>
                    <Product { ...item } />
                  </Col>
                )
              }
            </Row>
          </Card>
        </Col>
        <Col xs sm={4} lg={4}>
          <Card style={{ backgroundColor: "#EEE" }}>
            <Cart />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default MainPage;
