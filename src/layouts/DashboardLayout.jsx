import DashboardHeader from '../components/DashboardHeader'
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Footer';

function DashboardLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <DashboardHeader />
      <main className="flex-1 container mx-auto p-4">
        <ToastContainer position="top-center" autoClose={3000} />
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default DashboardLayout