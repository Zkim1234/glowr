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

  // Format review count (e.g., "560,385" -> "(560.4k)" or "8,723" -> "(8.7k)")
  const formatReviewCount = (count) => {
    if (!count) return "";
    const num = parseFloat(count.replace(/,/g, ""));
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
    return `(${count})`;
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
      <div className="RankingAndImg">
        <div className="Ranking">{ranking}</div>
        <div>{image}</div>
      </div>
      <div className="ProductInfo">
        <p className="BrandName">{brand}</p>
        <p className="ProductName">{product}</p>
        <div className="Rating">
          <p>{rating}</p>
          {reviewCount && <span className="ReviewCount">{formatReviewCount(reviewCount)}</span>}
        </div>
      </div>
    </div>
  );
}

export default TopRankedItem;
