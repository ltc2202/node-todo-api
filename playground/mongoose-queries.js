const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');
var userId = '5a041ea7fe4bcd0dbc4cab2d';

if(!ObjectId.isValid(userId)) {
  console.log('User ID not valid!');
}
// var id = '65a04441ec48af322e4a9267e';
//
// if(!ObjectId.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

User.findById(userId).then((user) => {
  if(!user) {
    return console.log('User ID not found');
  }
  console.log(JSON.stringify(user, undefined, 2));
}, (err) => {
  console.log(err);
});
