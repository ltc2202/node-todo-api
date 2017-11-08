// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //deleteMany
  // db.collection('Users').deleteMany({name: 'Harry'}).then((result) => {
  //   console.log(result);
  // });


//5a0315abec87f20e04f5ad40
  //deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //   console.log(result);
    // });
  //FindOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //   console.log(result);
    // })

    db.collection('Users').findOneAndDelete({
      _id: new ObjectID('5a0315abec87f20e04f5ad40')
    }).then((result) => {
      console.log(JSON.stringify(result, undefined, 2))
    });

  // db.close();
});
