import React, { useState, createContext, useEffect } from "react";

import { useNavigate } from "react-router-dom";

export const Auth = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");

    if (recoveredUser) {
      setUser(JSON.parse(recoveredUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    console.log("login auth", { email, password });

    // api criar uma session

    const loggedUser = {
      id: "123",
      email,
    };

    localStorage.setItem("user", JSON.stringify(loggedUser));

    if (password === "secret") {
      setUser(loggedUser);
      navigate("/");
    }

    setUser({ id: "123", email });
  };
  const logout = () => {
    console.log("logout");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };
  return (
    <Auth.Provider
      value={{ authenticated: !!user, user, loading, login, logout }}
    >
      {children}
    </Auth.Provider>
  );
};
