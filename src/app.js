const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const counterRoutes = require('./routes/counter.route');

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3001;
const MONGOURL=process.env.MONGOURL || 'mongodb://localhost/counter-app';
mongoose
  .connect(`${MONGOURL}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })



app.use('/counters', counterRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
