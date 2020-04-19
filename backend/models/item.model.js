const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema(
    {
        ItemID:
            {
                type: String,
                required: true,
                unique: true,
                minlength: 4,
                trim: true,
            },
        ItemName:
            {
                type: String,
                required: true,
                trim: true,
            },
        Price:
            {
                type: Number,
                required: true,
                trim: true,
            },
        SellerID:
            {
                type: String,
                required: true,
                trim: true
            },
        SaleNum:
            {
                type: Number,
                required: true,
                trim: true,
            },
    },

    {
        timestamps: true,
    });

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;