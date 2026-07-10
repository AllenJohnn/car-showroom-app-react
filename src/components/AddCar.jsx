import React from "react";
import NavBar from "./NavBar";

function AddCar() {
  return (
    <div>
      <NavBar />
      <div className="container" style={{ marginTop: 25 }}>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-input">
                  Car ID
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-input">
                  Brand
                </label>
                <select name="" id="" className="form-control">
                  <option value="">Select Brand</option>
                  <option value="bmw">BMW</option>
                  <option value="mercedes">Mercedes-Benz</option>
                  <option value="audi">Audi</option>
                  <option value="toyota">Toyota</option>
                  <option value="hyundai">Hyundai</option>
                  <option value="kia">Kia</option>
                  <option value="Mahindra">Mahindra</option>
                </select>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-input">
                  Model
                </label>
                <select name="" id="" className="form-control">
                  <option value="">Select Model</option>
                  <option value="bmw">X5</option>
                  <option value="mercedes">C-Class</option>
                  <option value="audi">A6</option>
                  <option value="toyota">Fortuner</option>
                  <option value="hyundai">Creta</option>
                  <option value="kia">Seltos</option>
                  <option value="Mahindra">XUV700</option>
                </select>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-input">
                  Fuel Type
                </label>
                <select name="" id="" className="form-control">
                  <option value="">Select Fuel Type</option>
                  <option value="petrol">Petrol</option>
                  <option value="diesel">Diesel</option>
                </select>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-input">
                  Transmission
                </label>
                <select name="" id="" className="form-control">
                  <option value="">Select Transmission</option>
                  <option value="manual">Manual</option>
                  <option value="automatic">Automatic</option>
                </select>
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-input">
                  Price
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-input">
                  Color
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-input">
                  Manufacturing Year
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-input">
                  Image URL{" "}
                </label>
                <input type="text" className="form-control" />
              </div>

              <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-input">
                  Description
                </label>
                <input type="text" className="form-control" />
              </div>
              <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <button className="btn btn-primary">Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCar;
