const db = require("../db/connection");

async function getHelloMessage() {
  const result = await db.query(
    "select 'Olá, microsserviços com banco!' as message"
  );
  return result.rows[0];
}

module.exports = {
  getHelloMessage
};
