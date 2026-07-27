import { getApiBaseUrl } from './src/utils/apiUrl.js';

// Check for a GitHub Codespaces environment name.
const CODESPACE_NAME = process.env.CODESPACE_NAME;

// Use the Codespaces public URL when available; otherwise fall back to localhost.
const URL = CODESPACE_NAME
  ? `https://${CODESPACE_NAME}-8000.app.github.dev`
  : 'http://localhost:8000';

// Explicitly expose the Codespaces URL format for the API configuration.
const codespaceURL = CODESPACE_NAME
  ? `https://${CODESPACE_NAME}-8000.app.github.dev`
  : 'http://localhost:8000';

console.log(`CODESPACE_NAME=${CODESPACE_NAME || 'not set'}`);
console.log(`codespace URL: ${codespaceURL}`);

import './src/index.js';

export { getApiBaseUrl };
