import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

interface UserAttars {
  name: string;
  email: string;
  password: string;
  role?: 'user' | 'admin' | 'seller';
}

interface UserDoc extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  role: 'user' | 'admin' | 'seller';
  profileImage: string;
}

interface UserModel extends mongoose.Model<UserDoc> {
  build(attars: UserAttars): UserDoc;
}

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      // unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['user', 'admin', 'seller'],
      default: 'user',
    },
    profileImage: {
      type: String,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        delete ret.password;
      },
    },
  }
);

userSchema.statics.build = function (attars: UserAttars) {
  return new User(attars);
};

// @ts-ignore
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next;
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export { User };
