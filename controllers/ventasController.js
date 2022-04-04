const Ventas = require('../models/Ventas');

exports.add = async (req, res, next) => {
    try {
        const venta = new Ventas(req.body);
        await venta.save();

        res.json(venta);
    } catch (error) {
        res.status(400).json({
            message: 'Error al procesar la peticion'
        });
    }
};

exports.list = async (req, res, next) => {
    try {
        const ventas = await Ventas.find({})
        .populate('cliente')
        .populate('vehiculo')
        .populate('vendedor')

        res.json(ventas);
    } catch (error) {
        res.status(400).json({
            message: 'Error al procesar la peticion'
        });
    }
};

exports.show = async (req, res, next) => {
    try {
        const venta = await ventas.findById(req.params.id)
        .populate('cliente')
        .populate('vehiculo')
        .populate('vendedor')

        if(!venta){
            res.status(404).json({message:'La venta no existe'});
            next();
        }
        
        res.json(venta);


    } catch (error) {
        res.status(400).json({
            message: 'Error al procesar la peticion'
        });
    }
};

exports.update = async (req, res, next) => {
    try {
        const venta = await Ventas.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            { new: true },
        )
        .populate('cliente')
        .populate('vehiculo')
        .populate('vendedor')

        res.json(venta);
    } catch (error) {
        res.status(400).json({
            message: 'Error al procesar la peticion'
        });
    }
};

exports.delete = async (req, res,next) => {
    try {
        await Ventas.findOneAndDelete({ _id: req.params.id});
        res.json({ message: 'La venta ha sido eliminada'})
    } catch (error) {
        res.status(400).json({
            message: 'Error al procesar la peticion'
        });
    }
};

//Obtencion de venta que pertenece a un cliente
exports.byCliente = async(req, res, next)=>{
    try {
        const ventas= await Ventas.find({ cliente:req.params.id })
        .populate('cliente')
        .populate('vehiculo')
        .populate('vendedor')

        res.json(ventas);
    } catch (error) {
        res.status(400).json({
            message: 'Error al procesar la peticion'
        });
    }
};

//Obtencion de venta que pertenece a un vendedor
exports.byVendedor = async(req, res, next)=>{
    try {
        const ventas= await Ventas.find({ vendedor:req.params.id })
        .populate('cliente')
        .populate('vehiculo')
        .populate('vendedor')

        res.json(ventas);
    } catch (error) {
        res.status(400).json({
            message: 'Error al procesar la peticion'
        });
    }
};


