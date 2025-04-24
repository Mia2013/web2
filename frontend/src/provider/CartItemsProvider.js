import { useContext, createContext, useState } from "react";
import { getData, postData, deleteData } from "../API/apiCalls";
const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [amountOfAllCart, setAmountOfAllCart] = useState(0);
    const [badgeContent, setBadgeContent] = useState([]);
    const [alert, setAlert] = useState([]);

    const updateCartStates = (data) => {
        setCartItems(data);
        setAmountOfAllCart(data.reduce((sum, item) => sum + item.price * item.quantity, 0))
        setBadgeContent(data.reduce((sum, item) => sum + item.quantity, 0))
    }

    const getCartItems = async () => {
        getData("cart")
            .then(data => updateCartStates(data))
            .catch((e) => setAlert({ message: "Hiba történt a kosár betöltése közben!", severity: "error" }))
    }

    const addCartItems = async (data) => {
        postData("cart", data)
            .then(() => setBadgeContent(prev => prev += data.quantity))
            .catch((e) => setAlert({ message: "Hiba történt a kérés közben!", severity: "error" }))
    }


    const removeCartItems = async (data) => {
        deleteData("cart", data)
            .then(data => updateCartStates(data))
            .catch((e) => setAlert({ message: "Hiba történt a kérés közben!", severity: "error" }))
    }



    return (
        <CartContext.Provider value={{ cartItems, addCartItems, removeCartItems, getCartItems, amountOfAllCart, badgeContent, alert, setAlert }}>
            {children}
        </CartContext.Provider>
    );

};

export default CartProvider;

export const useCart = () => {
    return useContext(CartContext);
};