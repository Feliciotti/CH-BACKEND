import mongoose from "mongoose";

export const ROLES = ['user', 'admin'];

const roleSchema = new mongoose.Schema(
    {
        name: String,
    }
);

const Role = mongoose.model('role', roleSchema);

export { Role }