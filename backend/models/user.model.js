const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password:
            {
                type: String,
                required: true,
                trim: true,
                minLength: 6, // password has to be at least six characters long
            },
        userID: // unique key for the user database
            {
                type: String,
                //required: true,
                unique: true,
                minlength: 3,
                trim: true,
            },
        role:
            {
                type: String,
                //required: true,
                trim: true,
            },
        shippingAddress:
            {
                trim: true,
                type: String,
                //required: true,
            }
    },
    {
        timestamps: true,
    });

const User = mongoose.model('User', userSchema);

module.exports = User;