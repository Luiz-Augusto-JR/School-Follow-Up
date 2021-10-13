const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require("morgan");
const PORT = process.env.PORT || 3001;

// Definindo os middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));


// Definindo as rotas
app.use("/professores", require("./routes/professoresRoutes"));
app.use("/escolas", require("./routes/escolasRoutes"));
app.use("/materias", require("./routes/materiasRoutes"));
app.use("/alunos", require("./routes/alunosRoutes"));
app.use("/notas", require("./routes/notasRoutes"));
app.use("/frequencias", require("./routes/frequenciaRoutes"));
app.use("/auth", require("./routes/authRoutes"));


// Middleware de tratamento de erros
app.use(require("./middlewares/errorMiddleware"));

app.listen(PORT, () => console.log("O servidor está rodando..."));

