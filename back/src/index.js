require('dotenv').config()
const server = require('./app')
const { sequelize } = require('./DB_connection');

const { PORT } = process.env


server.listen(PORT, async ()=> {
    await sequelize.sync( {force: true})
    console.log('Sever is listening')
})




          
