const amqp = require("amqplib");

let channel;

async function connect() {
  const connection = await amqp.connect(process.env.RABBITMQ_URL);
  channel = await connection.createChannel();
}

async function publish(queue, message) {
  if (!channel) await connect();
  await channel.assertQueue(queue);
  channel.sendToQueue(queue, Buffer.from(JSON.stringify(message)));
}

module.exports = { publish };
