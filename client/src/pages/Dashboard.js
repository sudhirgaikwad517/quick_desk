import Navbar from '../components/Navbar.js';

function Dashboard() {
  return (
    <div>
      <Navbar />  {/* 👈 This shows your nav at the top */}
      <h2>Welcome to the Dashboard</h2>
      {/* Your ticket list or other content */}
    </div>
  );
}

export default Dashboard;

