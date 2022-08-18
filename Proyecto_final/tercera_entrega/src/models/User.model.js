import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs'

const { Schema } = mongoose;

const userSchema = new Schema({
  email: String,
  password: String
});

userSchema.methods.encryptPassword = (password) => {
    return bcryptjs.hashSync(password, bcryptjs.genSaltSync(10));
  };

userSchema.methods.comparePassword = function (password) {
    return bcryptjs.compareSync(password, this.password);
};

const User = mongoose.model('user', userSchema);

export { User }