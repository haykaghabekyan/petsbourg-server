import mongoose from "mongoose";

const PetTypeSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        unique: true,
        required: [true, "Pet type should have a name."]
    },
    breeds: [{
        type: Number,
        ref: "PetBreed",
    }],
});

export const PetType = mongoose.model("PetType", PetTypeSchema);
