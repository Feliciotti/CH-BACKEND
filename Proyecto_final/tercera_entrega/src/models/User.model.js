import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs'

const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    age: String,
    address: String,
    phoneNumber: Number
});

userSchema.methods.encryptPassword = (password) => {
    return bcryptjs.hashSync(password, bcryptjs.genSaltSync(10));
  };

userSchema.methods.comparePassword = function (password) {
    return bcryptjs.compareSync(password, this.password);
};

const User = mongoose.model('user', userSchema);

export { User } // to be used in middleware/passport