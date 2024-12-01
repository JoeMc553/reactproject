const express = require('express')
const cors = require('cors')
const router = require('./routes/router')
const authRoutes = require('./routes/authRoutes');
const studyGroupRoutes = require('./routes/studyGroupRoutes');

const mongoose = require('mongoose')
require('dotenv/config')

const app =  express()

app.use(cors());
app.use(express.json());

app.use('/', router)
app.use('/api', authRoutes, studyGroupRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!', error: err.message });
  });


const dbOptions = {useNewUrlParser:true, useUnifiedTopology:true}
mongoose.connect(process.env.DB_URI, dbOptions)
.then(() => console.log('DB Connected!'))
.catch(err => console.log(err))

const port = process.env.PORT || 4000
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})