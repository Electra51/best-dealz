import React, { useEffect, useState } from "react";
import "./BestSellers.css";

const BestSellers = ({ handleAddToCart }) => {
  const [bestSellers, setBestSellers] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        // Sort by ratings and get top 8
        const sorted = data
          .sort(
            (a, b) => b.ratings - a.ratings || b.ratingsCount - a.ratingsCount
          )
          .slice(0, 8);
        setBestSellers(sorted);
      });
  }, []);

  const openQuickView = (product) => {
    setSelectedProduct(product);
    document.body.style.overflow = "hidden";
  };

  const closeQuickView = () => {
    setSelectedProduct(null);
    document.body.style.overflow = "auto";
  };

  const renderStars = (rating) => {
    return (
      <div className="stars">
        {[...Array(5)].map((_, index) => (
          <span key={index} className={index < rating ? "star filled" : "star"}>
            ★
          </span>
        ))}
      </div>
    );
  };

  const getBadge = (product) => {
    if (product.ratingsCount > 3000) {
      return { text: "Most Reviewed", className: "badge-reviewed" };
    }
    if (product.ratings === 5) {
      return { text: "Top Rated", className: "badge-top" };
    }
    if (product.shipping < 15) {
      return { text: "Hot Deal", className: "badge-hot" };
    }
    return { text: "Trending", className: "badge-trending" };
  };

  return (
    <section className="best-sellers">
      <div className="best-sellers-header">
        <span className="section-badge">Best Picks</span>
        <h2 className="section-title">Trending Products</h2>
        <p className="section-description">
          Discover our most loved products chosen by thousands of satisfied
          customers
        </p>
      </div>

      <div className="best-sellers-grid">
        {bestSellers.map((product) => {
          const badge = getBadge(product);
          return (
            <div key={product.id} className="bestseller-card">
              <div className="card-badge-container">
                <span className={`card-badge ${badge.className}`}>
                  {badge.text}
                </span>
              </div>

              <div className="card-image-wrapper">
                <img
                  src={product.img}
                  alt={product.name}
                  className="card-image"
                />
                <div className="card-overlay">
                  <button
                    className="quick-view-btn"
                    onClick={() => openQuickView(product)}>
                    <svg
                      className="eye-icon"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    Quick View
                  </button>
                </div>
              </div>

              <div className="card-content">
                <p className="card-category">{product.category}</p>
                <h3 className="card-title">{product.name}</h3>
                <p className="card-seller">by {product.seller}</p>

                <div className="card-rating">
                  {renderStars(product.ratings)}
                  <span className="rating-count">
                    ({product.ratingsCount.toLocaleString()})
                  </span>
                </div>

                <div className="card-footer">
                  <div className="card-price">
                    <span className="price">${product.price}</span>
                    {product.shipping > 0 && (
                      <span className="shipping">
                        +${product.shipping} shipping
                      </span>
                    )}
                    {product.shipping === 1 && (
                      <span className="free-shipping">Free Shipping</span>
                    )}
                  </div>
                  <button
                    className="add-to-cart-btn"
                    onClick={() => handleAddToCart(product)}>
                    <svg
                      className="cart-icon"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick View Modal */}
      {selectedProduct && (
        <div className="quick-view-modal" onClick={closeQuickView}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeQuickView}>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="modal-grid">
              <div className="modal-image">
                <img src={selectedProduct.img} alt={selectedProduct.name} />
              </div>

              <div className="modal-details">
                <span className="modal-category">
                  {selectedProduct.category}
                </span>
                <h2 className="modal-title">{selectedProduct.name}</h2>
                <p className="modal-seller">by {selectedProduct.seller}</p>

                <div className="modal-rating">
                  {renderStars(selectedProduct.ratings)}
                  <span className="modal-rating-count">
                    {selectedProduct.ratings} out of 5 (
                    {selectedProduct.ratingsCount.toLocaleString()} reviews)
                  </span>
                </div>

                <div className="modal-price-section">
                  <span className="modal-price">${selectedProduct.price}</span>
                  {selectedProduct.shipping === 1 ? (
                    <span className="modal-free-shipping">Free Shipping</span>
                  ) : (
                    <span className="modal-shipping">
                      +${selectedProduct.shipping} shipping
                    </span>
                  )}
                </div>

                <div className="modal-stock">
                  {selectedProduct.stock > 10 ? (
                    <span className="in-stock">
                      ✓ In Stock ({selectedProduct.stock} available)
                    </span>
                  ) : selectedProduct.stock > 0 ? (
                    <span className="low-stock">
                      ⚠ Only {selectedProduct.stock} left!
                    </span>
                  ) : (
                    <span className="out-of-stock">✗ Out of Stock</span>
                  )}
                </div>

                <button
                  className="modal-add-btn"
                  onClick={() => {
                    handleAddToCart(selectedProduct);
                    closeQuickView();
                  }}
                  disabled={selectedProduct.stock === 0}>
                  <svg
                    className="modal-cart-icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Add to Cart
                </button>

                <div className="modal-features">
                  <div className="feature-item">
                    <svg
                      className="feature-icon"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>100% Authentic</span>
                  </div>
                  <div className="feature-item">
                    <svg
                      className="feature-icon"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                    <span>Secure Payment</span>
                  </div>
                  <div className="feature-item">
                    <svg
                      className="feature-icon"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                    <span>Easy Returns</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default BestSellers;
