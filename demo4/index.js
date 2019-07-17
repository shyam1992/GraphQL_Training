import express from "express";
import graphqlHttp from 'express-graphql';
import mongoose from 'mongoose';

import schema from './schema';
import { graphQL } from './db';


const app = express();


app.get('/', (req,res) => {
    res.send('Server is running')
})


const root = {
    person: () => {
        return {
            id: 123432,
            firstName : "This is first name",
            lastName : "This is last name",
            language : "English" 
        }
    },
    createPerson : ({ input }) => {
        const newPerson = new graphQL({
            firstName: input.firstName,
            lastName: input.lastName,
            language: input.language
        });
        newPerson.id = newPerson._id;

        return new Promise((res,rej) => {
            newPerson.save((err) => {
                if(err) rej(err)
                else res(newPerson)
            })
        })
    }
};

app.use('/graphql', graphqlHttp({
    schema,
    rootValue: root,
    graphiql: true
}))

app.listen(9567, ()=> {
    console.log("server is running on port http://localhost:9567/graphql")
})