import { Container, Row, Col } from "react-bootstrap";
import { useState, useMemo } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { makeStyles } from "../theme";
import EmptyCart from "../components/EmptyCart";
import ShoppingCartDetails from "../components/ShoppingCartDetails";
import OrderSummary from "../components/OrderSummary";

/* const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
    textAlign: "center",
  },
  paperTitle: {
    fontFamily: theme.fontFamily,
    paddingBottom: 16,
    marginBottom: 16,
    borderBottom: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.gray[3] : theme.colors.dark[7]
    }`,
  },
  tableRow: {
    whiteSpace: "nowrap",
    textTransform: "uppercase",
  },
  tableHead: {
    whiteSpace: "nowrap",
    textAlign: "center !important",
  },
})); */
const useStyles = makeStyles<{ color: "red" | "blue" }>()(
  (theme, { color }) => ({
    "root": {
      color,
      "&:hover": {
        "backgroundColor": theme.primaryColor
      }
    }
  })
);
const MainCart = () => {

  const [color, setColor] = useState<"red" | "blue">("red");
  const { classes } = useStyles({ color });

  useMemo(() => {
    document.title = "Cart | Pizza Ordering System";
    return () => {
      document.title = "Pizza Ordering System";
    };
  }, []);

  let subTotal = 0;
  /* if (cart && Object?.entries(cart)?.length > 0) {
    cart?.cartItems?.map((item) => {
      subTotal += item.pizza.price * item.quantity;
      return subTotal;
    });
  } */

  const { pizzas, cartItems, removeAllFromCart } = useShoppingCart();

  return (
    <Container>
      {/* {isGettingCart && <SkeletonCart />} */}
      {cartItems && Object?.entries(cartItems)?.length === 0 ? (
        <>
          <div className="py-5"></div>
          <EmptyCart />
        </>
      ) : (
        <>
          <div className="py-5"></div>
          <Row>
            <ShoppingCartDetails cartItems={cartItems} />
            <OrderSummary subTotal={subTotal} cartItems={cartItems} />
          </Row>
        </>
      )}
    </Container>
  );
};

export default MainCart;
