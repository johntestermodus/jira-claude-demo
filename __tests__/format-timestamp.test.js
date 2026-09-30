const formatTimestamp = require('../public/js/format-timestamp.js');

describe('formatTimestamp', () => {
  it('should format ISO string to readable local time format', () => {
    const iso = '2026-09-22T14:32:00Z';
    const result = formatTimestamp(iso);

    // Should NOT be the raw ISO string anymore
    expect(result).not.toBe(iso);

    // Should contain month abbreviation, day, year, and time
    expect(result).toMatch(/[A-Z][a-z]{2}\s+\d{1,2},?\s+\d{4}/);
    expect(result).toMatch(/\d{1,2}:\d{2}\s+[AP]M/);
  });

  it('should handle different UTC times', () => {
    const iso1 = '2026-09-21T09:15:00Z';
    const iso2 = '2026-09-20T16:45:00Z';

    const result1 = formatTimestamp(iso1);
    const result2 = formatTimestamp(iso2);

    expect(result1).not.toBe(result2);
    expect(result1).toMatch(/[A-Z][a-z]{2}\s+\d{1,2},?\s+\d{4}/);
    expect(result2).toMatch(/[A-Z][a-z]{2}\s+\d{1,2},?\s+\d{4}/);
  });

  it('should convert UTC to local time (browser timezone)', () => {
    // A UTC timestamp and its local representation depends on timezone
    // Just verify the output format is human-readable, not raw ISO
    const iso = '2026-09-22T14:32:00Z';
    const result = formatTimestamp(iso);

    expect(result).toBeTruthy();
    expect(result.length).toBeGreaterThan(0);
    expect(result).not.toEqual(iso);
  });
});
