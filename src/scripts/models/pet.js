import mongoose from "mongoose";

const PetSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Pet should have an owner."],
    },
    name: {
        type: String,
        required: [true, "Pet should have a name."],
    },
    type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PetType",
        required: [true, "Pet should have a type."],
    },
    breed: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "PetBreed",
        required: [true, "Pet should have a breed."],
    },
    gender: {
        type: String,
        enum: ["Male", "Female"],
        required: [true, "Please choose your pets gender."],
    },
    story: {
        type: String,
    },
    passportId: {
        type: String,
    },
    color: {
        type: String,
    },
    size: {
        type: String,
    },
    birthday: {
        type: Date,
    },
    picture: {
        type: Object,
    },
});

export const Pet = mongoose.model("Pet", PetSchema);
