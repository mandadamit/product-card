import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import Home from "./pages/Home"
import About from "./pages/About"
import ErrorBoundary from "./components/ErrorBoundary"
import NotFound from "./pages/NotFound"
import Signup from './pages/Signup'
import Login from './pages/Login'
import Dashboard from './pages/dashboard/dashboard'
import DashboardLayout from './layouts/DashboardLayout'
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'

function App() {
  return (
    <>
      <ErrorBoundary>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
            </Route>
            <Route element={<PrivateRoute />} >
              <Route path='/dashboard' element={<DashboardLayout />}>
                <Route index element={<Dashboard />} />
              </Route>
            </Route>
            <Route element={<PublicRoute />} >
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </>
  )
}

export default App
