import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import NotificationsPage from './pages/NotificationsPage';
import NotificationDetailsPage from './pages/NotificationDetailsPage';
import ResultsPage from './pages/ResultsPage';
import ResultDetailsPage from './pages/ResultDetailsPage';
import AdmitCardPage from './pages/AdmitCardPage';
import AdmitCardDetailsPage from './pages/AdmitCardDetailsPage';
import AboutPage from './pages/AboutPage';
import AdmissionPage from './pages/AdmissionPage';
import AdmissionDetailsPage from './pages/AdmissionDetailsPage';
import SyllabusPage from './pages/SyllabusPage';
import SyllabusDetailsPage from './pages/SyllabusDetailsPage';
import AnswerKeyPage from './pages/AnswerKeyPage';
import AnswerKeyDetailsPage from './pages/AnswerKeyDetailsPage';
import ContactPage from './pages/ContactPage';
import JobsPage from './pages/JobsPage';
import JobDetailsPage from './pages/JobDetailsPage';

// ✅ ScrollToTop Component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* ✅ अब हर route change पर page top से खुलेगा */}
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/notifications/:id" element={<NotificationDetailsPage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/results/:id" element={<ResultDetailsPage />} />
            <Route path="/admit-card" element={<AdmitCardPage />} />
            <Route path="/admit-card/:id" element={<AdmitCardDetailsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/admission" element={<AdmissionPage />} />
            <Route path="/admission/:id" element={<AdmissionDetailsPage />} />
            <Route path="/syllabus" element={<SyllabusPage />} />
            <Route path="/syllabus/:id" element={<SyllabusDetailsPage />} />
            <Route path="/answer-key" element={<AnswerKeyPage />} />
            <Route path="/answer-key/:id" element={<AnswerKeyDetailsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route path="/jobs/:id" element={<JobDetailsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
