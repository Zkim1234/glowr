import "./HomeComponents.css";

function TopRankedItem({
  ranking,
  image,
  brand,
  product,
  rating,
  productId,
  onProductClick,
}) {
  const handleClick = () => {
    if (onProductClick && productId) {
      onProductClick(productId);
    }
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
        </div>
      </div>
    </div>
  );
}

export default TopRankedItem;
