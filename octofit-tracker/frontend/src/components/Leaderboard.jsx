import { useEffect, useState } from 'react';
import { getApiBaseUrl } from '../utils/api.js';

function Leaderboard() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');
  const endpoint = '/api/leaderboard/';

  useEffect(() => {
    async function load() {
      try {
        const response = await fetch(`${getApiBaseUrl()}${endpoint}`);
        const data = await response.json();
        const payload = Array.isArray(data) ? data : data.leaderboard ?? data.results ?? [];
        setItems(payload);
      } catch (err) {
        setError(err.message);
      }
    }

    load();
  }, []);

  return (
    <div className="container py-4">
      <h2 className="h4">Leaderboard</h2>
      {error ? <p className="text-danger">{error}</p> : null}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item._id || item.id || item.rank}>
            <strong>#{item.rank}</strong> {item.user?.name || item.name} • {item.points} pts
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Leaderboard;
