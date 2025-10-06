import "./Product.css";
import React from "react";

function Product(){
    const bestForBars = [
        { label: "Dry Skin", height: "90%" },
        { label: "Combination Skin", height: "50%" },
        { label: "Oily Skin", height: "20%" },
        { label: "Normal Skin", height: "80%" },
        { label: "Sensitive Skin", height: "80%" },
    ];

    const [showFullDescription, setShowFullDescription] = React.useState(false);

    // Shortened description (always show short by default, toggle for full)
    const shortDescription =
        "Toleriane Hydrating Gentle Cleanser is a daily face wash for normal to dry, sensitive skin. Formulated with La Roche-Posay prebiotic thermal spring water, niacinamide, and ceramide-3...";

    const fullDescription =
        "Toleriane Hydrating Gentle Cleanser is a daily face wash for normal to dry, sensitive skin. Formulated with La Roche-Posay prebiotic thermal spring water, niacinamide, and ceramide-3, this face wash gently cleanses skin of dirt, makeup, and impurities while maintaining skin's natural moisture barrier and pH.";

    return(
        <div className="product-container">
            <img className="product-img" src="https://i5.walmartimages.com/asr/df0c9808-7b30-4a5c-adf8-a1868304756f.48fb5e187bf4b965a69465d8520f88fe.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF" alt="Product" />
            <div className="product-details">
                <div>
                    {/* product title and description */}
                    <p className="mobile-subheading brand-name desktop-h1">La Roche-Posay</p>
                    <h1 className="mobile-title desktop-title">Toleriane Hydrating Gentle Facial Cleanser</h1>
                    <p className="mobile-regular desktop-regular">
                        {showFullDescription ? fullDescription : shortDescription}
                        <button
                            className="details-button"
                            style={{ marginLeft: 8 }}
                            onClick={() => setShowFullDescription((prev) => !prev)}
                        >
                            {showFullDescription ? "Hide" : "Details"}
                        </button>
                    </p>
                </div>
                <div className="rating">
                    {/* overall rating */}
                    <span className="rating-avg desktop-title">4.5</span> 
                    <span>⭐⭐⭐⭐⭐</span>
                    <span className="mobile-small desktop-regular">560,385 reviews...</span>
                </div>
                <div className="ingredients">
                    <h2 className="mobile-subheading bold desktop-h1">Ingredients</h2>
                    <div className="ingredients-info">
                        <div className="ingredients-detected">
                            <p>Harmful Ingredients</p>
                            <p className="bold align-right"> 3 detected</p>
                            <p>Potential Skin Allergens Ingredients</p>
                            <p className="bold align-right"> 0 detected</p>
                        </div>
                        <div> 
                            {/* best for graph */}
                            <h3 className="mobile-subheading bold desktop-h2">Best for</h3>
                            <div className="best-for-graph">
                                {bestForBars.map(bar => (
                                    <div
                                        className="best-for-bar"
                                        style={{ "--bar-height": bar.height }}
                                        key={bar.label}
                                    >
                                        <span className="desktop-regular">{bar.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <p className="desktop-bigger-regular">Aqua / Water / Eau (La Roche-Posay Prebiotic Thermal Water), Glycerin, Pentaerythrityl Tetraethylhexanoate, Propylene Glycol, Ammonium Polyacryloyldimethyl Taurate, Polysorbate 60, Ceramide Np </p>
                </div>
            </div>

            {/* Reviews Section */}
            <div className="reviews-section">
                <div className="review-header">
                    <h2 className="mobile-subheading bold desktop-title">Reviews</h2>
                    <button className="review-button">Write a Review</button>
                </div>
                <div className="all-reviews"> 
                    <div className="review">
                        <div className="review-rating">
                            <p className="mobile-subheading desktop-h3">Anonymous</p>
                            <span className="mobile-small desktop-small">5 days ago</span>
                        </div>
                        <span>⭐⭐⭐⭐⭐</span>
                        <p className="bold mobile-regular desktop-regular">Skin Type: Oily, Sensitive</p>
                        <p className="mobile-regular desktop-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </p>
                    </div>
                    <div className="review">
                        <div className="review-rating">
                            <p className="mobile-subheading desktop-h3">Anonymous</p>
                            <span className="mobile-small desktop-small">5 days ago</span>
                        </div>
                        <span>⭐⭐⭐⭐⭐</span>
                        <p className="bold mobile-regular desktop-regular">Skin Type: Oily, Sensitive</p>
                        <p className="mobile-regular desktop-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </p>
                    </div>
                    <div className="review">
                        <div className="review-rating">
                            <p className="mobile-subheading desktop-h3">Anonymous</p>
                            <span className="mobile-small desktop-small">5 days ago</span>
                        </div>
                        <span>⭐⭐⭐⭐⭐</span>
                        <p className="bold mobile-regular desktop-regular">Skin Type: Oily, Sensitive</p>
                        <p className="mobile-regular desktop-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </p>
                    </div>
                    <div className="review">
                        <div className="review-rating">
                            <p className="mobile-subheading desktop-h3">Anonymous</p>
                            <span className="mobile-small desktop-small">5 days ago</span>
                        </div>
                        <span>⭐⭐⭐⭐⭐</span>
                        <p className="bold mobile-regular desktop-regular">Skin Type: Oily, Sensitive</p>
                        <p className="mobile-regular desktop-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco </p>
                    </div>
                </div>
            </div>
        </div>
    );
    }

    export default Product;