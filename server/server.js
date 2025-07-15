const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev')); // Logs every HTTP request to the console

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    // These options are no longer needed with mongoose 6+
  })
  .then(() => console.log('✅ MongoDB Connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Routes
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// Health Check Endpoint
app.get('/healthz', (req, res) => {
  res.status(200).json({
    status: 'OK',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
