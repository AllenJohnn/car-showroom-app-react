import React from "react";

function DeleteCar() {
  return (
    <section className="page-stack">
      <div className="page-card">
        <div className="row g-3 form-grid">
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="" className="form-input">
              Car ID
            </label>
            <input type="text" className="form-control" />
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6 form-actions">
            <button className="btn btn-success">Delete</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DeleteCar;
