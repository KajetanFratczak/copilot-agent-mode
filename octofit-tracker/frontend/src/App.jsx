import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

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
          <div className="card h-100">
            <div className="card-body">
              <h2 className="h6">Workouts</h2>
              <p className="mb-0">Track your next sessions.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="h6">Teams</h2>
              <p className="mb-0">Coordinate and challenge friends.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="h6">Leaderboard</h2>
              <p className="mb-0">See who is leading the pack.</p>
            </div>
          </div>
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
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App
