const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const logger = (req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
  next();
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);
app.use(express.static('public'));

const purchaseRoutes = require('./routes/purchases');
app.use('/purchases', purchaseRoutes);

app.get('/', (req, res) => res.send('Shopping API'));

// 404
app.use((req, res) => res.status(404).json({ error: 'Not found' }));

// Errors
app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Server error' });
});

app.listen(port, () => console.log(`Server: http://localhost:${port}`));