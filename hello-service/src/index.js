const express = require("express");
const app = express();

app.get("/hello", (req, res) => {
  console.log("[HELLO-SERVICE] /hello chamado");
  res.json({ message: "Olá, microsserviços!" });
});

app.get("/health", (req, res) => {
  res.json({ status: "UP" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`[HELLO-SERVICE] rodando na porta ${PORT}`);
});
