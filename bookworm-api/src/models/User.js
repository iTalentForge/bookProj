import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const schema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            lowercase: true,
            index: true
        },
        passwordHash: {
            type: String,
            required: true
        },
    },
    { timestamps: true }
);

schema.methods.isValidPassword = function isValidPassword(password) {
    let valid = password == this.passwordHash ? true : false;
    return valid;
}

schema.methods.generateJWT = function generateJWT() {
    return jwt.sign({
        email: this.email
    }, process.env.JWT_SECRET)
}

schema.methods.toAuthJSON = function toAuthJSON() {
    return {
        email: this.email,
        token: this.generateJWT()
    }
}

export default mongoose.model('User', schema);