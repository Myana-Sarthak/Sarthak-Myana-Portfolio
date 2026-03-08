import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Hero, About, Skills, Services, Works, Education, Certifications, Contact, Footer } from "./components/Portfolio";
import { ProjectPage } from "./components/ProjectPage";

const HomePage = () => (
  <>
    <Hero />
    <About />
    <Skills />
    <Services />
    <Works />
    <Education />
    <Certifications />
    <Contact />
  </>
);

export default function App() {
  return (
    <Router>
      <div className="bg-bg-dark min-h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:id" element={<ProjectPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
