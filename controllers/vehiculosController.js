const Vehiculos = require('../models/Vehiculos');

//agregar vehiculo
exports.add = async (req, res) => {
    const vehiculo = new Vehiculos(req.body);

    try {
        await vehiculo.save();
        res.json({ message: 'Nuevo vehiculo agregado'});
    } catch (error) {
        if (error.code ===11000) {
            res.status(400).json({
                message: `Ya existe un vehiculo con la referencia ${req.body.referencia}`,
            });
        }else {
            res.status(400).json({
                message: 'Error al procesar la peticion'
            });
        }
        
    }
};

//listar vehiculos
exports.list = async (req, res) => {
    try {
        const vehiculos = await Vehiculos.find({});
        res.json(vehiculos);
    } catch (error) {
        res.status(400).json({
            message: 'Error al procesar la peticion'
        });
        next();
    }
};

//leeer vehiculos por id
exports.show = async (req, res, next) => {
    try {
        const vehiculo = await Vehiculos.findById(req.params.id);
        if(!vehiculo) {
            res.status(404).json({
                message: 'El vehiculo no existe'
            });
        }
        res.json(vehiculo);
    } catch (error) {
        res.status(400).json({
            message: 'Error al procesar la peticion'
        });
    }
};

//Actualizar vehiculo
exports.update = async (req, res, next) => {
    try {
        const vehiculo = await Vehiculos.findOneAndUpdate(
            { _id: req.params.id},
            req.body,
            {new: true}
        );
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({
                message: `Ya existe un vehiculo con la referencia ${req.body.referencia}`,
            });
        }else {
            res.status(400).json({
                message: 'Error al procesar la peticion'
            });
        }
        
    }
};

//eliminar vehiculo
exports.delete = async (req, res, next) => {
    try {
        await Vehiculos.findOneAndDelete({ _id: req.params.id});
        res.json({ message: 'El vehiculo ha sido eliminado'});
    } catch (error) {
        res.status(400).json({
            message: 'Error al procesar la peticion'
        });
        
    }
}

