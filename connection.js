// connection.js

const mongoose = require('mongoose');

// MongoDB connection URI
const mongoURI = 'mongodb://localhost:27017/TaskApi';

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Listen for connection errors
mongoose.connection.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

// Listen for successful connection
mongoose.connection.once('open', () => {
  console.log('MongoDB connection opened');
});

// Listen for SIGINT signal (Ctrl+C) and close the connection
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('MongoDB connection closed');
    process.exit(0);
  });
});
