'use strict'

const Generals = require('./Generals');
const Plates = require('./Plates');
const Authentication = require('./Authentication');

const api = app => {
    Generals(app),
    Plates(app),
    Authentication(app)
}
module.exports = api