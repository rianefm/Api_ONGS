import express from "express";
import ongRoutes from './routes/ongsRoutes.route.js';


const app = express();


const PORT = 3000;


app.use(express.json());

app.use('/api/', ongRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});


