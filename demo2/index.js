import express from "express";
import graphqlHttp from 'express-graphql';
import schema from './schema';

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
    }
}

app.use('/graphql', graphqlHttp({
    schema,
    rootValue: root,
    graphiql: true
}))

app.listen(9567, ()=> {
    console.log("server is running on port localhost:9567/graphql")
})