import { Col, Button, Card } from 'react-bootstrap';
import IPizzaData from '../types/Pizza';
import { useShoppingCart } from "../context/ShoppingCartContext";

const Product = (props: IPizzaData) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(props.pizzaId);
  
  return (
    <Card style={{ width: '15rem', margin: "10px" }}>
      <Card.Img variant="top" src={props.imageUrl} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.description}
          {props.priceMediumSize}
        </Card.Text>
        {quantity === 0 ? (
          <Button
            variant="primary"
            size="sm"
            onClick={() => increaseCartQuantity(props.pizzaId)}
          > Add to cart </Button>
        ) : (
          <div className="d-flex align-items-center flex-column" style={{ gap: "0.5rem" }}>
            <div className="d-flex align-items-cetner justify-content-center" style={{ gap: "0.5rem" }}>
              <Button variant="primary" size="sm" onClick={() => decreaseCartQuantity(props.pizzaId)}>-</Button>
              <div>
                <span className="fs-3">{quantity}</span>
                In Cart
              </div>
              <Button variant="primary" size="sm" onClick={() => increaseCartQuantity(props.pizzaId)}>+</Button>
            </div>
            <Button variant="danger" size="sm" onClick={() => removeFromCart(props.pizzaId)}> Remove </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default Product;