const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.get('/health', (req, res) => {
  res.send('OK');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
 
