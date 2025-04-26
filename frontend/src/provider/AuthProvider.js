import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { instance } from "../API/apiCalls";


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("bpince") || "");
    const navigate = useNavigate();


    const logIn = (res) => {
        setToken(res.token);
        localStorage.setItem("bpince", res.token);
        instance.defaults.headers.common["Authorization"] = `Bearer ${res.token}`;
    }

    const logOut = () => {
        setToken("");
        localStorage.removeItem("bpince");
        delete instance.defaults.headers.Authorization;
        navigate("/");
    };

    return (
        <AuthContext.Provider value={{ token, logIn, logOut }}>
            {children}
        </AuthContext.Provider>
    );

};

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
};