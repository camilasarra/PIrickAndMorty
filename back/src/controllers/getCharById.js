const axios = require("axios")
//axios(`https://rym2.up.railway.app/api/character/${id}?key=camilasarra`)
//https://rym2.up.railway.app/api/character/
const API_KEY = 'camilasarra'
//const errorHandler = require('../utils/errors')

const getCharById = async (req, res) => {
  
  const { id } = req.params
  

  try {
            const response = await axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-camilasarra`)
            
            const {name, species, status, gender, origin, image } = response.data

            const character = { id, name, species, status, gender, origin, image }
       
            if(character.id) return res.status(200).json(character)
            else throw Error('Character not found')
       
         } catch (error) {
          console.log(error)
           //errorHandler(res, error)
         }
            
    };
    
module.exports = getCharById