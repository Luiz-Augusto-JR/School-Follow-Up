import { api } from "../services/api";
import jwtDecode from "jwt-decode";

const { createContext, useReducer, useContext, useEffect } = require("react");

export const AuthContext = createContext();

const initialState = {
    role: null
};

function reducer(prevState, action) {
    switch (action.type) {
        case "SIGN_IN": 
            return {
                ...prevState,
                role: action.payload
            }
        case "SIGN_OUT":
            return {
                ...prevState,
                role: null
            }
        default: 
            return initialState;
    }
}

export function AuthProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const accessToken = localStorage.getItem("access-token");
        
        if (accessToken) {
            const { role } = jwtDecode(accessToken);
            api.defaults.headers["Authorization"] = `Bearer ${accessToken}`;
            dispatch({ type: "SIGN_IN", payload: role });
        }
    }, []);

    async function signIn(email, senha) {
        try {
            const accessToken = (await api.post("/auth/login", { email, senha })).data;

            localStorage.setItem("access-token", accessToken);
            api.defaults.headers["Authorization"] = `Bearer ${accessToken}`;
            const { role } = jwtDecode(accessToken);

            dispatch({ type: "SIGN_IN", payload: role });
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    function signOut() {
        localStorage.clear();
        api.defaults.headers["Authorization"] = null;

        dispatch({ type: "SIGN_OUT" });
    }

    const authActions = {
        signIn,
        signOut
    };

    return (
        <AuthContext.Provider value={{ role: state.role, authActions }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);