const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	id: { type: String },
	name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	favorites: { type: Array, default: [] },
	image: { type: String, required: false },
});

module.exports = mongoose.model('User', userSchema);
