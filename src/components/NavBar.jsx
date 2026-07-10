import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Helps us highlight the current active tab dynamically

  // Premium Dark UI Theme Styles
  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1rem 4rem",
      backgroundColor: "#0d0e12", // Deep premium midnight black
      borderBottom: "1px solid #1f242e", // Subtle split line
      backdropFilter: "blur(10px)",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
    },
    brand: {
      fontSize: "1.35rem",
      fontWeight: "800",
      color: "#ffffff",
      textDecoration: "none",
      letterSpacing: "-0.5px",
      display: "flex",
      alignItems: "center",
      gap: "0.5rem",
    },
    brandDot: {
      color: "#3b82f6", // Electric blue accent dot
    },
    navLinks: {
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
    link: (isActive) => ({
      fontSize: "0.92rem",
      fontWeight: "500",
      color: isActive ? "#ffffff" : "#94a3b8", // Bright white if active, slate if not
      textDecoration: "none",
      padding: "0.6rem 1.1rem",
      borderRadius: "8px",
      backgroundColor: isActive ? "#1e293b" : "transparent", // Highlight capsule for active route
      transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
    }),
  };

  // Quick helper to check if the link path matches the current address
  const isCurrent = (path) => location.pathname === path;

  return (
    <nav style={styles.navbar}>
      {/* Logo */}
      <Link style={styles.brand} to="/">
        CarShowroom<span style={styles.brandDot}>.</span>
      </Link>

      {/* Navigation Links */}
      <ul style={styles.navLinks}>
        <li>
          <Link to="/all" style={styles.link(isCurrent("/all"))}>
            Inventory
          </Link>
        </li>
        <li>
          <Link to="/add" style={styles.link(isCurrent("/add"))}>
            Add Car
          </Link>
        </li>
        <li>
          <Link to="/search" style={styles.link(isCurrent("/search"))}>
            Search
          </Link>
        </li>
        <li>
          <Link to="/delete" style={styles.link(isCurrent("/delete"))}>
            Manage
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;