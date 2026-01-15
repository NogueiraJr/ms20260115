const express = require("express");
const app = express();

app.get("/hello", (req, res) => {
  res.json({ message: "Olá, microsserviços!" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`hello-service rodando na porta ${PORT}`);
});
