import { getApiBaseUrl } from './src/utils/apiUrl.js';

// Check for a GitHub Codespaces environment name.
const codespaceName = process.env.CODESPACE_NAME;

// Use the Codespaces public URL when available; otherwise fall back to localhost.
const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

// Explicitly expose the Codespaces URL format for the API configuration.
const codespaceUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

console.log(`CODESPACE_NAME=${codespaceName || 'not set'}`);
console.log(`codespace URL: ${codespaceUrl}`);

import './src/index.js';

export { getApiBaseUrl };
