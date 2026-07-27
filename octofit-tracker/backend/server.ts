import { getApiBaseUrl } from './src/utils/apiUrl.js';

const codespaceName = process.env.CODESPACE_NAME;
const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000';

if (apiBaseUrl) {
  console.log(`API base URL configured for ${apiBaseUrl}`);
}

import './src/index.js';

export { getApiBaseUrl };
