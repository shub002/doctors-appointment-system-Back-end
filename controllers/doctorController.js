const Doctor = require('../models/doctor');

// Get all doctors
exports.getAllDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.json(doctors);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Add a doctor
exports.addDoctor = async (req, res) => {
    try {
        const doctor = new Doctor(req.body);
        const savedDoctor = await doctor.save();
        res.status(201).json(savedDoctor);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update a doctor
exports.updateDoctor = async (req, res) => {
    try {
        const doctor = await Doctor.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(doctor);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete a doctor
exports.deleteDoctor = async (req, res) => {
    try {
        await Doctor.findByIdAndDelete(req.params.id);
        res.json({ message: 'Doctor deleted' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
