import { AuthContextProps, DecodedTokenProps, UserProps } from "@/types";
import { useRouter } from "expo-router";
import { createContext, ReactNode, use, useContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {jwtDecode} from "jwt-decode";
import { login } from "@/services/authService";
import { Register } from "@/services/authService";
import React from "react";


export const AuthContext = createContext<AuthContextProps>({
    token: null,
    user: null,
    signIn: async () => {},
    signUp: async () => {},
    signOut: async () => {},
   updateToken: async () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {

    const [token, setToken] = useState<string | null>(null);
    const [user, setUser] = useState<UserProps| null>(null);
    const router  = useRouter();

    const updateToken = async (token: string) =>{
        if(token){
            setToken(token);
            await AsyncStorage.setItem("token", token);
            const decoded = jwtDecode<DecodedTokenProps>(token);
            console.log("decoded token: ", decoded);
            setUser(decoded.user);
        }
    }

    const signIn = async (email: string, password: string) => {
        const response = await login(email,password);
        await updateToken(response.token);
        router.replace('/main/home');
    };

    const signUp = async (email: string, password: string, name: string, avatar?: string) => {
        const response = await Register(email, password, name, avatar ?? null);
        await updateToken(response.token);
        router.replace('/main/home');
    }

    const signOut = async () => {
        setToken(null);
        setUser(null);
        await AsyncStorage.removeItem("token");
        router.replace('/(auth)/Login');
    };


return React.createElement( AuthContext.Provider, { value: { token, user, signIn, signUp, signOut, updateToken } }, children );
 
};

export const useAuth = () => useContext(AuthContext);

