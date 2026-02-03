const express = require("express");
const app = express();

app.get("/hello", async (req, res) => {
  try {
    const HELLO_SERVICE_URL =
      process.env.HELLO_SERVICE_URL || "http://localhost:3000";

    const response = await fetch(`${HELLO_SERVICE_URL}/hello`);
    const data = await response.json();
    res.json({
      from: "gateway",
      data
    });
  } catch (err) {
    res.status(500).json({ error: "Erro ao chamar hello-service" });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`gateway rodando na porta ${PORT}`);
});
