const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const vehiculosSchema = new Schema({
    referencia: {
        type: String,
        trim: true,
        unique:true,
        uppercase: true,
    },
    marca: {
        type: String,
        trim: true,
    },
    color: {
        type: String,
        trim: true,
    },
    precio: {
        type: String,
        trim: true,
    },
});

module.exports = mongoose.model('Vehiculos', vehiculosSchema);