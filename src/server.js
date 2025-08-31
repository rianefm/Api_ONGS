import cors from "cors";
import express from "express";
import ongRoutes from './routes/ongsRoutes.route.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api/ongs', ongRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
