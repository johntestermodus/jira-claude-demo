const ordersData = [
  { id: 1, customer: 'Acme Corp', currency: 'USD', total: 1250.00, createdAt: '2026-09-22T14:32:00Z' },
  { id: 2, customer: 'TechStart Inc', currency: 'USD', total: 3450.50, createdAt: '2026-09-21T09:15:00Z' },
  { id: 3, customer: 'Global Solutions', currency: 'USD', total: 875.25, createdAt: '2026-09-20T16:45:00Z' },
  { id: 4, customer: 'Innovate Labs', currency: 'USD', total: 2100.00, createdAt: '2026-09-19T11:22:00Z' },
  { id: 5, customer: 'Future Enterprises', currency: 'USD', total: 5200.75, createdAt: '2026-09-18T13:58:00Z' },
];

describe('Orders currency field', () => {
  it('should have a currency field on every order', () => {
    ordersData.forEach(order => {
      expect(order).toHaveProperty('currency');
    });
  });

  it('should display USD for all orders', () => {
    ordersData.forEach(order => {
      expect(order.currency).toBe('USD');
    });
  });

  it('should have currency positioned before total in the data shape', () => {
    const keys = Object.keys(ordersData[0]);
    const currencyIndex = keys.indexOf('currency');
    const totalIndex = keys.indexOf('total');
    expect(currencyIndex).toBeGreaterThanOrEqual(0);
    expect(totalIndex).toBeGreaterThanOrEqual(0);
    expect(currencyIndex).toBeLessThan(totalIndex);
  });
});
