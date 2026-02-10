import { useMemo, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Login from "./components/Login";
import Signup from "./components/Signup";



import "./App.css";

const DESTINATIONS = [
  { id: 1, name: "Paris", type: "City" },
  { id: 2, name: "Bali", type: "Beach" },
  { id: 3, name: "Swiss Alps", type: "Mountain" },
  { id: 4, name: "Dubai", type: "City" },
];

// ---- helpers ----
const escapeRegExp = (str = "") =>
  str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

function highlightText(text, query, markStyle) {
  const q = query.trim();
  if (!q) return text;

  const parts = String(text).split(
    new RegExp(`(${escapeRegExp(q)})`, "ig")
  );

  return parts.map((part, idx) => {
    const isMatch = part.toLowerCase() === q.toLowerCase();
    return isMatch ? (
      <mark key={idx} style={markStyle}>
        {part}
      </mark>
    ) : (
      <span key={idx}>{part}</span>
    );
  });
}

function ClearButton({ onClick, styles }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={styles.clearBtn}
    >
      Clear Search
    </button>
  );
}

/* ---------------- HOME PAGE ---------------- */
function HomePage({ handleSearch, query, results, styles }) {
  return (
    <>
      <Hero />
      <Features />
      <Login/>

      <section id="results" style={styles.resultsSection}>
        <div style={styles.container}>
          <div style={styles.header}>
            <h2 style={styles.title}>Search Results</h2>

            <div style={styles.pill}>
              <span>Query:</span>
              <strong>{query ? `"${query}"` : "—"}</strong>
            </div>

            <ClearButton
              onClick={() => handleSearch("")}
              styles={styles}
            />
          </div>

          {!query.trim() ? (
            <div style={styles.empty}>
              Type something in search and press Enter.
            </div>
          ) : results.length === 0 ? (
            <div style={styles.empty}>
              No results found.
            </div>
          ) : (
            <div style={styles.grid}>
              {results.map((item) => (
                <div key={item.id} style={styles.card}>
                  <h3 style={styles.cardTitle}>
                    {highlightText(item.name, query, styles.mark)}
                  </h3>
                  <p style={styles.meta}>
                    Category:{" "}
                    {highlightText(item.type, query, styles.mark)}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

/* ---------------- MAIN APP ---------------- */
function App() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return [];

    return DESTINATIONS.filter((item) =>
      `${item.name} ${item.type}`.toLowerCase().includes(q)
    );
  }, [query]);

  const handleSearch = (text) => {
    setQuery(text);

    setTimeout(() => {
      const el = document.getElementById("results");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  const styles = {
    resultsSection: {
      padding: "80px 16px",
      background: "#0a1327",
      color: "#fff",
    },
    container: { maxWidth: 1100, margin: "0 auto" },
    header: {
      display: "flex",
      flexWrap: "wrap",
      gap: 12,
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 16,
    },
    title: { margin: 0 },
    pill: {
      padding: "6px 10px",
      borderRadius: 20,
      background: "rgba(255,255,255,0.1)",
      fontSize: 13,
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: 14,
      marginTop: 14,
    },
    card: {
      borderRadius: 12,
      padding: 16,
      background: "rgba(255,255,255,0.08)",
    },
    cardTitle: { margin: "0 0 8px" },
    meta: { margin: 0, fontSize: 14 },
    empty: {
      marginTop: 10,
      padding: 16,
      borderRadius: 12,
      background: "rgba(255,255,255,0.05)",
    },
    clearBtn: {
      padding: "8px 12px",
      borderRadius: 8,
      cursor: "pointer",
    },
    mark: {
      background: "cyan",
      padding: "2px 4px",
      borderRadius: 4,
    },
  };

return (
  <BrowserRouter>
    <Navbar onSearch={handleSearch} />

    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            handleSearch={handleSearch}
            query={query}
            results={results}
            styles={styles}
          />
        }
      />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup/>}/>
    </Routes>

    <Footer />
  </BrowserRouter>
);

}

export default App;
