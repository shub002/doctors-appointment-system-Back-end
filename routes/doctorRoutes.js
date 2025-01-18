
const express = require('express');
const router = express.Router();
const { getAllDoctors, addDoctor, updateDoctor, deleteDoctor } = require('../controllers/doctorController');

router.get('/', getAllDoctors);
router.post('/', addDoctor);
router.put('/:id', updateDoctor);
router.delete('/:id', deleteDoctor);

module.exports = router;
