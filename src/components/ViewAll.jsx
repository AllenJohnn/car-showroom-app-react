import React from "react";

function ViewAll() {
  const [data] = React.useState([
    {
      carId: "CAR101",
      brand: "BMW",
      model: "X5",
      fuelType: "Diesel",
      transmission: "Automatic",
      price: "9,500,000",
      color: "Black",
      year: 2024,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn5JJNmoG4oQ5SNotS0udFK7gdd_zRhgXVsmNzNEGQuw&s=10",
      description: "Luxury SUV with premium features.",
    },
    {
      carId: "CAR102",
      brand: "Mercedes-Benz",
      model: "C-Class",
      fuelType: "Petrol",
      transmission: "Automatic",
      price: "6,200,000",
      color: "White",
      year: 2023,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuGd5ix5MBoPVActbBlfMauybfxGQKpkr7t_tDHT1elg&s=10",
      description: "Premium executive sedan.",
    },
    {
      carId: "CAR103",
      brand: "Audi",
      model: "A6",
      fuelType: "Petrol",
      transmission: "Automatic",
      price: "6,800,000",
      color: "Grey",
      year: 2024,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSYT2xzLJSqv5lxzC6YOL4l_dLPnJkWxb8s88DbJqIYA&s=10",
      description: "Luxury sedan with advanced technology.",
    },
    {
      carId: "CAR104",
      brand: "Toyota",
      model: "Fortuner",
      fuelType: "Diesel",
      transmission: "Automatic",
      price: "5,200,000",
      color: "Silver",
      year: 2023,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn9q_5NbKTnTDuNBZLPEX7SZOcfksEMM9xwLa_rWeS4A&s=10",
      description: "Powerful SUV suitable for long journeys.",
    },
    {
      carId: "CAR105",
      brand: "Hyundai",
      model: "Creta",
      fuelType: "Petrol",
      transmission: "Manual",
      price: "1,800,000",
      color: "Blue",
      year: 2024,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ29J7cdt8mOXDVhnQqE4BnNSwJQctF8XASUvDfVLOuxw&s=10",
      description: "Popular compact SUV.",
    },
    {
      carId: "CAR106",
      brand: "Kia",
      model: "Seltos",
      fuelType: "Diesel",
      transmission: "Automatic",
      price: "2,100,000",
      color: "Red",
      year: 2024,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ69-Ae9ceQL4O20-S2PEmSfMXLtrwOsd1Im0nPE-EMJxPABXPybFRRXujd&s=10",
      description: "Stylish SUV with modern features.",
    },
    {
      carId: "CAR107",
      brand: "Mahindra",
      model: "XUV700",
      fuelType: "Diesel",
      transmission: "Automatic",
      price: "2,600,000",
      color: "Black",
      year: 2024,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNyOJmp1TZliepGLru2At6VV4ikUnOCvwZgg1kbLKORw&s=10",
      description: "Feature-rich family SUV.",
    },
    {
      carId: "CAR108",
      brand: "BMW",
      model: "M5",
      fuelType: "Diesel",
      transmission: "Automatic",
      price: "2,400,000",
      color: "Orange",
      year: 2023,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDFUy6qSGY-m7ga5LKlZ8juLVw_GYIe2A4T6Tq4Drv3A&s",
      description: "Bold SUV with excellent safety.",
    },
  ]);

  // Inline styles for easy styling injection
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
                <li style={{...styles.specItem, borderBottom: "none", paddingTop: "0.75rem"}}>
                  <span style={{...styles.label, color: "#1a1a1a", fontSize: "1rem"}}>Price</span>
                  <span style={{...styles.value, color: "#2b6cb0", fontSize: "1.1rem"}}>₹{car.price}</span>
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