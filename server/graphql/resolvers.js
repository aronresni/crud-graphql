import Project from "../models/Project.js";
import Task from "../models/Task.js";

export const resolvers = {
    Query: {
        hello: () => "Hello World",
        projects: async () => {
            const projects = await Project.find();
            return projects;
        },
        project: async (_, { _id }) => await Project.findById(_id),
        task: async (_, { _id }) => await Task.findById(_id),
        tasks: async () => await Task.find(),
    },
    Mutation: {
        createProject: async (_, { name, description }) => {
            try {
                const project = new Project({ name, description });
                const savedProject = await project.save();
                return savedProject;
            } catch (error) {
                throw new Error(`Error al crear el proyecto: ${error.message}`);
            }
        },
        deleteProject: async (_, { _id }) => {
            const deletedProject = await Project.findByIdAndDelete(_id);
            if (!deletedProject) throw new Error("Project not found");
            return deletedProject;
        },
        updateProject: async (_, args) => {
            const updatedProject = await Project.findByIdAndUpdate(args._id, args);
            if (!updatedProject) throw new Error("Project not found");
            return updatedProject;
        },
        createTask: async (_, { title, projectId }) => {
            try {
                const projectFound = await Project.findById(projectId);
                if (!projectFound) throw new Error("Project not found");
                const task = new Task({ title, projectId });
                const taskSaved = await task.save();
                return taskSaved;
            } catch (error) {
                throw new Error(`Error al crear la tarea: ${error.message}`);
            }
        },
        deleteTask: async (_, { _id }) => {
            const deletedTask = await Task.findByIdAndDelete(_id);
            if (!deletedTask) throw new Error("Task not found");
            return deletedTask;
        },
        updateTask: async (_, args) => {
            const updatedTask = await Task.findByIdAndUpdate(args._id, args);
            if (!updatedTask) throw new Error("Task not found");
            return updatedTask;
        }
    },
    Project: {
		tasks: async (parent) => {
			return await Task.find({ projectId: parent._id });
		}
	},
	Task: {
		project: async (parent) => {
			return await Project.findById(parent.projectId);
		}
	}
};
