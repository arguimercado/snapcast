import mongoose, { Document, Schema } from 'mongoose';

export interface IUser {
   id: string;
   name: string;
   email: string;
   emailVerified: boolean;
   image?: string | null | undefined;
   createdAt: Date;
   updatedAt: Date;
}


interface IUserDocument extends Document {
   name: string;
   email: string;
   emailVerified: boolean;
   image?: string;
   createdAt: Date;
   updatedAt: Date;
}

const UserSchema = new Schema<IUserDocument>({
   name: { type: String, required: true },
   email: { type: String, required: true, unique: true },
   emailVerified: { type: Boolean, default: false },
   image: { type: String },
   createdAt: { type: Date, default: Date.now },
   updatedAt: { type: Date, default: Date.now },
}, {
   timestamps: true,
   collection: 'users',
});

export const UserModel: mongoose.Model<IUserDocument> = mongoose.models.User || mongoose.model<IUserDocument>('User', UserSchema);