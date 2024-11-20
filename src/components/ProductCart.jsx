import React from "react";

function ProductCart({ cartList, removeItemFromCart }) {
  return (
    <>
      <div className="container d-flex flex-wrap my-5">
        {cartList.length > 0 ? (
          cartList.map((item, index) => (
            <div class="card mb-3 mx-2 col-2" style={{ maxWidth: "540px" }}>
              <div class="row g-0">
                <div class="col-12">
                  <img
                    src={item.url}
                    class="img-fluid object-fit-cover rounded-top"
                    alt="..."
                  />
                </div>
                <div class="col">
                  <div class="card-body">
                    <h5 class="card-title">{item.title}</h5>
                    <p class="card-text">Rs {item.price}</p>
                    <button
                      className="btn btn-danger"
                      onClick={() => removeItemFromCart(item.id)}
                    >
                      {" "}
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h3 className="text-center mt-3">Missing Cart items?</h3>
        )}
      </div>
    </>
  );
}

export default ProductCart;
