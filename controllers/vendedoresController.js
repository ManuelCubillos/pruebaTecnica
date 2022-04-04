const Vendedores = require('../models/Vendedores');

//agregar vendedor
exports.add = async (req,res) => {
    const vendedor = new Vendedores(req.body);

    try {
        await vendedor.save();
        res.json({ message: 'Nuevo vendedor agregado'});
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({
                message: `Ya existe un vendedor con ese codigo: ${req.body.codigo}`,
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
        const vendedores = await Vendedores.find({});
        res.json(vendedores);
    } catch (error) {
        console.log(error);
        res.send(error);
        next();
    }
};

// leer cliente por id
exports.show = async (req, res, next) => {
    try {
        const vendedor = await Vendedores.findById(req.params.id);
        if (!vendedor) {
            res.status(404).json({
                message: 'El vendedor no existe'
            });
        }

        res.json(vendedor);
    } catch (error) {
        res.status(400).json({
            message: 'Error al procesar la peticion'
        });
    }
}

//actualizar vendedor
exports.update = async (req, res, next) => {
    try {
        const vendedor = await Vendedores.findOneAndUpdate(
            { _id: req.params.id},
            req.body,
            {new: true}
        );
        res.json({
            message: 'Vendedor actualizado correctamente'
        });
    } catch (error) {
        if (error.code === 11000) {
            res.status(400).json({
                message: `Ya existe un vendedor con ese codigo: ${req.body.codigo}`,
            });
        }else {
            res.status(400).json({
                message: 'Eroor al procesar la peticion'
            });
        }  
    }
}

//eliminar vendedor
exports.delete = async (req, res, next) => {
    try {
        await Vendedores.findOneAndDelete({ _id: req.params.id});
        res.json({ message: 'El vendedor ha sido eliminado'})
    } catch (error) {
        res.status(400).json({
            message: 'Error al procesar la peticion'
        });
    }
}