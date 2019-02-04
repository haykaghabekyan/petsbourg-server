import bcrypt from 'bcrypt';
import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: {
        type: String,
        required: [true, 'First name can not be empty.'],
    },
    lastName: {
        type: String,
        required: [true, 'Last name can not be empty.'],
    },
    email: {
        type: String,
        lowercase: true,
        unique: true, // TODO unique validation
        required: [true, 'Please enter valid email address.'],
    },
    // TODO
    // use Date instead
    birthday: {
        type: String,
    },
    biography: {
        type: String,
    },
    // picture: {
    //     type: Object,
    // },
    passwordHash: {
        type: String,
        required: [true, 'Password cannot be empty'],
    },
    gender: {
        type: String,
        enum: ['Male', 'Female'],
        required: [true, 'Please choose your pets gender.'],
    },
    pets: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pet',
    }],
    isVerified: {
        type: Boolean,
        default: false,
    },
});

UserSchema.methods.isValidPassword = function(password) {
    return bcrypt.compareSync(password, this.passwordHash);
};

UserSchema.virtual('password')
    .get(function() {
        return this.passwordHash;
    })
    .set(function(value) {
        this.passwordHash = bcrypt.hashSync(value, bcrypt.genSaltSync(8));
    });

export const User = mongoose.model('User', UserSchema);
