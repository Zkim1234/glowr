import styles from "./dialog.module.css";

function skinToggle(e) {
  e.currentTarget.classList.toggle(styles.skinToggle);
}

function Dialog({ onClose }) {
  return (
    <div className={styles.reviewContainer}>
      <button className={styles.closeBtn} onClick={onClose}>
        ×
      </button>
      <div className={styles.reviewHeader}>
        <h2>Write a Review</h2>
      </div>

      <div className={styles.productSection}>
        <div className={styles.productImage}>
          <img
            src="https://www.laroche-posay.us/dw/image/v2/AANG_PRD/on/demandware.static/-/Sites-acd-laroche-posay-master-catalog/default/dw8b2f3571/product/March%202023%20packshot%20updates/Toleriane_HydratingGentleCleanser_400ml-Pump.jpg?sw=698&sh=698&sm=cut&sfrm=jpg&q=70"
            alt="product image"
          />
        </div>

        <div className={styles.productInfo}>
          <h2 className={styles.productTitle}>
            Toleriane Hydrating<br></br> Gentle Facial Cleanser
          </h2>
          <p className={styles.brand}>La Roche-Posay</p>
          <p className={styles.description}>
            From the skincare brand recommended by 100,000 dermatologists
            worldwide, Toleriane Hydrating Gentle Cleanser is a daily face wash
            for normal to dry, sensitive skin. Formulated with La Roche-Posay
            prebiotic thermal spring water, niacinamide, and ceramide-3, this
            face wash gently cleanses skin of dirt, makeup, and impurities while
            maintaining skin's natural moisture barrier and pH.
          </p>

          <div className={styles.ratingSection}>
            <h3 className={styles.titles}>Rate this product</h3>
            <div className={styles.stars}>
              <span>☆</span>
              <span>☆</span>
              <span>☆</span>
              <span>☆</span>
              <span>☆</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.formSection}>
        <div className={styles.titleSection}>
          <h3 className={styles.titles}>Make a title</h3>
          <input
            className={styles.titleInput}
            type="text"
            placeholder="Title..."
          />
        </div>

        <div className={styles.skinTypeSection}>
          <h3 className={styles.titles}>What kind of skin type do you have?</h3>
          <div className={styles.skinTypeButtons}>
            <button className={styles.skinTypeBtn} onClick={skinToggle}>
              Oily
            </button>
            <button className={styles.skinTypeBtn} onClick={skinToggle}>
              Combination
            </button>
            <button className={styles.skinTypeBtn} onClick={skinToggle}>
              Dry
            </button>
          </div>
        </div>

        <div className={styles.photoSection}>
          <h3 className={styles.titles}>Add a photo</h3>
          <div className={styles.photoUpload}>
            <button className={styles.uploadBtn}>+</button>
          </div>
        </div>

        <div className={styles.reviewSection}>
          <h3 className={styles.titles}>Add a review</h3>
          <textarea
            className={styles.reviewInput}
            placeholder="Add a review..."
          ></textarea>
        </div>

        <button
          type="submit"
          className={styles.postReviewBtn}
          onClick={onClose}
        >
          Post Review
        </button>
      </div>
    </div>
  );
}

export default Dialog;
