const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    userFrom: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})


const User = mongoose.model('User', userSchema);

module.exports = { User }