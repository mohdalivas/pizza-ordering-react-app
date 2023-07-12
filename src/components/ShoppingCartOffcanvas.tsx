import { Button, Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utils/formatCurrency";
import { CartItem } from "./CartItem";
import { useEffect } from "react";

type ShoppingCartProps = {
    isOpen:boolean;
}
function checkout(t:number){
    alert("You have checked out of the FAKE store your total is: " + t);
}
export function ShoppingCart({ isOpen }: ShoppingCartProps){
    const { closeCart, pizzas, cartItems } = useShoppingCart();

    useEffect(()=>{
        console.log("cartItems", cartItems);
    }, []);

    return (
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap ={3}>
                    {cartItems.map(item => <CartItem key={item.id} {...item}/>)}
                    <div className="ms-auto fw-bold fs-5">
                        Total {formatCurrency(cartItems.reduce((total, cartItems) => {
                            const item = pizzas.find(i=> i.pizzaId === cartItems.id)
                            return total + (item?.priceMediumSize || 0) * cartItems.quantity;
                        }, 0))}
                    </div>
                </Stack>
                <Button onClick={() => checkout(cartItems.reduce((total, cartItems) => {
                            const item = pizzas.find(i=> i.pizzaId === cartItems.id)
                            return total + (item?.priceMediumSize || 0) * cartItems.quantity;
                        }, 0))}>
                    Checkout
                </Button>
            </Offcanvas.Body>
        </Offcanvas>
    )
}