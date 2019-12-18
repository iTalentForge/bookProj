import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import uniqueValidator from "mongoose-unique-validator";

const schema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            lowercase: true,
            index: true,
            unique: true
        },
        passwordHash: {
            type: String,
            required: true
        },
        confirmed: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
);

schema.methods.isValidPassword = function isValidPassword(password) {
    let valid = password == this.passwordHash ? true : false;
    return valid;
}
//maybe
schema.methods.setPassword = function setPassword(password) {
    this.passwordHash = password;
}

schema.methods.generateJWT = function generateJWT() {
    return jwt.sign({
        email: this.email
    }, 
    process.env.JWT_SECRET
    );
}

schema.methods.toAuthJSON = function toAuthJSON() {
    return {
        email: this.email,
        confirmed: this.confirmed,
        token: this.generateJWT()
    };
};

schema.plugin(uniqueValidator, { message: 'This email is already taken' });

export default mongoose.model('User', schema);