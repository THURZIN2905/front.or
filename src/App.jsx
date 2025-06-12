import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'

// Importar componentes das páginas
import HomePage from './pages/HomePage'
import QuestionnairePage from './pages/QuestionnairePage'

// Importar componentes de layout
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

// Context para autenticação
import { AuthProvider } from './contexts/AuthContext'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/questionario" element={<QuestionnairePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App

