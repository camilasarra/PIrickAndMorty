const { User } = require('../DB_connection')

const postUser = async (req, res) => {
    try {
        const { email, password } = req.body

        if(!email || !password){

            return res.status(400).json({ message: 'Faltan datos'})
        }

        const user = await User.findOrCreate({
            where: { email , password }
        })
        
        res.status(201).json(user)

    } catch (error){
        res.status(500).json({ message: 'Error al procesar los datos'})
    }
};

module.exports = postUser;