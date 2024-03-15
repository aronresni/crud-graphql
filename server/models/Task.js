import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
    title: { // Fixed typo: 'tittle' to 'title'
        type: String,
        required: true
    },
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project", // Fixed backtick to regular quotes
        required: true,
    }
}, {
    timestamps: true,
});

export default mongoose.model("Task", TaskSchema);

