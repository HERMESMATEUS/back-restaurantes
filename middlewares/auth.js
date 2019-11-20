'use strict'

const jwt = require('jwt')
const moment = require('moment')
const config = require('../config')


function isAuth ( req, res, next){
    if(!req.headers.autorization){
        return res.status(403).send({message:'no tiene acceso'});
    }

    const token = req.headers.autorization.split(" ")[1];
    const payload = jwt.decode(token, config.SECRET_TOKEN)
    

}