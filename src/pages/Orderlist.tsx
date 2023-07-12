import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "../components/CartItem";
import IOrderLineData from '../types/OrderLine';
import IOrderData from '../types/Order';
import OrdeDataService from '../services/OrderService';
import EmptyCart from '../components/EmptyCart';

const Orderlist = () => {
  const { pizzas, cartItems, removeAllFromCart } = useShoppingCart();

  function checkout() {
    let total: number = cartItems.reduce((total, cartItems) => {
      const item = pizzas.find(i => i.pizzaId === cartItems.id)
      total = total + (item?.priceMediumSize || 0) * cartItems.quantity
      return total;
    }, 0)
    let orderLines: IOrderLineData[] = [];
    cartItems.forEach(item => {
      let pizza = pizzas.find(pizza => pizza.pizzaId === item.id)
      if (pizza) {
        orderLines.push({
          pizzaId: item.id,
          size: 'medium',
          quantity: item.quantity,
          totalPrice: pizza.priceMediumSize * item.quantity
        })
      }
    });
    console.log("orderLines", orderLines);
    console.log("Checked out total is: " + total);
    const order: IOrderData = {
      status: 'Pending',
      totalAmount: total,
      orderLines: orderLines
    }
    console.log("order", order);
    OrdeDataService.createOrder(order).then(response => {
      console.log('createOrder response', response)
      if (response.status === 201) {
        alert("Thanks, Your Order has been placed successfully.")
        removeAllFromCart()
      }
    }).catch(error => {
      console.log('createOrder error', error)
    });
  }

  return (
    <Card style={{ margin: "10px" }}>
      <Card.Body>
        <Card.Title>Your Order</Card.Title>
        <Card.Text>
          {cartItems.length === 0 ? (
            <EmptyCart />

          ) : (
            <>
              {cartItems.map(item => <CartItem key={item.id} {...item} />)}
            </>
          )}
        </Card.Text>
        <div>
          <ListGroup className="list-group list-group-flush">
            <ListGroup.Item as="li" >Min. Order:</ListGroup.Item>
            <ListGroup.Item as="li">Delivery Charge:</ListGroup.Item>
            <ListGroup.Item as="li" >I have coupon:</ListGroup.Item>
          </ListGroup>
        </div>
        <Button
          variant="primary"
          onClick={() => checkout()}
          style={{ marginTop: "20px" }}
        >Create Order</Button>
      </Card.Body>
    </Card>
  );
}

export default Orderlist;