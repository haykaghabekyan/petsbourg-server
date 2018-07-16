import mongoose from "mongoose";

const PetBreedSchema = new mongoose.Schema({
    petType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PetType",
        required: [true, "Pet breed should have a pet type."],
    },
    name: {
        type: String,
        unique: true,
        required: [true, "Pet breed should have a name."]
    },
});

export const PetBreed = mongoose.model("PetBreed", PetBreedSchema);
