const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://effeleiva:Kattito2022@cluster0.n9rfz.mongodb.net/Cluster0?retryWrites=true&w=majority')
.then(db => console.log('DB is connected'))
.catch(err => console.log(err));