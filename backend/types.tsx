import mongoose = require("mongoose");


export interface UserProps extends Document{
    [x: string]: any;
    email: string;
    password: string;
    name?: string;
    avatar?: string;
    createdAt: Date;
}

export interface ConversationProps extends Document{
    _id: mongoose.Types.ObjectId;
    type: "direct" | "group";
    name?: string;
    participants: mongoose.Types.ObjectId[];
    lastMessage?: mongoose.Types.ObjectId;
    createdBy: mongoose.Types.ObjectId;
    avatar?: string;
    createdAt: Date;
    updaedAt: Date;
}