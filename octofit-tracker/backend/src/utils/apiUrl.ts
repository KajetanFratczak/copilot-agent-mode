export function getApiBaseUrl(): string {
  // Use the Codespaces forwarding URL when the environment exposes a workspace name.
  const codespaceName = process.env.CODESPACE_NAME;

  if (codespaceName) {
    return `https://${codespaceName}-8000.app.github.dev`;
  }

  // Fall back to localhost for local development and testing.
  return 'http://localhost:8000';
}
