import { Request, Response } from "express";
import User from "../modals/User"; // Assuming you have a User model defined
import bcrypt from "bcryptjs";
import { generateToken } from "./utils/token";

export const registerUser = async (req: Request, res: Response) : Promise<void> => {
    const {email, password, name, avatar} = req.body;
    try{
        let user = await User.findOne({ email });
        if (user) {
            res.status(400).json({ success: false, msg: "User already exists" });
            return;
        }
        // Create a new user
        user = new User({
            email,
            password,
            name,
            avatar : avatar || "",
        });
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();
        const token = generateToken(user);
        res.json({ success: true, token  });
        

    }catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({success: false, msg: "Server error"});
    }
};


export const loginUser = async (req: Request, res: Response) : Promise<void> => {
    const {email, password} = req.body;
    try{
        const user = await User.findOne({ email });
        if (!user) {
            res.status(400).json({ success: false, msg: "Invalid credentials" });
            return;
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            res.status(400).json({ success: false, msg: "Invalid credentials" });
            return;
        }
          const token = generateToken(user);
        res.json({ success: true, token  });

    }catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({success: false, msg: "Server error"});
    }
};
// For example, you might add password reset or profile update routes.

// Additional route handlers can be added here as needed
