const Appointment = require('../models/appointment');

// Get all appointments
exports.getAllAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.find().populate('doctorId');
        res.json(appointments);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Add an appointment
exports.addAppointment = async (req, res) => {
    try {
        const appointment = new Appointment(req.body);
        const savedAppointment = await appointment.save();
        res.status(201).json(savedAppointment);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update an appointment
exports.updateAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(appointment);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete an appointment
exports.deleteAppointment = async (req, res) => {
    try {
        await Appointment.findByIdAndDelete(req.params.id);
        res.json({ message: 'Appointment deleted' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
