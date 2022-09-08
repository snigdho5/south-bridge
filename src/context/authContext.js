import React from 'react';
import useLocalStorage from '../utils/useLocalStore';

const initialState = {
    user: undefined,
}

export const AuthContext = React.createContext();

const AuthReducer = (prevState, action) => {
    switch (action.type) {
        case 'USER':
            return {
                ...prevState,
                user: action.user,
            };
    }
}

export const AuthProvider = (props) => {
    const [authData, setAuthData] = useLocalStorage(
        "auth",
        JSON.stringify(initialState)
    );

    const [state, dispatch] = React.useReducer(AuthReducer, JSON.parse(authData));
    React.useEffect(() => {
        setAuthData(JSON.stringify(state));
    }, [state, setAuthData]);

    const value = React.useMemo(
        () => ({
            ...state,
            setUser: async (user) => {
                dispatch({ type: 'USER', user });
            },
        }),
        [state],
    );

    return (
        <AuthContext.Provider value={{ ...value }}>
            {props.children}
        </AuthContext.Provider>
    )
}


export const useAuth = () => {
    const context = React.useContext(AuthContext);
    if (context === undefined) {
        throw new Error(`useAuth must be used within a Provider`);
    }
    return context;
};


