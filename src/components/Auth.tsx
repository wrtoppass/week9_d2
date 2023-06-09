import React, { createContext, useState } from 'react';

type User = {
  username: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  signIn: (username: string, email: string) => void;
  signOut: () => void;
};

export const AuthContext = createContext<AuthContextType>({
  user: null,
  signIn: () => {},
  signOut: () => {},
});

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const signIn = (username: string, email: string) => {
    const newUser: User = { username, email };
    setUser(newUser);
  };

  const signOut = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};