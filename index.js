var Kafka = require('node-rdkafka');
var Table = require('cli-table');
const TOPIC = process.env.TOPIC || '';

const logOutput = (params) => {
  const keys = Object.keys(params);

  const table = new Table({ head: ['appName', 'JSON'], colWidths: [30, 75] });

  // Table values
  const values = keys.reduce((acc, key) => {
    if (key !== "appName") acc[key] = params[key];
    return acc;
  }, {});

  table.push([params.appName, JSON.stringify(values, null, 2)]);
  console.log(table.toString());
};

var consumer = new Kafka.KafkaConsumer({
  'group.id': 'kafka',
  'metadata.broker.list': 'localhost:9092',
}, {});

consumer.connect();

consumer.on('ready', () => {
  consumer.subscribe([topic]);
  consumer.consume();
  console
});

consumer.on('data', (stream) => {
  // Output the actual message contents
  const data = JSON.parse(stream.value.toString());
  logOutput(data);
});