'use strict';

const express = require('express');
const router = express.Router();
var createError = require('http-errors');

const Agente = require('../../models/Agente');

// GET devuelve una lista de agentes

router.get('/', async(req, res, next) => {
    try {
        const agentes = await Agente.find().exec();
        res.json({ success: true, result: agentes });
    } catch (err) {
        next(err)
    }
});

// GET /:id retorna un agente
router.get('/:id', async(req, res, next) => {
    try {
        const _id = req.params.id;

        const agente = await Agente.findById(_id).exec();

        if (!agente) {
            next(createError(404));
            return;
        }

        res.json({ success: true, result: agente });

    } catch (err) {
        next(err);
    }
});

// POST crea un agente en la colección

router.post('/', async(req, res, next) => {
    try {
        const datosAgente = req.body;

        // Crear un agente en memoria
        const agente = new Agente(datosAgente);
        // Guardarlo en la DB
        const agenteGuardado = await agente.save();
        res.json({ success: true, result: agenteGuardado });
    } catch (err) {
        next(err);
    }
});

// DELETE elimina un agente por id
router.delete('/:id', async(req, res, next) => {
    try {
        const _id = req.params.id;
        await Agente.remove({ _id: _id }).exec();

        res.json({ success: true })
    } catch (err) {
        next(err);
    }
});

// PUT actualiza un agente
router.put('/:id', async(req, res, next) => {
    try {
        const _id = req.params.id;
        const datosAgente = req.body;

        const agenteActualizado = await Agente.findByIdAndUpdate(_id, datosAgente, { new: true }).exec();
        res.json({ success: true, result: agenteActualizado })
    } catch (err) {
        next(err);
    }
});


module.exports = router;