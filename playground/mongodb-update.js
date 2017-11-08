// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5a0323b66f8c28605d1ec7a2')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((res) => {console.log(res);});
   db.collection('Users').findOneAndUpdate({
     _id: new ObjectID('5a02c076b245921a507baf40')
   },{
     $set: {name: 'Harry'},
     $inc: {age: 1}
   }, {
     returnOriginal: false
   }).then((res) => {console.log(res);});

  //5a0323b66f8c28605d1ec7a2
  // db.close();
});
