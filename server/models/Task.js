import mongoose from "mongoose";

new mongoose.Schema({
    tittle: {
        type: String,
        required: true
    },
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: `Project`,
        required: true,
    }
},
    {
        timestamps: true,
    })
export default mongoose.model("Task")