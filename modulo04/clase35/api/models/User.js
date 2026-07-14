import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
})

const User = mongoose.model("usuarios", userSchema)

export default User;