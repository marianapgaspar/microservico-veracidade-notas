import express from 'express';
import routes from './src/routes/Routes';
import cors = require("cors");

const app = express();

app.use(express.json());
const corsOptions = {
  origin: 'http://seusite.com', // ou ['http://site1.com', 'http://site2.com']
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
};
app.use(cors(corsOptions));

app.use('/', routes);

const PORT: number = parseInt(process.env.PORT || '3000');

app.listen(PORT, () => {
  console.log(`Running on ${PORT} port`);
});

export default app;