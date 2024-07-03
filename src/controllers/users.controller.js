const User = require('../models/user');

exports.togglePremium = async (req, res, next) => {
    const userId = req.params.userId;

    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        // Cambia el rol del usuario
        user.role = user.role === 'user' ? 'premium' : 'user';
        await user.save();

        res.status(200).json({ message: `Rol de usuario actualizado a ${user.role}` });
    } catch (error) {
        console.error('Error al cambiar el rol de usuario:', error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
};
