import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Necessário para usar __dirname em ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(bodyParser.json());

// Rota para a HOME (index.html)
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Rota para catálogo
app.get("/catalogo", (req, res) => {
    res.sendFile(path.join(__dirname, "catalogo.html"));
});

// Rota para recomendados
app.get("/recomendados", (req, res) => {
    res.sendFile(path.join(__dirname, "recomendados.html"));
});

// Rota para login
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "login.html"));
});

// ✅ ROTA PARA CADASTRO (NOVA)
app.get("/cadastro", (req, res) => {
    res.sendFile(path.join(__dirname, "cadastro.html"));
});

// Servir arquivos estáticos (imagens, CSS, JS)
app.use(express.static(__dirname));

const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
