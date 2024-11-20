
import React, { useState } from "react";

function AddProduct({handlePost}) {
  let [product, setProduct] = useState({});

  let handleChange = (e) => {
    let { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    handlePost(product);
    setProduct({});
  };


  return (
    <>
      <div className="container mx-auto w-25 mt-5">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              aria-describedby="emailHelp"
              onChange={handleChange}
              value={product.title || ''}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Price</label>
            <input
              type="text"
              className="form-control"
              name="price"
              onChange={handleChange}
              value={product.price || ''}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Image Url</label>
            <input
              type="url"
              className="form-control"
              name="url"
              onChange={handleChange}
              value={product.url || ''}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default AddProduct;
