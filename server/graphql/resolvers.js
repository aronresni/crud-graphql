import Project from "../models/Project.js";

export const resolvers = {
    Query: {
        hello: () => "Hello World",
        projects: async () => {
            // Utiliza await para esperar a que la consulta a la base de datos se complete
            const projects = await Project.find();
            return projects;
        }
    },
    Mutation: {
        createProject: async (_, { name, description }) => {
            // Utiliza async/await para esperar a que la operación de guardado se complete
            try {
                const project = new Project({
                    name,
                    description,
                });
                const savedProject = await project.save();
                return savedProject;
            } catch (error) {
                // Maneja cualquier error que pueda ocurrir durante la operación de guardado
                throw new Error(`Error al crear el proyecto: ${error.message}`);
            }
        }
    }
};
