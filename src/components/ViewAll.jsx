import React from "react";

function ViewAll() {
  const [data, setData] = React.useState([
    {
      carId: "CAR101",
      brand: "BMW",
      model: "X5",
      fuelType: "Diesel",
      transmission: "Automatic",
      price: "9500000",
      color: "Black",
      year: 2024,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn5JJNmoG4oQ5SNotS0udFK7gdd_zRhgXVsmNzNEGQuw&s=10",
      description: "Luxury SUV with premium features.",
    },
    {
      carId: "CAR102",
      brand: "Mercedes-Benz",
      model: "C-Class",
      fuelType: "Petrol",
      transmission: "Automatic",
      price: "6200000",
      color: "White",
      year: 2023,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuGd5ix5MBoPVActbBlfMauybfxGQKpkr7t_tDHT1elg&s=10",
      description: "Premium executive sedan.",
    },
    {
      carId: "CAR103",
      brand: "Audi",
      model: "A6",
      fuelType: "Petrol",
      transmission: "Automatic",
      price: "6800000",
      color: "Grey",
      year: 2024,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSYT2xzLJSqv5lxzC6YOL4l_dLPnJkWxb8s88DbJqIYA&s=10",
      description: "Luxury sedan with advanced technology.",
    },
    {
      carId: "CAR104",
      brand: "Toyota",
      model: "Fortuner",
      fuelType: "Diesel",
      transmission: "Automatic",
      price: "5200000",
      color: "Silver",
      year: 2023,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn9q_5NbKTnTDuNBZLPEX7SZOcfksEMM9xwLa_rWeS4A&s=10",
      description: "Powerful SUV suitable for long journeys.",
    },
    {
      carId: "CAR105",
      brand: "Hyundai",
      model: "Creta",
      fuelType: "Petrol",
      transmission: "Manual",
      price: "1800000",
      color: "Blue",
      year: 2024,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ29J7cdt8mOXDVhnQqE4BnNSwJQctF8XASUvDfVLOuxw&s=10",
      description: "Popular compact SUV.",
    },
    {
      carId: "CAR106",
      brand: "Kia",
      model: "Seltos",
      fuelType: "Diesel",
      transmission: "Automatic",
      price: "2100000",
      color: "Red",
      year: 2024,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ69-Ae9ceQL4O20-S2PEmSfMXLtrwOsd1Im0nPE-EMJxPABXPybFRRXujd&s=10",
      description: "Stylish SUV with modern features.",
    },
    {
      carId: "CAR107",
      brand: "Mahindra",
      model: "XUV700",
      fuelType: "Diesel",
      transmission: "Automatic",
      price: "2600000",
      color: "Black",
      year: 2024,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNyOJmp1TZliepGLru2At6VV4ikUnOCvwZgg1kbLKORw&s=10",
      description: "Feature-rich family SUV.",
    },
    {
      carId: "CAR108",
      brand: "BMW",
      model: "m5",
      fuelType: "Diesel",
      transmission: "Automatic",
      price: "2400000",
      color: "Orange",
      year: 2023,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDFUy6qSGY-m7ga5LKlZ8juLVw_GYIe2A4T6Tq4Drv3A&s",
      description: "Bold SUV with excellent safety.",
    },
  ]);
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row">
              {data.map((car) => (
                <div
                  key={car.carId}
                  className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-4 mb-4"
                >
                  <div className="card h-100">
                    <img
                      src={car.image}
                      className="card-img-top"
                      alt={car.brand}
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        {car.brand} {car.model}
                      </h5>
                      <p className="card-text">{car.description}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">Brand: {car.brand}</li>
                      <li className="list-group-item">Model: {car.model}</li>
                      <li className="list-group-item">
                        Fuel Type: {car.fuelType}
                      </li>
                      <li className="list-group-item">Price: {car.price}</li>
                      <li className="list-group-item">Color: {car.color}</li>
                      <li className="list-group-item">
                        Manufacturing Year: {car.year}
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewAll;
