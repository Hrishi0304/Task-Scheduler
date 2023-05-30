const express = require('express');
const mongoose = require('mongoose');

const app = express();

// default route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// database
mongoose.connect(
  "mongodb+srv://hrishikesh0304:LTjrReAnS3i5yfCb@cluster0.bawkgav.mongodb.net/?retryWrites=true&w=majority"
).then(
  () => {
    console.log("Database connected");
  }
).catch(
  ()=>{
    console.log("Connection failed");
  }
);
// Start the server
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
