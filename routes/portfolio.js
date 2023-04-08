const express = require('express')
const {Projects} = require('../models')

const router = express.Router()

router.post('/',async (req, res) => {
    try{
       const _params = {...req.body}
       const projects = await  Projects.create({name:_params.name,description:_params.description,})
       return res.status(201).json({projects})

    }
    catch(e){
        res.status(400).json({error:e})

    }
})

router.get('/',async (req, res) => {
    try{

       const projects = await  Projects.findAll()
       return res.status(200).json({projects})
    }
    catch(e){
        res.status(400).json({error:e})

    }
})



 module.exports =router