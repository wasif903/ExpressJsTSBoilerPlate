import User from "../models/UserSchema";
import { Request, Response } from "express";

const HandleSignup = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email, password, phone } = req.body;


        // Check if user already exists
        const userExists = await User.findOne({ email });

        if (userExists) {
            res.status(400).json({ message: "User Already Exists" });
            return;
        }

        const createUser = new User({
            name,
            email,
            password,
            phone,
        });

        const savedUser = await createUser.save();

        const token = {
            _id: savedUser._id,
            email: savedUser.email,
            name: savedUser.name,
            phone: savedUser.phone,
        };

        res.status(200).json({ message: "Registered Successfully", token });
    } catch (error) {
        console.error("Error during signup:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

export { HandleSignup };
