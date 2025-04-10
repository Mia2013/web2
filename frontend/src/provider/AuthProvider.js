import { useContext, createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("site") || "");

    const logIn = (res) => {
        setToken(res.token);
        localStorage.setItem("bpince", res.token);
    }

    const logOut = () => {
        setToken("");
        localStorage.removeItem("bpince");
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