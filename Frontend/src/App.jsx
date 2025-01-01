// export default App
// Importing necessary components for the application
import { Header } from "./components/Header"; // Header component
import { Footer } from "./components/Footer"; // Footer component
import { Routes, Route } from "react-router-dom"; // For routing between pages
import { Home } from "./components/pages/Home"; // Home page component
import { Teams } from "./components/pages/Teams"; // Teams page component
import { Networks } from "./components/pages/Networks"; // Networks page component
import { Collaborate } from "./components/pages/Collaborate"; // Collaborate page component
import { JoinUs } from "./components/pages/JoinUs"; // Join Us page component

function App() {
  return (
    <div>
      {/* Header component */}
      <Header />

      {/* Routing configuration */}
      <Routes>
        {/* Route definitions */}
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Teams" element={<Teams />} />
        <Route path="/Networks" element={<Networks />} />
        <Route path="/Collaborate" element={<Collaborate />} />
        <Route path="/JoinUs" element={<JoinUs />} />
      </Routes>

      {/* Footer component */}
      <Footer />
    </div>
  );
}

export default App;
