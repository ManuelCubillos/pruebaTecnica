const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vendedoresSchema = new Schema({
    name: {
        type: String,
        trim: true,
    },
    lastname: {
        type: String,
        trim: true,
    },
    codigo: {
        type: String,
        trim: true,
        unique: true,
        lowercase: true,
    },
    phone: {
        type: String,
        trim: true,
    },
});

module.exports = mongoose.model('Vendedores', vendedoresSchema);