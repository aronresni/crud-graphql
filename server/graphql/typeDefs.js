import { gql } from "graphql-tag";
export const typeDefs = gql`
  type Query {
    hello: String
    projects: [Project]
    project(_id: ID!): Project
    tasks: [Task]
    task(_id: ID!): Task
  }

  type Mutation {
    createProject(name: String, description: String): Project
    deleteProject(_id: ID!): Project
    updateProject(_id: ID!, name: String, description: String): Project
    updateTask(_id: ID!, title: String, projectId: ID): Task
    createTask(title: String, projectId: ID): Task
    deleteTask(_id: ID!): Task
  }

  type Project {
    _id: ID
    name: String
    description: String
    createdAt: String
    updatedAt: String
    tasks: [Task]
  }

  type Task {
    _id: ID
    title: String
    description: String
    createdAt: String
    updatedAt: String
    project:[Project]
  }
`;
