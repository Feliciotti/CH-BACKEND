import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs'

const { Schema } = mongoose;

const userSchema = new Schema({
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        // img: {
        //     type: String,
        //     required: true
        // },
        age: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        phoneNumber: {
            type: String,
            required: true
        },
        token: {
            type: String,
            default: null
        },
        tokenConfirm: {
            type: Boolean,
            default: false
        },
        role: [{
                ref: 'role',
                type: mongoose.Schema.Types.ObjectId
        }]
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

userSchema.methods.encryptPassword = (password) => {
    return bcryptjs.hashSync(password, bcryptjs.genSaltSync(10));
  };

userSchema.methods.comparePassword = function (password) {
    return bcryptjs.compareSync(password, this.password);
};

const User = mongoose.model('user', userSchema);

export { User } // to be used in middleware/passport