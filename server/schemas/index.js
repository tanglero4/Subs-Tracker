const mongoose = require('mongoose');


const kittySchema = new mongoose.Schema({
    name: String
  });
  kittySchema.methods.speak = function speak() {
    const greeting = this.name
      ? "Meow name is " + this.name
      : "I don't have a name";
    console.log(greeting);
  };
  
  
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost/subscriptionsDB');
}