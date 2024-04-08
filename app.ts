import express from 'express';
import routes from './src/routes/Routes';

const app = express();

app.use(express.json());
app.use('/', routes);

const PORT: number = parseInt(process.env.PORT || '3000');

app.listen(PORT, () => {
  console.log(`Running on ${PORT} port`);
});

export default app;