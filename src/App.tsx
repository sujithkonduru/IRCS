import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import DeleteAccount from "./pages/DeleteAccount";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";

function NotFound() {
  return (
    <div className="container-page flex min-h-[50vh] flex-col items-center justify-center gap-3 py-24 text-center">
      <h1 className="text-3xl font-bold text-[var(--color-ink)]">Page Not Found</h1>
      <p className="text-[var(--color-ink-muted)]">
        The page you are looking for does not exist.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-[var(--color-primary)] focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <ScrollToTop />
      <Header />
      <main id="main-content" className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/delete-account" element={<DeleteAccount />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
