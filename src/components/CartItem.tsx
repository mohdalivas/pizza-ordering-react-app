import { Row, Col, Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utils/formatCurrency";
import CartItemType from "../types/CartItemType";

export function CartItem({ id, quantity }: CartItemType) {
  const { pizzas, removeFromCart } = useShoppingCart();
  const item = pizzas.find((i) => i.pizzaId === id);

  if (item === null) return null;


  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item?.imageUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover", borderRadius: "18px" }}
      />
      <Row className="me-auto">
        <Col>
          {item?.name} &nbsp; 
          {quantity > 1 && (<>
            <span className="text-muted" style={{ fontSize: "0.75rem" }}>
              x {quantity} &nbsp; 
            </span>
            <span className="text-muted" style={{ fontSize: "0.75rem" }}>
              x {item && item!.priceMediumSize ? formatCurrency(item!.priceMediumSize) : ""} &nbsp; 
            </span>
          </>)}
        </Col>
        <Col>
          <div className="py-2">
            <span className="text-muted" style={{ fontSize: "0.75rem" }}>
              {item && item!.priceMediumSize ? formatCurrency(item!.priceMediumSize * quantity) : ""}
            </span>
          </div>
        </Col>
      </Row>
      <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(item!.pizzaId)}>&times;</Button>
    </Stack>
  );
}
