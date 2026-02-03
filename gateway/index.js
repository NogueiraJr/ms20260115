const express = require("express");

const app = express();

// lê variável de ambiente
const HELLO_SERVICE_URL =
  process.env.HELLO_SERVICE_URL || "http://localhost:3000";

app.get("/hello", async (req, res) => {
  try {
    const response = await fetch(`${HELLO_SERVICE_URL}/v1/hello`);
    const data = await response.json();

    console.log(
      `[GATEWAY] chamada para ${HELLO_SERVICE_URL}/hello com sucesso`
    );

    res.json({
      from: "gateway",
      data
    });
  } catch (err) {
    console.error("[GATEWAY] erro ao chamar hello-service", err.message);
    res.status(500).json({ error: "Erro ao chamar hello-service" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`[GATEWAY] rodando na porta ${PORT}`);
});
