const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

// Sample orders with raw UTC timestamps
const orders = [
  { id: 1, customer: 'Acme Corp', total: 1250.00, createdAt: '2026-09-22T14:32:00Z' },
  { id: 2, customer: 'TechStart Inc', total: 3450.50, createdAt: '2026-09-21T09:15:00Z' },
  { id: 3, customer: 'Global Solutions', total: 875.25, createdAt: '2026-09-20T16:45:00Z' },
  { id: 4, customer: 'Innovate Labs', total: 2100.00, createdAt: '2026-09-19T11:22:00Z' },
  { id: 5, customer: 'Future Enterprises', total: 5200.75, createdAt: '2026-09-18T13:58:00Z' }
];

app.get('/api/orders', (req, res) => {
  res.json(orders);
});

app.listen(PORT, () => {
  console.log(`Orders app running at http://localhost:${PORT}`);
});
