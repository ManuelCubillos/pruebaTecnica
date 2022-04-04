const Clientes = require('../models/Clientes');

//agregar cliente
exports.add = async (req,res) => {
    const cliente = new Clientes(req.body);

    try {
        await cliente.save();
        res.json({ message: 'Nuevo cliente agregado'});
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({
                message: `Ya existe un cliente con el email: ${req.body.email}`,
            });
        }else {
            res.status(400).json({
                message: 'Error al procesar la peticion'
            });
        }
    }
};

//primera accion: list
exports.list = async (req, res) => {
    try {
        const clientes = await Clientes.find({});
        res.json(clientes);
    } catch (error) {
        console.log(error);
        res.send(error);
        next();
    }
};

// leer cliente por id
exports.show = async (req, res, next) => {
    try {
        const cliente = await Clientes.findById(req.params.id);
        if (!cliente) {
            res.status(404).json({
                message: 'El cliente no existe'
            });
        }

        res.json(cliente);
    } catch (error) {
        res.status(400).json({
            message: 'Error al procesar la peticion'
        });
    }
}

//actualizar cliente
exports.update = async (req, res, next) => {
    try {
        const cliente = await Clientes.findOneAndUpdate(
            { _id: req.params.id},
            req.body,
            {new: true}
        );
        res.json({
            message: 'Cliente actualizado correctamente'
        });
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({
                message: `Ya existe un cliente con el email: ${req.body.email}`,
            });
        }else {
            res.status(400).json({
                message: 'Error al procesar la peticion'
            });
        }  
    }
}

//eliminar cliente
exports.delete = async (req, res, next) => {
    try {
        await Clientes.findOneAndDelete({ _id: req.params.id});
        res.json({ message: 'El cliente ha sido eliminado'})
    } catch (error) {
        res.status(400).json({
            message: 'Error al procesar la peticion'
        });
    }
}


