import { Col, Card, Table, Nav, Navbar, Form } from "react-bootstrap";
import CartItemType from "../types/CartItemType";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { makeStyles } from "../theme";
import { useShoppingCart } from "../context/ShoppingCartContext";
import MainCartItem from "./MainCartItem";
import { NavLink } from "react-router-dom"

type Props = {
    cartItems: CartItemType[]
}
const ShoppingCartDetails = (props: Props) => {
    const useStyles = makeStyles()(
        (theme) => ({
            "root": { "&:hover": { "backgroundColor": theme.primaryColor } },
            "paper-title": {
                fontFamily: theme.fontFamily,
                paddingBottom: 16,
                marginBottom: 16,
                borderBottom: "1px solid black",
            },
            "table-row": {
                whiteSpace: "nowrap",
                textTransform: "uppercase",
            },
            "table-head": {
                whiteSpace: "nowrap",
                /* textAlign: "center !important", */
            },
        })
    );
    const { classes } = useStyles();
    const { cartItems } = useShoppingCart();

    return <Col sm={8}>
        <Card className="p-3" style={{ backgroundColor: "#fff" }}>
            <Card.Title className={classes["paper-title"]}>
                Shopping Cart
            </Card.Title>
            {/* <hr/> */}
            <div style={{ overflowX: "auto", }} className="responsive-table">
                <Table>
                    <thead>
                        <tr className={classes["table-row"]}>
                            <th className={classes["table-head"]}>Product Details</th>
                            <th className={classes["table-head"]}>Price</th>
                            <th className={classes["table-head"]}>Quantity</th>
                            <th className={classes["table-head"]}>Total</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody style={{ position: "relative" }}>
                        {/* <Spinner/> */}
                        {cartItems.map((item) => (
                            <MainCartItem id={item.id} quantity={item.quantity} />
                        ))}
                    </tbody>
                </Table>
            </div>
            <Nav.Link to={"/"} as={NavLink} style={{ color: "inherit", textDecoration: "none" }}>
                <Form.Group>
                    <FaLongArrowAltLeft size={18} />
                    <Navbar.Text>Continue Shopping</Navbar.Text>
                </Form.Group>
            </Nav.Link>
        </Card>
    </Col>
}
export default ShoppingCartDetails;