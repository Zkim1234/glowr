import React from "react";
import styles from "./dialog.module.css";

function Dialog({ onClose, onSubmit }) {
  const [name, setName] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [skinType, setSkinType] = React.useState("");
  const [rating, setRating] = React.useState();
  const [reviewText, setReviewText] = React.useState("");
  const titleRef = React.useRef(null);
  const reviewRef = React.useRef(null);
  const [errors, setErrors] = React.useState({ title: "", review: "" });

  function handlePost() {
    // validate required fields
    const titleVal = title.trim();
    const reviewVal = reviewText.trim();
    if (!titleVal) {
      setErrors({ title: "Title is required", review: "" });
      titleRef.current?.focus();
      return;
    }
    if (!reviewVal) {
      setErrors({ title: "", review: "Review is required" });
      reviewRef.current?.focus();
      return;
    }

    const newReview = {
      name: name.trim() || "Anonymous",
      date: "Just now",
      rating: rating,
      skinType: skinType || "Not specified",
      title: titleVal,
      text: reviewVal,
    };

    // clear errors
    setErrors({ title: "", review: "" });

    if (typeof onSubmit === "function") {
      onSubmit(newReview);
    }
    if (typeof onClose === "function") onClose();
  }

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
            <h3 className={styles.titlesStar}>Rate This Product</h3>
            <div className={styles.stars}>
              {[1, 2, 3, 4, 5].map((s) => (
                <img
                  key={s}
                  src={s <= rating ? "/starFilled.svg" : "/starUnfilled.svg"}
                  alt={s <= rating ? `filled star ${s}` : `empty star ${s}`}
                  onClick={() => setRating(s)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setRating(s);
                      e.preventDefault();
                    }
                  }}
                  tabIndex={0}
                  style={{ cursor: "pointer", width: 25, height: 24 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.formSection}>
        <div className={styles.titleSection}>
          <h3 className={styles.titles}>Your name</h3>
          <input
            className={styles.titleInput}
            type="text"
            placeholder="Name (optional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className={styles.titleSection}>
          <h3 className={styles.titles}>Make a title</h3>
          <input
            className={styles.titleInput}
            type="text"
            placeholder="Title..."
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              if (errors.title) setErrors((p) => ({ ...p, title: "" }));
            }}
            ref={titleRef}
            required
          />
          {errors.title ? (
            <div style={{ color: "#c0392b", fontSize: 13, marginTop: 6 }}>
              {errors.title}
            </div>
          ) : null}
        </div>

        <div className={styles.skinTypeSection}>
          <h3 className={styles.titles}>What kind of skin type do you have?</h3>
          <div className={styles.skinTypeButtons}>
            <button
              className={`${styles.skinTypeBtn} ${
                skinType === "Oily" ? styles.skinToggle : ""
              }`}
              onClick={() => setSkinType("Oily")}
            >
              Oily
            </button>
            <button
              className={`${styles.skinTypeBtn} ${
                skinType === "Combination" ? styles.skinToggle : ""
              }`}
              onClick={() => setSkinType("Combination")}
            >
              Combination
            </button>
            <button
              className={`${styles.skinTypeBtn} ${
                skinType === "Dry" ? styles.skinToggle : ""
              }`}
              onClick={() => setSkinType("Dry")}
            >
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
            value={reviewText}
            onChange={(e) => {
              setReviewText(e.target.value);
              if (errors.review) setErrors((p) => ({ ...p, review: "" }));
            }}
            ref={reviewRef}
            required
          ></textarea>
          {errors.review ? (
            <div style={{ color: "#c0392b", fontSize: 13, marginTop: 6 }}>
              {errors.review}
            </div>
          ) : null}
        </div>

        <button
          type="button"
          className={styles.postReviewBtn}
          onClick={handlePost}
        >
          Post Review
        </button>
      </div>
    </div>
  );
}

export default Dialog;
