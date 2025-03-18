const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const sessionRoutes = require('./routes/sessionRoutes');
const cors= require('cors');


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors())

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error: ', err));

// Middleware
app.use(express.json());

// Routes
app.use('/api/sessions', sessionRoutes);

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});