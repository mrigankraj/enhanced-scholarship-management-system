const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ApplicationSchema = new Schema({
    userId: Schema.Types.ObjectId,
    scholarship: String,
    status: { type: String, default: 'Pending' }
});

module.exports = mongoose.model('Application', ApplicationSchema);
