import "./HomeComponents.css";

function TopRankedItem({
  ranking,
  image,
  brand,
  product,
  rating,
  reviewCount,
  productId,
  onProductClick,
}) {
  const handleClick = () => {
    if (onProductClick && productId) {
      onProductClick(productId);
    }
  };

  // Format review count (e.g., 560 -> "(560)" or 8723 -> "(8.7k)")
  const formatReviewCount = (count) => {
    if (!count) return "";
    // Handle both string and number inputs
    const num =
      typeof count === "string" ? parseFloat(count.replace(/,/g, "")) : count;
    if (num >= 1000) {
      const kValue = num / 1000;
      // Show 1 decimal place if less than 10k, otherwise show more precision
      if (kValue < 10) {
        return `(${kValue.toFixed(1)}k)`;
      } else if (kValue < 100) {
        return `(${kValue.toFixed(1)}k)`;
      } else {
        return `(${kValue.toFixed(0)}k)`;
      }
    }
    return `(${num})`;
  };

  return (
    <div
      className="RankedItem"
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      <div className="RankedItemImage">{image}</div>
      <div className="ProductInfo">
        <div className="BrandAndRanking">
          <p className="BrandName">{brand}</p>
          <div className="Ranking">{ranking}</div>
        </div>
        <p className="ProductName">{product}</p>
        <div className="Rating">
          <span className="RatingStars">★</span>
          <span className="RatingValue">{rating}</span>
          {reviewCount && (
            <span className="ReviewCount">
              {formatReviewCount(reviewCount)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopRankedItem;
