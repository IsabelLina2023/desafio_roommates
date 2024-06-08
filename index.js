import express from 'express';
import userRouter from './routes/userRouter.js'
import spentRouter from './routes/spentRouter.js'

const app = express();
const PORT = process.env.PORT || 3000;

//middlewares:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes:
app.use('/', userRouter);
app.use('/', spentRouter);

app.listen(PORT, console.log(`🔥Server running on port ${PORT}🔥`));
