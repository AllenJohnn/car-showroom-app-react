import axios from "axios";
import React, { useEffect } from "react";

function ViewAll() {
  const [data, setData] = React.useState([]);

  const fetchdata = () => {
    axios
      .get(
        "https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/car-data.json",
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching car data:", error);
      });
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const styles = {
    container: {
      padding: "2rem",
      backgroundColor: "#f9f9f9",
      minHeight: "100vh",
      fontFamily: "system-ui, -apple-system, sans-serif",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
      gap: "2rem",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    card: {
      backgroundColor: "#ffffff",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
      display: "flex",
      flexDirection: "column",
      transition: "transform 0.2s ease",
    },
    image: {
      width: "100%",
      height: "180px",
      objectFit: "cover",
      borderBottom: "1px solid #eee",
    },
    body: {
      padding: "1.25rem",
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
    },
    title: {
      margin: "0 0 0.5rem 0",
      fontSize: "1.25rem",
      color: "#1a1a1a",
      fontWeight: "600",
    },
    description: {
      margin: "0 0 1rem 0",
      fontSize: "0.9rem",
      color: "#666",
      lineHeight: "1.4",
    },
    specsList: {
      listStyle: "none",
      padding: 0,
      margin: "auto 0 0 0", // Pushes specs to bottom if descriptions vary in length
      borderTop: "1px solid #edf2f7",
    },
    specItem: {
      display: "flex",
      justifyContent: "space-between",
      padding: "0.5rem 0",
      fontSize: "0.85rem",
      color: "#4a5568",
      borderBottom: "1px solid #f7fafc",
    },
    label: {
      fontWeight: "500",
      color: "#718096",
    },
    value: {
      fontWeight: "600",
    },
  };

  return (
    <section style={styles.container}>
      <div style={styles.grid}>
        {data.map((car) => (
          <article key={car.carId} style={styles.card}>
            <img
              src={car.image}
              style={styles.image}
              alt={`${car.brand} ${car.model}`}
            />
            <div style={styles.body}>
              <h5 style={styles.title}>
                {car.brand} {car.model}
              </h5>
              <p style={styles.description}>{car.description}</p>

              <ul style={styles.specsList}>
                <li style={styles.specItem}>
                  <span style={styles.label}>Fuel Type</span>
                  <span style={styles.value}>{car.fuelType}</span>
                </li>
                <li style={styles.specItem}>
                  <span style={styles.label}>Transmission</span>
                  <span style={styles.value}>{car.transmission}</span>
                </li>
                <li style={styles.specItem}>
                  <span style={styles.label}>Color</span>
                  <span style={styles.value}>{car.color}</span>
                </li>
                <li style={styles.specItem}>
                  <span style={styles.label}>Year</span>
                  <span style={styles.value}>{car.year}</span>
                </li>
                <li
                  style={{
                    ...styles.specItem,
                    borderBottom: "none",
                    paddingTop: "0.75rem",
                  }}
                >
                  <span
                    style={{
                      ...styles.label,
                      color: "#1a1a1a",
                      fontSize: "1rem",
                    }}
                  >
                    Price
                  </span>
                  <span
                    style={{
                      ...styles.value,
                      color: "#2b6cb0",
                      fontSize: "1.1rem",
                    }}
                  >
                    ₹{car.price}
                  </span>
                </li>
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ViewAll;