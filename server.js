const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const app = express();
const router = express.Router();
const port = process.env.PORT || 8080;

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

const mainPageRoutes = require('./routes/main');
const hitsRoutes = require('./routes/hits');
const upcomingRoutes = require('./routes/upcoming');
const mikroblogRoutes = require('./routes/mikroblog');
const linkRoutes = require('./routes/link');
const authRoutes = require('./routes/auth');
app.use('/api/main', mainPageRoutes);
app.use('/api/upcoming', upcomingRoutes);
app.use('/api/hits', hitsRoutes);
app.use('/api/mikroblog', mikroblogRoutes);
app.use('/api/link', linkRoutes);
app.use('/api/auth', authRoutes);

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/build/index.html'), (err) => {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.use(cors());
app.use(express.json());
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
