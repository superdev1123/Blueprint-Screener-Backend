import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import ScreenerRoutes from './routes/ScreenerRoutes';
import ScoreRoutes from './routes/ScoreRoutes';

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