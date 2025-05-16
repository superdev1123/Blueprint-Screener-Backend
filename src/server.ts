import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
<<<<<<< HEAD:src/server.ts
import ScreenerRoutes from './routes/ScreenerRoutes';
import ScoreRoutes from './routes/ScoreRoutes';
=======
import routes from './src/routes/index';
>>>>>>> 8a10fab6f47be0b45ed01f290c28b5b83f75e614:server.ts

dotenv.config({ path: __dirname + '/.env' });

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use('/screener', ScreenerRoutes);
app.use('/score', ScoreRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

export default app;