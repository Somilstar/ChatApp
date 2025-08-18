import { API_URL } from "@/constants";
import axios from "axios";

// This service handles authentication-related API calls
// It includes functions for user registration and login

export const login = async (email: string, password: string) : Promise <{token : string}> => {
    try{
        const response = await axios.post(`${API_URL}/auth/login`,{
            email,
            password
        })

        return response.data;

    }catch(error: any){
        console.log("Login failed: ", error);
        const msg = error?.response?.data?.msg || "An error occurred during login";
        throw new Error(msg);
    }
}


export const Register = async (
    email: string, 
    password: string,
    name: string,
    avatar: string | null ) : Promise <{token : string}> => {
    try{
        const response = await axios.post(`${API_URL}/auth/register`,{
            email,
            password,
            name,
            avatar
        })

        return response.data;

    }catch(error: any){
        console.log("Registration failed: ", error);
        const msg = error?.response?.data?.msg || "An error occurred during registration";
        throw new Error(msg);
    }
}