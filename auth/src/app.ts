import 'express-async-error';
import express from 'express';
import cors from 'cors';
import { authRoute } from './routes/routes';
import { errorHandler } from './middleware/errorHandler';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/auth', authRoute);

app.use(errorHandler);

export { app };
