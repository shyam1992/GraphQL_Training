import { buildSchema } from 'graphql';

const schema = buildSchema(`
    type Person {
        id : ID,
        firstName : String,
        lastName : String,
        language : String 
    }
    type Query {
        person : Person
    }
`)



export default schema;