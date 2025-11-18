import React from "react";
import styles from "./dialog.module.css";

function Dialog({ onClose, onSubmit, initialReview, product }) {
  const [name, setName] = React.useState(initialReview?.name || "");
  const [title, setTitle] = React.useState(initialReview?.title || "");
  const [skinType, setSkinType] = React.useState(initialReview?.skinType || "");
  const [rating, setRating] = React.useState(initialReview?.rating ?? 0);
  const [reviewText, setReviewText] = React.useState(initialReview?.text || "");
  const [photoFiles, setPhotoFiles] = React.useState([]);
  const [photoPreviews, setPhotoPreviews] = React.useState(
    initialReview?.photo
      ? Array.isArray(initialReview.photo)
        ? initialReview.photo
        : [initialReview.photo]
      : []
  );
  const fileInputRef = React.useRef(null);
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
      ...(initialReview && initialReview.id ? { id: initialReview.id } : {}),
      name: name.trim() || "Anonymous",
      date: "Just now",
      rating: rating || 0,
      skinType: skinType || "Not specified",
      title: titleVal,
      text: reviewVal,
      photo: photoPreviews && photoPreviews.length ? photoPreviews : null,
    };

    // clear errors
    setErrors({ title: "", review: "" });

    if (typeof onSubmit === "function") {
      onSubmit(newReview);
    }
    if (typeof onClose === "function") onClose();
  }

  // keep local state in sync when editing a different review
  React.useEffect(() => {
    setName(initialReview?.name || "");
    setTitle(initialReview?.title || "");
    setSkinType(initialReview?.skinType || "");
    setRating(initialReview?.rating ?? 0);
    setReviewText(initialReview?.text || "");
    setPhotoFiles([]);
    setPhotoPreviews(
      initialReview?.photo
        ? Array.isArray(initialReview.photo)
          ? initialReview.photo
          : [initialReview.photo]
        : []
    );
  }, [initialReview]);

  // revoke object URLs when component unmounts or previews change
  React.useEffect(() => {
    return () => {
      photoPreviews.forEach((p) => {
        if (p && typeof p === "string" && p.startsWith("blob:")) {
          try {
            URL.revokeObjectURL(p);
          } catch (e) {}
        }
      });
    };
  }, [photoPreviews]);

  function handleFileChange(e) {
    const files = e.target.files ? Array.from(e.target.files) : [];
    if (!files.length) return;
    const remaining = Math.max(0, 5 - photoFiles.length);
    const toAdd = files.slice(0, remaining);
    const newFiles = [...photoFiles];
    const newPreviews = [...photoPreviews];
    toAdd.forEach((file) => {
      const url = URL.createObjectURL(file);
      newFiles.push(file);
      newPreviews.push(url);
    });
    setPhotoFiles(newFiles);
    setPhotoPreviews(newPreviews);
    // reset input so same file can be selected again if removed
    if (fileInputRef.current) fileInputRef.current.value = null;
  }

  function triggerFileSelect() {
    fileInputRef.current?.click();
  }

  function removePhoto(index) {
    const prev = photoPreviews[index];
    if (prev && prev.startsWith("blob:")) {
      try {
        URL.revokeObjectURL(prev);
      } catch (e) {}
    }
    const newFiles = photoFiles.filter((_, i) => i !== index);
    const newPreviews = photoPreviews.filter((_, i) => i !== index);
    setPhotoFiles(newFiles);
    setPhotoPreviews(newPreviews);
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
          <img src={product?.image || ""} alt={product?.name || "product"} />
        </div>

        <div className={styles.productInfo}>
          <h2 className={styles.productTitle}>
            {product?.name || (
              <>
                Toleriane Hydrating
                <br /> Gentle Facial Cleanser
              </>
            )}
          </h2>
          <p className={styles.brand}>{product?.brand || "La Roche-Posay"}</p>
          <p className={styles.description}>
            {product?.description ||
              "From the skincare brand recommended by 100,000 dermatologists worldwide, Toleriane Hydrating Gentle Cleanser is a daily face wash for normal to dry, sensitive skin. Formulated with La Roche-Posay prebiotic thermal spring water, niacinamide, and ceramide-3, this face wash gently cleanses skin of dirt, makeup, and impurities while maintaining skin's natural moisture barrier and pH."}
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
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              multiple
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <button
              type="button"
              className={styles.uploadBtn}
              onClick={triggerFileSelect}
            >
              +
            </button>
            {photoPreviews && photoPreviews.length ? (
              <div style={{ marginLeft: 12, display: "flex", gap: 8 }}>
                {photoPreviews.map((p, i) => (
                  <div key={i} style={{ textAlign: "center" }}>
                    <img
                      src={p}
                      alt={`preview ${i + 1}`}
                      style={{ width: 96, height: "auto", borderRadius: 8 }}
                    />
                    <div>
                      <button
                        type="button"
                        onClick={() => removePhoto(i)}
                        style={{ marginTop: 6, fontSize: 12 }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
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
