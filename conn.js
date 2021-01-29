const mongoose = require('mongoose');

const db_path = 'mongodb://localhost:27017/test';
const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
mongoose.connect(db_path, config, error => {
    if (!error) {
        console.log('Succesful connection.')
    } else {
        console.log('Error Connecting to DB.')
    }
});

module.exports = mongoose;