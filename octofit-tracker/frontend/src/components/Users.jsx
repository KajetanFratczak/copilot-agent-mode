import { useEffect, useState } from 'react';
import { getApiBaseUrl } from '../utils/api.js';

function Users() {
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function load() {
      try {
        const response = await fetch(`${getApiBaseUrl()}/api/users/`);
        const data = await response.json();
        const payload = Array.isArray(data) ? data : data.users ?? data.results ?? [];
        setItems(payload);
      } catch (err) {
        setError(err.message);
      }
    }

    load();
  }, []);

  return (
    <div className="container py-4">
      <h2 className="h4">Users</h2>
      {error ? <p className="text-danger">{error}</p> : null}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item._id || item.id || item.name}>
            <strong>{item.name}</strong> {item.role ? `• ${item.role}` : ''}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
