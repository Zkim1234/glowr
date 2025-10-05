import "./dialog.css";

function skinToggle(e) {
  e.currentTarget.classList.toggle("skinToggle");
}

function Dialog({ onClose }) {
  return (
    <div className="review-container">
      <button className="close-btn" onClick={onClose}>
        ×
      </button>
      <div className="review-header">
        <h2>Write a Review</h2>
      </div>

      <div className="product-section">
        <div className="product-image">
          <img
            src="https://www.laroche-posay.us/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-acd-laroche-posay-master-catalog/default/dw8b2f3571/product/March%202023%20packshot%20updates/Toleriane_HydratingGentleCleanser_400ml-Pump.jpg?sw=698&sh=698&sm=cut&sfrm=jpg&q=70"
            alt="product image"
          />
        </div>

        <div className="product-info">
          <h2 className="product-title">
            Toleriane Hydrating<br></br> Gentle Facial Cleanser
          </h2>
          <p className="brand">La Roche-Posay</p>
          <p className="description">
            From the skincare brand recommended by 100,000 dermatologists
            worldwide, Toleriane Hydrating Gentle Cleanser is a daily face wash
            for normal to dry, sensitive skin. Formulated with La Roche-Posay
            prebiotic thermal spring water, niacinamide, and ceramide-3, this
            face wash gently cleanses skin of dirt, makeup, and impurities while
            maintaining skin's natural moisture barrier and pH.
          </p>

          <div className="rating-section">
            <h3 className="titles">Rate this product</h3>
            <div className="stars">
              <span>☆</span>
              <span>☆</span>
              <span>☆</span>
              <span>☆</span>
              <span>☆</span>
            </div>
          </div>
        </div>
      </div>

      <div className="form-section">
        <div className="title-section">
          <h3 className="titles">Make a title</h3>
          <input className="title-input" type="text" placeholder="Title..." />
        </div>

        <div className="skin-type-section">
          <h3 className="titles">What kind of skin type do you have?</h3>
          <div className="skin-type-buttons">
            <button className="skin-type-btn" onClick={skinToggle}>
              Oily
            </button>
            <button className="skin-type-btn" onClick={skinToggle}>
              Combination
            </button>
            <button className="skin-type-btn" onClick={skinToggle}>
              Dry
            </button>
          </div>
        </div>

        <div className="photo-section">
          <h3 className="titles">Add a photo</h3>
          <div className="photo-upload">
            <button className="upload-btn">+</button>
          </div>
        </div>

        <div className="review-section">
          <h3 className="titles">Add a review</h3>
          <textarea
            className="review-input"
            placeholder="Add a review..."
          ></textarea>
        </div>

        <button type="submit" className="post-review-btn" onClick={onClose}>
          Post Review
        </button>
      </div>
    </div>
  );
}

export default Dialog;
