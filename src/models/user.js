const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    role: { type: String, enum: ['user', 'premium', 'admin'], default: 'user' }
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
