import "./HomeComponents.css";

function TopRankedItem({
  ranking,
  image,
  brand,
  product,
  rating,
  onProductClick,
}) {
  const isLaRochePosay = brand === "La Roche-Posay";

  const handleClick = () => {
    if (isLaRochePosay && onProductClick) {
      onProductClick();
    }
    // All items are clickable, but only La Roche-Posay navigates
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
