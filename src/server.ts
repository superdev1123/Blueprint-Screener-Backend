import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes/index';

dotenv.config({ path: __dirname + '/.env' });

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.use('/api/', routes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
