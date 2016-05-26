'use strict'
const Mongorito = require('mongorito')

module.exports = class Department extends Mongorito.Model {
    get collection() { 
        return 'departments';
    }
    
    static getConnectionUrl() {
        let auth = process.env.MONGO_USER && process.env.MONGO_PASSWORD ? `${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@` : "";
        return `mongodb://${auth}${process.env.MONGO_HOST}:${process.env.MONGO_PORT || 27017}/${process.env.MONGO_DB}`;
    }
}