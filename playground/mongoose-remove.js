const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });


// Todo.findByIdAndRemove('5a04a8aafa7e6a06f15cfb3a').then((todo) => {
//   console.log(todo);
// });
