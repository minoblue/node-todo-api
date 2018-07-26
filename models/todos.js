const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
   todo:{
       type:String,
       required:[true,'Todo field required'],
       minlength:1,
       trim:true
   },
   completed:{
       type:Boolean,
       default:false
   },
   completedAt:{
       type:Number,
       default:null
   }
});

const Todo = mongoose.model('todo',TodoSchema);

module.exports = Todo;