const express = require("express");
const app = express();

const helloRepository = require("./repositories/helloRepository");

app.get("/hello", async (req, res) => {
  console.log("[HELLO-SERVICE] /hello chamado");
  const message = await helloRepository.getHelloMessage();
  res.json(message);
});

app.get("/health", (req, res) => {
  res.json({ status: "UP" });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`[HELLO-SERVICE] rodando na porta ${PORT}`);
});
