import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
    },
    {
        timestamps: true, // Esta línea agrega las marcas de tiempo al esquema
    }
);

export default mongoose.model(`Project`, ProjectSchema);
