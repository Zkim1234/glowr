import "./HomeComponents.css";

function ForYou({ image, description, brand, rating, reviewCount, productId, onProductClick }) {
  const handleClick = () => {
    if (onProductClick && productId) {
      onProductClick(productId);
    }
  };

  // Format review count (e.g., "560,385" -> "(560.4k)")
  const formatReviewCount = (count) => {
    if (!count) return "";
    const num = parseFloat(count.replace(/,/g, ""));
    if (num >= 1000) {
      const kValue = num / 1000;
      if (kValue < 10) {
        return `(${kValue.toFixed(1)}k)`;
      } else if (kValue < 100) {
        return `(${kValue.toFixed(1)}k)`;
      } else {
        return `(${kValue.toFixed(0)}k)`;
      }
    }
    return `(${count})`;
  };

  return (
    <div
      className="CardContainer"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick();
        }
      }}
      style={{ cursor: "pointer" }}
    >
      <div className="ForYouImage">{image}</div>
      <div className="ForYouDescription">
        <p className="ForYouBrand">{brand}</p>
        <p className="ForYouProduct">{description}</p>
        <div className="ForYouRating">
          <span className="RatingStars">★</span>
          <span className="RatingValue">{rating}</span>
          {reviewCount && <span className="ReviewCount">{formatReviewCount(reviewCount)}</span>}
        </div>
      </div>
    </div>
  );
}

export default ForYou;
