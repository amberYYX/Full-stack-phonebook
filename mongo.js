const mongoose = require('mongoose')
if( process.argv.length <3) {
    console.log('please provide the password as an argument: node mango.js <password>')
    process.exit(1)
}

const password = process.argv[2]
const url = `mongodb+srv://phonebookUser:${password}@cluster0.8pdyj.mongodb.net/phonebook`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

// const PersonSchema = new mongoose.Schema({
//   id: Number,
//   name: String,
//   number: String,
// });

// const Person = mongoose.model("Person", PersonSchema)

const ItemSchema = new mongoose.Schema({
    name: String,
    number: String,
})

const Item= mongoose.model('Item', ItemSchema)

if (process.argv.length ===3) {
    // console.log(`argv === 3`);
    // Person.find({}).then ((result) => {
    //   console.log(`find method`)
    //   result.map(item => {
    //     console.log(item.name, item.number)
    //   })
    Item.find({}).then ((result) => {
        console.log('find method')
        result.map(item => {
            console.log(item.name, item.number)
        })
        mongoose.connection.close()
    })
}


if (process.argv.length >3) {
    //file name, password, name, number
    // console.log("please provide the password as an argument: node mango.js <password>");
    // process.exit(1);  

    // const gegerateID = () => {
    //   return Math.round(Math.random()*10000)
    // }
    //============================
    // const person = new Person({
    //   name: process.argv[3],
    //   number: process.argv[4],
    // })

    // person.save().then((result) => {
    //   // console.log('save method')
    //   // console.log(result)
    //   console.log("person saved");
    //   mongoose.connection.close();
    const item = new Item({
        name: process.argv[3],
        number: process.argv[4],
    })

    item.save().then((result) => {
    // console.log('save method')
    // console.log(result)
        console.log('person saved')
        mongoose.connection.close()

    }).catch(() => {
        console.log('error in save method')
 
    })

}


//   Person.find({}).then ((result) => {
//     console.log(`find method`)
//     result.map(item => {
//       console.log(item.name, item.number)
//     })
//     // mongoose.connection.close()
//   })
// }
// const password = process.argv[2];
  
// const url = `mongodb+srv://phonebookUser:${password}@cluster0.8pdyj.mongodb.net/phonebook`;
  
// mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
  
// const PersonSchema = new mongoose.Schema({
//   id: Number,
//   name: String,
//   number: String,
// });
  
// const Person = mongoose.model("Person", PersonSchema)

// const gegerateID = () => {
//   return Math.round(Math.random()*10000)
// }

// const person = new Person({
//   id: gegerateID(),
//   name: process.argv[3],
//   number: process.argv[4],
// })

  

// person.save().then((result) => {
//   // console.log('save method')
//   // console.log(result)
//   console.log("person saved");
//   mongoose.connection.close();

// }).catch(() => {
//     console.log('error in save method')
//     // console.log(result);
// });

// Person.find({}).then((result) => {
//   console.log('find method')
//   // console.log(result); //current document
//   const docLength = result.length
//   const newAdd = result[docLength-1]
//   console.log(`added ${newAdd.name} number ${newAdd.number} to the phonebook. `)
//   console.log(`currently, ${docLength} concats stored.`)

//   // mongoose.connection.close();
// });