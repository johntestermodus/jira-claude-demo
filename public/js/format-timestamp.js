function formatTimestamp(isoString) {
  // Currently shows raw UTC — this is the bug the Jira ticket will ask to fix
  return isoString;
}

// Export for testing if running in Node
if (typeof module !== 'undefined' && module.exports) {
  module.exports = formatTimestamp;
}
