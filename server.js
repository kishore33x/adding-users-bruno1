const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const signupRoute = require('./routes/signup');

// Load environment variables
dotenv.config();

// Create Express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Signup route
app.use('/signup', signupRoute);

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB Atlas'))
.catch((error) => console.error('❌ MongoDB connection error:', error));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
