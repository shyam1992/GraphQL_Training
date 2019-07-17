import mongoose from 'mongoose';

const url = "mongodb://ds020168.mlab.com:20168/abhyasalaya";
const connect = mongoose.connect(url,{user: 'shyam', pass: 'password@123'});
connect.then((db) => {
    console.log("connected to database");
}, (err) => {
    console.log(err);
});

const personSchema =  new mongoose.Schema({
    firstName : {
        type: String
    },
    lastName : {
        type: String
    },
    language : {
        type: String
    }
});

export const graphQL = mongoose.model('graphQL', personSchema);