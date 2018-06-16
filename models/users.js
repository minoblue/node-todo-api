const mongoose = require('mongoose');

const {Schema} = mongoose;

const UserSchema = new Schema({
    name:{
        type:Strin
        required:[true,'Name is required']
    },
    age:{
        type:Number
    },
    location:{
        type:String
    }
});

const User = mongoose.model('user',UserSchema);

module.exports = User;