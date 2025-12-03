import "./product.css";
import Modal from "../components/Modal";
import Dialog from "../components/Dialog";
import React from "react";
import productsData from "../../../products.json";

function Product({ onBackToHome, productId = 1 }) {
  const [showFullDescription, setShowFullDescription] = React.useState(false);
  const [product, setProduct] = React.useState(null);

  const [reviews, setReviews] = React.useState([]);
  const [editingReview, setEditingReview] = React.useState(null);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [openMenuId, setOpenMenuId] = React.useState(null);
  const [skinTypeFilter, setSkinTypeFilter] = React.useState("All");
  const [sortBy, setSortBy] = React.useState("newest");

  // Load user reviews from localStorage
  const getUserReviews = (productId) => {
    try {
      const stored = localStorage.getItem(`glowr-reviews-${productId}`);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error("Error loading reviews from localStorage:", error);
      return [];
    }
  };

  // Save user reviews to localStorage
  const saveUserReviews = (productId, userReviews) => {
    try {
      localStorage.setItem(
        `glowr-reviews-${productId}`,
        JSON.stringify(userReviews)
      );
    } catch (error) {
      console.error("Error saving reviews to localStorage:", error);
    }
  };

  // initialize reviews when product loads (mark API reviews as non-editable)
  React.useEffect(() => {
    if (!product) return;

    // Get API reviews from product data
    const apiReviews =
      product.reviews?.map((review) => ({
        ...review,
        isApiReview: true,
      })) || [];

    // Get user reviews from localStorage
    const userReviews = getUserReviews(product.id);

    // Combine API reviews and user reviews (user reviews first)
    setReviews([...userReviews, ...apiReviews]);
  }, [product]);

  function addReview(newReview) {
    const withId = {
      ...newReview,
      id: Date.now(),
      isApiReview: false, // User-created reviews are editable
    };
    setReviews((prev) => {
      const updatedReviews = [withId, ...prev];
      // Save only user reviews to localStorage
      const userReviews = updatedReviews.filter((r) => !r.isApiReview);
      saveUserReviews(product.id, userReviews);
      return updatedReviews;
    });
  }

  function updateReview(updated) {
    setReviews((prev) => {
      const updatedReviews = prev.map((r) =>
        r.id === updated.id ? { ...r, ...updated } : r
      );
      // Save only user reviews to localStorage
      const userReviews = updatedReviews.filter((r) => !r.isApiReview);
      saveUserReviews(product.id, userReviews);
      return updatedReviews;
    });
  }

  function deleteReview(id) {
    setReviews((prev) => {
      const updatedReviews = prev.filter((r) => r.id !== id);
      // Save only user reviews to localStorage
      const userReviews = updatedReviews.filter((r) => !r.isApiReview);
      saveUserReviews(product.id, userReviews);
      return updatedReviews;
    });
  }

  function reportReview(id) {
    // For now, just show an alert - in a real app this would send to backend
    alert(
      "Review has been reported. Thank you for helping keep our community safe!"
    );
    setOpenMenuId(null);
  }

  function handleSubmit(review) {
    if (review.id) {
      updateReview(review);
    } else {
      addReview(review);
    }
    setModalOpen(false);
    setEditingReview(null);
  }

  // Calculate average rating from reviews
  function calculateAverageRating() {
    if (reviews.length === 0) {
      return product?.rating || 0;
    }
    const sum = reviews.reduce((total, review) => total + review.rating, 0);
    return (sum / reviews.length).toFixed(1);
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

  // Filter and sort reviews
  const getFilteredAndSortedReviews = () => {
    let filteredReviews = [...reviews];

    // Filter by skin type
    if (skinTypeFilter !== "All") {
      filteredReviews = filteredReviews.filter(
        (review) => review.skinType === skinTypeFilter
      );
    }

    // Sort reviews
    switch (sortBy) {
      case "highest":
        filteredReviews.sort((a, b) => b.rating - a.rating);
        break;
      case "lowest":
        filteredReviews.sort((a, b) => a.rating - b.rating);
        break;
      case "newest":
      default:
        // Keep original order (newest first)
        break;
    }

    return filteredReviews;
  };

  const filteredReviews = getFilteredAndSortedReviews();

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
          <span className="rating-avg mobile-title desktop-title">
            {calculateAverageRating()}
          </span>
          <span className="review-stars">
            {Array.from({ length: 5 }).map((_, i) => {
              const rating = parseFloat(calculateAverageRating());
              const isFilled = i < Math.floor(rating);
              const isPartial = i === Math.floor(rating) && rating % 1 >= 0.5;

              return (
                <img
                  key={i}
                  className="star"
                  src={
                    isFilled || isPartial
                      ? "/starFilled.svg"
                      : "/starUnfilled.svg"
                  }
                  alt={
                    isFilled || isPartial
                      ? `filled star ${i + 1}`
                      : `empty star ${i + 1}`
                  }
                />
              );
            })}
          </span>
          <span className="mobile-regular desktop-regular">
            {reviews.length} reviews
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
          <button
            className="review-button"
            onClick={() => {
              setEditingReview(null);
              setModalOpen(true);
            }}
          >
            Write a Review
          </button>
          {modalOpen && (
            <Modal
              open={modalOpen}
              onClose={() => {
                setModalOpen(false);
                setEditingReview(null);
              }}
              childProps={{
                onSubmit: handleSubmit,
                initialReview: editingReview,
                product: product,
              }}
            >
              <Dialog />
            </Modal>
          )}
        </div>

        {/* Review Filters */}
        {reviews.length > 0 && (
          <div className="review-filters">
            <div className="filter-group">
              <label className="filter-label">Skin Type:</label>
              <select
                className="filter-select"
                value={skinTypeFilter}
                onChange={(e) => setSkinTypeFilter(e.target.value)}
              >
                <option value="All">All Skin Types</option>
                <option value="Normal">Normal</option>
                <option value="Dry">Dry</option>
                <option value="Oily">Oily</option>
                <option value="Combination">Combination</option>
                <option value="Sensitive">Sensitive</option>
              </select>
            </div>
            <div className="filter-group">
              <label className="filter-label">Sort by:</label>
              <select
                className="filter-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="newest">Newest First</option>
                <option value="highest">Highest Rating</option>
                <option value="lowest">Lowest Rating</option>
              </select>
            </div>
          </div>
        )}

        <div className="all-reviews">
          {filteredReviews.length === 0 && reviews.length > 0 ? (
            <p className="mobile-regular desktop-regular">
              No reviews found for the selected filters.
            </p>
          ) : filteredReviews.length === 0 ? (
            <p className="mobile-regular desktop-regular">No reviews yet.</p>
          ) : (
            filteredReviews.map((r) => (
              <div
                className="review"
                key={r.id}
                onClick={() => setOpenMenuId(null)}
              >
                <div className="review-rating">
                  <p className="mobile-subheading desktop-h3">{r.name}</p>
                  <span className="mobile-small desktop-small">{r.date}</span>
                </div>
                <span className="review-stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <img
                      key={i}
                      className="star"
                      src={
                        i < r.rating ? "/starFilled.svg" : "/starUnfilled.svg"
                      }
                      alt={
                        i < r.rating
                          ? `filled star ${i + 1}`
                          : `empty star ${i + 1}`
                      }
                    />
                  ))}
                </span>
                {r.title ? (
                  <p className="bold mobile-regular desktop-regular review-title">
                    {r.title}
                  </p>
                ) : null}
                <p className="bold mobile-regular desktop-regular review-skin-type">
                  Skin Type: {r.skinType}
                </p>
                <p className="mobile-regular desktop-regular">{r.text}</p>
                {r.photo ? (
                  Array.isArray(r.photo) ? (
                    <div
                      className="review-photos"
                      style={{ display: "flex", gap: 8, marginTop: 8 }}
                    >
                      {r.photo.map((p, idx) => (
                        <img
                          key={idx}
                          src={p}
                          alt={`review ${idx + 1}`}
                          className="review-photo"
                          style={{ width: 120, height: "auto" }}
                        />
                      ))}
                    </div>
                  ) : (
                    <img
                      src={r.photo}
                      alt="review"
                      className="review-photo"
                      style={{ width: 120, height: "auto", marginTop: 8 }}
                    />
                  )
                ) : null}

                <div className="review-actions" style={{ marginTop: 8 }}>
                  <div
                    className="review-menu-wrap"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      className="menu-btn"
                      aria-haspopup="true"
                      aria-expanded={openMenuId === r.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenMenuId((prev) => (prev === r.id ? null : r.id));
                      }}
                    >
                      ⋯
                    </button>

                    <div
                      className={
                        "review-menu" + (openMenuId === r.id ? " show" : "")
                      }
                      role="menu"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {r.isApiReview ? (
                        // API review - only show report option
                        <button
                          role="menuitem"
                          className="menu-report"
                          onClick={() => reportReview(r.id)}
                        >
                          <span>Report Review</span>
                          <span className="menu-icon">⚠️</span>
                        </button>
                      ) : (
                        // User review - show edit and delete options
                        <>
                          <button
                            role="menuitem"
                            className="menu-edit"
                            onClick={() => {
                              setEditingReview(r);
                              setModalOpen(true);
                              setOpenMenuId(null);
                            }}
                          >
                            <span>Edit Review</span>
                            <span className="menu-icon">
                              <img src="/edit.svg" alt="edit icon" />
                            </span>
                          </button>
                          <div className="menu-divider" />
                          <button
                            role="menuitem"
                            className="menu-delete"
                            onClick={() => {
                              deleteReview(r.id);
                              setOpenMenuId(null);
                            }}
                          >
                            <span>Delete</span>
                            <span className="menu-icon">
                              <img src="/delete.svg" alt="delete icon" />
                            </span>
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Product;
