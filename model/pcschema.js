const mongoose = require('mongoose');
mongoose.connect('mongodb://roshan:ostindev06@ds111598.mlab.com:11598/untrodden', {
    useNewUrlParser: true
});
const db = mongoose.connection;

//for successful connection

db.once('open', () => {
    console.log('connected to MongoDB successfully!!!');

});

//for error in connection
db.on('error', (err) => {
    console.log(err);

});

//for defining schema
let pcSchema = mongoose.Schema({
    pc:{
        type:Number,
    }
});

//for defining models

module.exports = mongoose.model('pc', pcSchema);