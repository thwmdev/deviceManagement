import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import DashBoard from "./components/DashBoard";
import Assets from "./components/Assets";
import Report from "./components/Report";
import Allocation from "./components/Allocation";
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">

        {/* SIDEBAR */}
        <aside className="sidebar">
          <div className="sidebar__top">
            <button className="icon-button">☰</button>
          </div>

          <nav className="sidebar__nav">
            <Link to="/" className="sidebar__link">DashBoard</Link>
            <Link to="/assets" className="sidebar__link">Tài sản</Link>
            <Link to="/allocation" className="sidebar__link">Yêu cầu</Link>
              <Link to="/report" className="sidebar__link">Báo cáo</Link>
          </nav>
        </aside>

        {/* MAIN */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/assets" element={<Assets />} />
            <Route path="/allocation" element={<Allocation />} />
            <Route path="/report" element={<Report />} />
            
            
          </Routes>
        </main>

      </div>
    </BrowserRouter>
  )
}

export default App