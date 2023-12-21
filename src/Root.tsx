import {
  Routes,
  Route,
  HashRouter as Router,
  Navigate,
} from 'react-router-dom';

import { App } from './App';
import { HomePage } from './pages/HomePage';
import { AboutUsPage } from './pages/AboutUsPage';
import { PageNotFound } from './pages/PageNotFound';
import { FAQPage } from './pages/FAQPage';
import { ServicesPage } from './pages/ServicesPage';
import { ContactsPage } from './pages/ContactsPage';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="about-us" element={<AboutUsPage />} />
        <Route path="faq" element={<FAQPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  </Router>
);
