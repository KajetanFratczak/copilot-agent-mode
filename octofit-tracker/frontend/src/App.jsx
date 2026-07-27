import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'

function Home() {
  return (
    <div className="container py-5">
      <div className="row align-items-center g-4">
        <div className="col-lg-7">
          <h1 className="display-5 fw-bold">OctoFit Tracker</h1>
          <p className="lead text-muted">
            A modern multi-tier fitness platform for tracking activity, managing teams,
            and staying motivated.
          </p>
          <div className="d-flex gap-3">
            <Link className="btn btn-primary btn-lg" to="/dashboard">
              Explore dashboard
            </Link>
            <a className="btn btn-outline-secondary btn-lg" href="http://localhost:8000/api/health">
              API health
            </a>
          </div>
          <p className="mt-3 text-muted small">
            Configure VITE_CODESPACE_NAME in .env.local to target the Codespaces backend URL.
          </p>
        </div>
        <div className="col-lg-5">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="h5">What you can do</h2>
              <ul className="mb-0">
                <li>Log workouts and activities</li>
                <li>Build teams and compete</li>
                <li>View leaderboard insights</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Dashboard() {
  return (
    <div className="container py-5">
      <h1 className="display-6 fw-semibold">Dashboard</h1>
      <p className="text-muted">Your personalized fitness overview is ready.</p>
      <div className="row g-3">
        <div className="col-md-4">
          <Link className="text-decoration-none text-dark" to="/workouts">
            <div className="card h-100">
              <div className="card-body">
                <h2 className="h6">Workouts</h2>
                <p className="mb-0">Track your next sessions.</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-4">
          <Link className="text-decoration-none text-dark" to="/teams">
            <div className="card h-100">
              <div className="card-body">
                <h2 className="h6">Teams</h2>
                <p className="mb-0">Coordinate and challenge friends.</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-md-4">
          <Link className="text-decoration-none text-dark" to="/leaderboard">
            <div className="card h-100">
              <div className="card-body">
                <h2 className="h6">Leaderboard</h2>
                <p className="mb-0">See who is leading the pack.</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            OctoFit Tracker
          </Link>
          <div className="navbar-nav ms-auto">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/dashboard">
              Dashboard
            </Link>
            <Link className="nav-link" to="/users">
              Users
            </Link>
            <Link className="nav-link" to="/activities">
              Activities
            </Link>
            <Link className="nav-link" to="/teams">
              Teams
            </Link>
            <Link className="nav-link" to="/leaderboard">
              Leaderboard
            </Link>
            <Link className="nav-link" to="/workouts">
              Workouts
            </Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/activities" element={<Activities />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/workouts" element={<Workouts />} />
      </Routes>
    </div>
  )
}

export default App
