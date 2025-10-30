import "./HomeComponents.css";

function ForYou({ image, description, brand, productId, onProductClick }) {
  const handleClick = () => {
    if (onProductClick && productId) {
      onProductClick(productId);
    }
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
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ForYou;
