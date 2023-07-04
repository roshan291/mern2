import CustomerModel from '../model/customer.js';

export const getCustomer = async (req, res) => {
    try {
        const customer = await CustomerModel.find();
        console.log("customer", customer);
        res.status(200).json(
            customer
        )
    } catch(error) {
        res.status(404).json({message: error.message})
    }
}

export const createCustomer = async (req, res) => {

    const post = req.body;

    const newPost = new CustomerModel(post);

    try {
        await newPost.save();
        res.status(200).json(newPost);

    } catch(error) {
        res.status(409).json({message: error.message})
    }
}