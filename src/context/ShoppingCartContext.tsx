import { createContext, ReactNode, useContext, useRef, useState, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import IPizzaData from '../types/Pizza';
import PizzaDataService from '../services/PizzaService';
import CartItemType from "../types/CartItemType";

type ShoppingCartProviderProps = {
  theme?: any;
  children: ReactNode;
};
type ShoppingCartContext = {
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  removeAllFromCart: () => void;
  pizzas: IPizzaData[];
  cartQuantity: number;
  cartItems: CartItemType[];
};
const pizzasArray: Array<IPizzaData> = [];
const ShoppingCartContext = createContext({} as ShoppingCartContext);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const initialized = useRef(false)
  const [isOpen, setIsOpen] = useState(false);
  const [pizzas, setPizzas] = useState(pizzasArray);
  const [cartItems, setCartItems] = useLocalStorage<CartItemType[]>("shopping-cart", []);

  const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id: number) {
    // console.log("id", id)
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeAllFromCart() {
    setCartItems((currItems) => []);
  }

  function removeFromCart(id: number) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  const retrievePizzas = () => {
    PizzaDataService.getAll().then((response: any) => {
      console.log("response.data", response.data);
      setPizzas(response.data);
    }).catch((e: Error) => {
      console.log(e);
    });
  };

  /* StrictMode renders components twice (on dev but not production) 
  in order to detect any problems with your code and warn you about 
  them (which can be quite useful). */
  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true
      console.log("Component did mount")
      retrievePizzas();
    }
  }, []);
  // useEffect(() => console.log(cartItems), [cartItems])

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        removeAllFromCart,
        openCart,
        closeCart,
        pizzas,
        cartItems,
        cartQuantity
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
