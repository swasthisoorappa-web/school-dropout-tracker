import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Students from './pages/Students'
import Attendance from './pages/Attendance'
import Analytics from './pages/Analytics'
import AtRisk from './pages/AtRisk'
import FollowUps from './pages/FollowUps'
import Reports from './pages/Reports'
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/students" element={<Students />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/at-risk" element={<AtRisk />} />
        <Route path="/followups" element={<FollowUps />} />
        <Route path="/reports" element={<Reports />} />
      </Route>
    </Routes>
  )
}
