const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const db = process.env.MONGO_URI;  // Get the MongoDB URI from environment variables
        if (!db) {
            throw new Error('MONGO_URI is not defined in .env');
        }
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected');
    } catch (err) {
        console.error('MongoDB connection error:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
