import { useRef } from "react";
import { Form, Image, Card, Button } from "react-bootstrap";
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useTheme, makeStyles } from "../theme";
import { useForm, SubmitHandler } from "react-hook-form"
import { formatCurrency } from "../utils/formatCurrency";
import CartItemType from "../types/CartItemType"

const useStyles = makeStyles()(
    (theme) => ({
        "root": { "&:hover": { "backgroundColor": theme.primaryColor } },
        wrapper: {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: `6px 6px`,
            borderRadius: `18px`,
            border: `1px solid #B2BEB5`,
            backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[5] : "#e9e9ec",
        },
        input: {
            textAlign: "center",
            paddingRight: `6px !important`,
            paddingLeft: `6px !important`,
            height: 28,
            width: 55,
        },
        control: {
            backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[7] : "#cbcbcb",
            border: `1px solid #B2BEB5`,
            "&:disabled": {
                borderColor: "transparent",
                opacity: theme.colorScheme === "dark" ? 0.8 : 1,
                backgroundColor: "transparent",
            },
        },
        ProductDetailsTD: {
            width: 450,
        },
    })
);
const MainCartItem = ({ id, quantity }: CartItemType) => {
    const { classes } = useStyles();
    const qtyRef = useRef();
    const theme = useTheme();

    const { pizzas, increaseCartQuantity, decreaseCartQuantity } = useShoppingCart();
    let pizza = pizzas.find(pizza=>pizza.pizzaId == id);
    let totalPrice = pizza?.priceMediumSize ? quantity * pizza?.priceMediumSize : 0;

    const form = useForm({
        defaultValues: {
            cartId: id,
            pizzaId: id,
            quantity: quantity,
        },
    });
    const formOfRemoveItem = useForm({
        defaultValues: {
            cartId: id,
            pizzaId: id,
        },
    });

    return (
        <tr key={id}>
            <td className={classes.ProductDetailsTD}>
                <Form.Group>
                    <Image
                        src={pizza?.imageUrl}
                        width={120}
                        height={90}
                    />
                    <Card.Title>
                        {pizza?.name}
                    </Card.Title>
                </Form.Group>
            </td>
            <td>
                <Form.Text>{formatCurrency(pizza?.priceMediumSize)}</Form.Text>
            </td>
            <td>
                <Form.Group>
                    <div className={classes.wrapper}>
                        <Button
                            variant="transparent"
                            size="sm"
                            disabled={form.getValues('quantity') === 1}
                            onClick={() => decreaseCartQuantity(id)}
                        >
                            <HiOutlineMinus />
                        </Button>
                        <Form.Control
                            size="sm"
                            type="text"
                            placeholder="Small text"
                            min={1}
                            value={quantity}
                            onChange={(e: any) => {
                                if (isNaN(e)) return;
                                form.setValue("quantity", e);
                            }}
                            className="text-center"
                        />
                        <Button
                            variant="transparent"
                            size="sm"
                            onClick={() => increaseCartQuantity(id)}
                        >
                            <HiOutlinePlus/>
                        </Button>
                    </div>
                </Form.Group>
            </td>
            <td>
                <Form.Text>{formatCurrency(totalPrice)}</Form.Text>
            </td>
            <td>
                <IoClose />
                {/* <ActionIcon
                    size={28}
                    variant="transparent"
                    onClick={() => {
                        dispatch(removeFromCart(formOfRemoveItem.values));
                    }}
                    className={classes.control}
                >
                    <IoClose />
                </ActionIcon> */}
            </td>
        </tr>
    );
};

export default MainCartItem;
