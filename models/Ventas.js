const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ventasSchema = new Schema({
    fechaCreated: {
        type: Date,
        default: Date.now,
    },
    cliente: {
        type: Schema.ObjectId,
        ref: 'Clientes',
    },
    vehiculo: {
        type: Schema.ObjectId,
        ref: 'Vehiculos',
        unique: true,
    },
    vendedor: {
        type: Schema.ObjectId,
        ref: 'Vendedores',
    },
    totalAmount: {
        type: Number,
    }
});

module.exports = mongoose.model('Ventas', ventasSchema);