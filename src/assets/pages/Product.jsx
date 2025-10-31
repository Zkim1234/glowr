import "./product.css";
import Modal from "../components/Modal";
import Dialog from "../components/Dialog";
import React from "react";
import productsData from "../../../products.json";

function Product({ onBackToHome, productId = 1 }) {
  const [showFullDescription, setShowFullDescription] = React.useState(false);
  const [product, setProduct] = React.useState(null);

  const [reviews, setReviews] = React.useState([]);

  // initialize reviews when product loads (fallback to a couple sample reviews)
  React.useEffect(() => {
    if (!product) return;
    if (product.reviews && Array.isArray(product.reviews)) {
      setReviews(product.reviews);
    }
  }, [product]);

  function addReview(newReview) {
    const withId = { ...newReview, id: Date.now() };
    setReviews((prev) => [withId, ...prev]);
  }

  // Load product data based on productId
  React.useEffect(() => {
    const foundProduct = productsData.find((p) => p.id === productId);
    setProduct(foundProduct || productsData[0]); // fallback to first product if not found
  }, [productId]);

  // Scroll to top when component mounts
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-container">
      <button className="back-btn" onClick={onBackToHome}>
        ×
      </button>
      <img className="product-img" src={product.image} alt={product.name} />
      <div className="product-details">
        <div>
          {/* product title and description */}
          <p className="mobile-subheading brand-name desktop-h1">
            {product.brand}
          </p>
          <h1 className="mobile-title desktop-title">{product.name}</h1>
          <p className="mobile-regular desktop-regular">
            {showFullDescription
              ? product.description
              : product.shortDescription}
            <button
              className="details-button"
              style={{ marginLeft: 8 }}
              onClick={() => setShowFullDescription((prev) => !prev)}
            >
              {showFullDescription ? "Hide" : "Details"}
            </button>
          </p>
        </div>
        <div className="rating">
          {/* overall rating */}
          <span className="rating-avg desktop-title">{product.rating}</span>
          <span>⭐⭐⭐⭐⭐</span>
          <span className="mobile-small desktop-regular">
            {product.reviewCount} reviews...
          </span>
        </div>
        <div className="ingredients">
          <h2 className="mobile-subheading bold desktop-h1">Ingredients</h2>
          <div className="ingredients-info">
            <div className="ingredients-detected">
              <p>Harmful Ingredients</p>
              <p className="bold align-right">
                {" "}
                {product.harmfulIngredients.length} detected
              </p>
              <p>Potential Skin Allergens Ingredients</p>
              <p className="bold align-right">
                {" "}
                {product.potentialAllergens} detected
              </p>
            </div>
            <div>
              {/* best for graph */}
              <h3 className="mobile-subheading bold desktop-h2">Best for</h3>
              <div className="best-for-graph">
                {product.bestFor.map((bar) => (
                  <div key={bar.label} className="bar-container">
                    <div
                      className="best-for-bar"
                      style={{ "--bar-height": bar.height }}
                    ></div>
                    <span className="mobile-small desktop-regular">
                      {bar.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="desktop-bigger-regular">{product.ingredients}</p>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="reviews-section">
        <div className="review-header">
          <h2 className="mobile-subheading bold desktop-title">Reviews</h2>
          <Modal
            trigger={<button className="review-button">Write a Review</button>}
            childProps={{ onSubmit: addReview }}
          >
            <Dialog />
          </Modal>
        </div>
        <div className="all-reviews">
          {reviews.length === 0 ? (
            <p className="mobile-regular desktop-regular">No reviews yet.</p>
          ) : (
            reviews.map((r) => (
              <div className="review" key={r.id}>
                <div className="review-rating">
                  <p className="mobile-subheading desktop-h3">{r.name}</p>
                  <span className="mobile-small desktop-small">{r.date}</span>
                </div>
                <span className="review-stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <img
                      key={i}
                      src={
                        i < r.rating ? "/starFilled.svg" : "/starUnfilled.svg"
                      }
                      alt={
                        i < r.rating
                          ? `filled star ${i + 1}`
                          : `empty star ${i + 1}`
                      }
                      style={{ width: 18, height: 18, marginRight: 6 }}
                    />
                  ))}
                </span>
                {r.title ? (
                  <p className="bold mobile-regular desktop-regular">
                    {r.title}
                  </p>
                ) : null}
                <p className="bold mobile-regular desktop-regular">
                  Skin Type: {r.skinType}
                </p>
                <p className="mobile-regular desktop-regular">{r.text}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
