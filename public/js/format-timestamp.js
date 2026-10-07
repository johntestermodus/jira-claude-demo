function formatTimestamp(isoString) {
  const date = new Date(isoString);
  return new Intl.DateTimeFormat(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  }).format(date);
}

// Export for testing if running in Node
if (typeof module !== 'undefined' && module.exports) {
  module.exports = formatTimestamp;
}
