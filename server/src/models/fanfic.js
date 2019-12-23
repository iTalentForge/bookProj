import mongoose from "mongoose";

const fanfic = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    fanfikText: {
        type: String,
        required: true
    },
    img: String,
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

export default mongoose.model("Fanfic", fanfic);