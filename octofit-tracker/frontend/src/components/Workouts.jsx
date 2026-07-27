import { useEffect, useState } from 'react';

// VITE_CODESPACE_NAME must be defined in .env.local for Codespaces support.
// Example: VITE_CODESPACE_NAME=my-codespace-name
const CODESPACE_NAME = import.meta.env.VITE_CODESPACE_NAME;

const API_BASE_URL = CODESPACE_NAME
  ? `https://${CODESPACE_NAME}-8000.app.github.dev`
  : 'http://localhost:8000';

function Workouts() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function load() {
      try {
        const response = await fetch(`${API_BASE_URL}/api/workouts/`);
        const data = await response.json();
        const payload = Array.isArray(data) ? data : data.workouts ?? data.results ?? [];
        setItems(payload);
      } catch (err) {
        setError(err.message);
      }
    }

    load();
  }, []);

  return (
    <div className="container py-4">
      <h2 className="h4">Workouts</h2>
      {error ? <p className="text-danger">{error}</p> : null}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item._id || item.id || item.name}>
            <strong>{item.name}</strong> • {item.difficulty} • {item.durationMinutes} min
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Workouts;
