const express = require("express");
const app = express();

const helloRepository = require("./repositories/helloRepository");
const rabbit = require("./messaging/rabbitmq");

app.get("/health", (req, res) => {
  res.json({ status: "UP" });
});

app.get("/hello", async (req, res) => {
  console.log("[HELLO-SERVICE] /hello chamado");

  const message = await helloRepository.getHelloMessage();

  rabbit.publish("hello.created", {
    message: message.message,
    version: "v1",
    timestamp: new Date()
  }).catch(err =>
    console.error("[HELLO-SERVICE] erro ao publicar evento", err.message)
  );

  res.json(message);
});

app.get("/v1/hello", async (req, res) => {
  console.log("[HELLO-SERVICE] /v1/hello chamado");

  const message = await helloRepository.getHelloMessage();

  rabbit.publish("hello.created.v1", {
    message: message.message,
    timestamp: new Date()
  }).catch(err =>
    console.error("[HELLO-SERVICE] erro ao publicar evento", err.message)
  );

  res.json(message);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`[HELLO-SERVICE] rodando na porta ${PORT}`);
});
