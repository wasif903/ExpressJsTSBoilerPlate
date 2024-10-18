import { Schema, model, connect } from 'mongoose';

interface IUser {
    name: string;
    email: string;
    avatar?: string;
    phone: number;
    password: string;
}

const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    avatar: {
        type: String,
        default: 'https://res.cloudinary.com/dhuhpslek/image/upload/fl_preserve_transparency/v1712595866/profile_demo_image_g57r6t.jpg?_s=public-apps'
    },
    phone: {
        type: Number,
    },
    password: {
        type: String,
        required: true
    }
});

// 3. Create a Model.
const User = model<IUser>('User', userSchema);
export default User;
