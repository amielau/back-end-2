const houses = require('./controller.js');

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houses);
    },

    createHouse: (req, res) => {

    },

    updateHouse: (req, res) => {
        
    },

    deleteHouse: (req, res) => {
        
    },
}