import { useContext, createContext, useState } from "react";
import { getData, postData, deleteData } from "../API/apiCalls";
const WebshopContext = createContext();

const WebshopProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [amountOfAllCart, setAmountOfAllCart] = useState(0);
    const [badgeContent, setBadgeContent] = useState(0);
    const [alert, setAlert] = useState([]);
    const [purchases, setPurchases] = useState([]);
    const [wines, setWines] = useState([]);


    const getWines = async () => {
        getData("wines").then(reqData => {
            const wines_ = reqData.map((wine => {
                return {
                    ...wine,
                    quantity: 1
                }
            }))
            setWines(wines_)
        }).catch((e) =>
            setAlert({ message: "Hiba történt a kérés közben!", severity: "error" }))
    }

    const formatPrice = (price) => {
        return new Intl.NumberFormat('hu-HU', {
            useGrouping: true,
            minimumIntegerDigits: 1
        }).format(price);
    };

    const updateCartStates = (data) => {
        setCartItems(data);
        setAmountOfAllCart(data.reduce((sum, item) => sum + item.price * item.quantity, 0))
        setBadgeContent(data.reduce((sum, item) => sum + item.quantity, 0))
    }
    const resetCartStates = () => {
        setCartItems([]);
        setAmountOfAllCart(0);
        setBadgeContent(0);
    }

    const getCartItems = async () => {
        getData("cart")
            .then(data => updateCartStates(data))
            .catch((e) => setAlert({ message: "Hiba történt a kosár betöltése közben!", severity: "error" }))
    }

    const addCartItems = async (data) => {
        postData("cart", data)
            .then(data => updateCartStates(data))
            .catch((e) => setAlert({ message: "Hiba történt a termék hozzáadása közben!", severity: "error" }))
    }


    const removeCartItems = async (data) => {
        deleteData("cart", data)
            .then(data => updateCartStates(data))
            .catch((e) => setAlert({ message: "Hiba történt a termékek törlése közben!", severity: "error" }))
    }

    const buyCart = async () => {
        getData("buyCart")
            .then(() => {
                setAlert({ message: "Sikeres vásárlás", severity: "success" });
                resetCartStates();
            })
            .catch((e) => setAlert({ message: "Hiba történt a vásárlás közben!", severity: "error" }))
    }

    const getPurchases = async () => {
        getData("purchases")
            .then(data => setPurchases(data))
            .catch((e) => setAlert({ message: "Hiba történt a rendelések betöltése közben!", severity: "error" }))
    }

    return (
        <WebshopContext.Provider
            value={{
                wines,
                setWines,
                getWines,
                formatPrice,
                cartItems,
                addCartItems,
                removeCartItems,
                getCartItems,
                buyCart,
                amountOfAllCart,
                badgeContent,
                alert,
                setAlert,
                purchases,
                setPurchases,
                getPurchases,
            }}>
            {children}
        </WebshopContext.Provider>
    );

};

export default WebshopProvider;

export const useWebshop = () => {
    return useContext(WebshopContext);
};