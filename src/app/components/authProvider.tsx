"use client";
import { useRouter } from "next/router";
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the context value
interface AuthContextType {
  token: string | null;
  role: string | null;
  setToken: (token: string | null) => void;
  setRole: (role: string | null) => void;
}

export const AuthContext = createContext<AuthContextType>({
  token: null,
  role: null,
  setToken: () => {},
  setRole: () => {},
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  // const router = useRouter();
  // if(!AuthContext) {
  //   router.push("/login");
  // }
  const [token, setToken] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);

  return (
    <AuthContext.Provider value={{ token, setToken, role, setRole }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
