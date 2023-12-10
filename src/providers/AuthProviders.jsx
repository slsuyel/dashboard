/* eslint-disable react/prop-types */
import { createContext, useState } from "react";


export const AuthContext = createContext(null);


const AuthProviders = ({ children }) => {
    const [isNightMode, setNightMode] = useState(false);

    const handleToggle = () => {
        setNightMode(!isNightMode);
    };

    const authInfo = {
        handleToggle,
        isNightMode
    };

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProviders;
