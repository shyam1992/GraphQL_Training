import { buildSchema } from 'graphql';

const schema = buildSchema(`
    type Query {
        hello : String,
        hi: String
    }
`)



export default schema;