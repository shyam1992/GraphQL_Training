import { buildSchema } from 'graphql';

const schema = buildSchema(`
    type Person {
        id : ID,
        firstName : String,
        lastName : String,
        language : String
    }

    type Query {
        person : Person,
        people : [Person]
    }

    input PersonInput {
        id : ID,
        firstName : String!,
        lastName : String,
        language : String
    }
    
    type Mutation {
        createPerson(input: PersonInput): Person
    }
`)



export default schema;








/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * mutation {
  createPerson(input: 
    {
      firstName: "Ankur", 
      lastName: "This is last name", 
      language: "this is language"
    }
  ) {
    firstName
  }
}

Query
{
  people {
    firstName
  }
}
 */