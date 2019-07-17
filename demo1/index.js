import express from "express";
import graphqlHttp from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req,res) => {
    res.send('Server is running')
})

const root = {
    hello: () => 'This is hello type',
    hi: () => 'this is Hi type'
}

app.use('/graphql', graphqlHttp({
    schema,
    rootValue: root,
    graphiql: true
}))

app.listen(9567, ()=> {
    console.log("server is running on port localhost:9567/graphql")
})