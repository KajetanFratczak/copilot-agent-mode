import { useEffect, useState } from 'react';

// VITE_CODESPACE_NAME must be defined in .env.local for Codespaces support.
// Example: VITE_CODESPACE_NAME=my-codespace-name
const API_BASE_URL = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/activities/`
  : 'http://localhost:8000/api/activities/';

function Activities() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function load() {
      try {
        const response = await fetch(`${API_BASE_URL}/api/activities/`);
        const data = await response.json();
        const payload = Array.isArray(data) ? data : data.activities ?? data.results ?? [];
        setItems(payload);
      } catch (err) {
        setError(err.message);
      }
    }

    load();
  }, []);

  return (
    <div className="container py-4">
      <h2 className="h4">Activities</h2>
      {error ? <p className="text-danger">{error}</p> : null}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item._id || item.id || item.type}>
            <strong>{item.type}</strong> • {item.durationMinutes} min • {item.caloriesBurned} kcal
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Activities;
