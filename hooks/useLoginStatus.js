import { useState, useEffect } from 'react';

export const useLoginStatus = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        const userInfo = localStorage.getItem('user');

        if (token && userInfo) {
            setUser(JSON.parse(userInfo));
            setToken(token);
            setIsLoggedIn(true);
        } else {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
        }

        setLoading(false);
    }, []);

    const login = (user, token) => {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        setUser(user);
        setToken(token);
        setIsLoggedIn(true);
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
        setToken(null);
        setIsLoggedIn(false);
    };

    return { isLoggedIn, user, token, loading, login, logout };
};

