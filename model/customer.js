import mongoose from "mongoose";

const customerSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFiel: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
})



const CustomerModel = mongoose.model('CustomerModel', customerSchema);

export default CustomerModel;