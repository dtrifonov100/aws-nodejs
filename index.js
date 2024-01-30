const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 8000;

const todos = [
  {
    id: 1,
    title: 'Write code',
    completed: false,
  },
];

app.get('/api/get', (req, res) => {
  res.send({ message: 'hello back to nodejs', name: process.env.NAME });
});
app.get('/api/todos', (req, res) => {
  res.send({ todos });
});

app.get('/', (req, res) => {
  const date = new Date();
  res.send({
    date: date.toString(),
    iso: date.toISOString(),
    utc: date.toUTCString(),
  });
});
app.listen(PORT, () => {
  console.log(`Server is started on PORT=${PORT}`);
});
