const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const marketSchema = new Schema(
    {
        ItemID:
            {
                type: String,
                required: true,
                unique: true,
                minlength: 4,
                trim: true
            },
        ItemName:
            {
                type: String,
                required: true,
                trim: true,

            },
        URL:
            {
                type: String,
                required: true,
                trim: true,
            },
        Description:
            {
                type: String,
                required: true,
                trim: true,
            },
    },
    {
        timestamps: true,
    });


const Market = mongoose.model('Market', marketSchema);


module.exports = Market;