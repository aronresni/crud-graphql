import Project from "../models/Project.js";
import Task from "../models/Task.js"
export const resolvers = {
    Query: {
        hello: () => "Hello World",
        projects: async () => {
            // Utiliza await para esperar a que la consulta a la base de datos se complete
            const projects = await Project.find();
            return projects;
        },
        project: async (_, { _id }) => await Project.findById(_id),
        task: async (_, { _id }) => await Task.findById(_id),
        tasks: async () => await Task.find(),
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
        },
        createTask: async (_, { title, projectId }) => {
            try {
                const projectFound = await Project.findById(projectId)
                if (!projectFound) throw new Error()
                const task = new Task({
                    title,
                    projectId,
                });
                const taskSaved = await task.save();
                return taskSaved;
            } catch (error) {
                throw new Error(`Error al crear el proyecto: ${error.message}`);
            }
        }
    }
};
