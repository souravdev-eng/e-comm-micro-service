import { app } from './app';
import mongoose from 'mongoose';

const start = async () => {
  try {
    await mongoose.connect('mongodb+srv://sourav:<password>@cluster0.ww8pd.mongodb.net/?retryWrites=true&w=majority', {
      user: process.env.DB_USER,
      pass: process.env.DB_PASSWORD,
    });

    console.log('DB connected successfully....');
  } catch (error) {
    console.log(error);
    process.exit();
  }

  app.listen(4000, () => console.log('Listen ton port 4000....'));
};

start();
