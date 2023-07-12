import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext"
import { NavLink } from "react-router-dom"

const NavbarComponent = () => {
  const { cartQuantity } = useShoppingCart();

  return (
    <NavbarBs fixed="top" className="bg-body-tertiary py-0">
      <Container>
        <Nav className="me-auto">
          <NavbarBs.Brand href="#/">Pizza Hub</NavbarBs.Brand>
          <NavbarBs.Toggle>Navbar Toggle</NavbarBs.Toggle>
          <Nav.Link to={"/orderlist"} as={NavLink}>Order List</Nav.Link>
        </Nav>
        <Nav className="ms-auto">

          <NavbarBs.Collapse className="justify-content-end">
            <NavbarBs.Text className="py-0">
              <Nav.Link to={"/cart"} as={NavLink} className="py-0">
                <Button
                  // onClick={openCart}
                  style={{ width: "3rem", height: "3rem", position: "relative" }}
                  variant="outline-primary"
                  className="rounded-circle">
                  <svg fill="currentColor" viewBox="0 0 16 16"> <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" /> </svg>
                  {cartQuantity > 0 && (
                    <div className="rounded-circle bg-danger d-flex justify-content-center align-items-center" style={{ color: "white", width: "1.5rem", height: "1.5rem", position: "absolute", bottom: 0, right: 0, transform: "translate(25%,25%)" }} >
                      {cartQuantity}
                    </div>
                  )}
                </Button>
              </Nav.Link>
            </NavbarBs.Text>
            <NavbarBs.Text className="mx-3">
              Signed in as: <a href="#/login"> User 1</a>
            </NavbarBs.Text>
          </NavbarBs.Collapse>
        </Nav>
      </Container>
    </NavbarBs>
  );
};
export default NavbarComponent;
