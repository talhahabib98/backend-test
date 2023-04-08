
const {Logs} = require('../models')

const LogApis = async(req, res, next)=>{
    try{
        await Logs.create({route:req.originalUrl,method:req.method})
        next();

    }
    catch(e){
        res.status(400).json({error:e})
    }

}

module.exports = {LogApis}