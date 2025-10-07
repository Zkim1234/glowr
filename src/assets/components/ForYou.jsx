import "./HomeComponents.css";

function ForYou({ image, description, brand, onProductClick }) {
  const isLaRochePosay = brand === "La Roche-Posay";

  const handleClick = () => {
    if (isLaRochePosay && onProductClick) {
      onProductClick();
    }
    // All items are clickable, but only La Roche-Posay navigates
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
