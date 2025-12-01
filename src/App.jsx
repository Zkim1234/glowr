import "./App.css";
import { useState } from "react";
import NavBar from "./assets/components/NavBar";
import TopRankedItem from "./assets/components/TopRankedItem";
import ForYou from "./assets/components/ForYou";
import HitIngredients from "./assets/components/HitIngredients";
import PromoBoard from "./assets/components/PromoBoard";
import Product from "./assets/pages/Product";
import productsData from "../products.json";

// Utility function to calculate average rating from reviews
function calculateAverageRating(product) {
  if (!product.reviews || product.reviews.length === 0) {
    return product.rating || 0;
  }
  const sum = product.reviews.reduce(
    (total, review) => total + review.rating,
    0
  );
  return parseFloat((sum / product.reviews.length).toFixed(1));
}

function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    try {
      return localStorage.getItem("glowr.currentPage") || "home";
    } catch (e) {
      return "home";
    }
  });

  const [currentProductId, setCurrentProductId] = useState(() => {
    try {
      const v = localStorage.getItem("glowr.currentProductId");
      return v ? Number(v) : 1;
    } catch (e) {
      return 1;
    }
  });

  // Sort products by ID to ensure correct ranking
  const sortedProducts = [...productsData].sort((a, b) => a.id - b.id);

  const navigateToProduct = (productId = 1) => {
    setCurrentProductId(productId);
    setCurrentPage("product");
    try {
      localStorage.setItem("glowr.currentProductId", String(productId));
      localStorage.setItem("glowr.currentPage", "product");
    } catch (e) {
      /* ignore localStorage errors */
    }
  };

  const navigateToHome = () => {
    setCurrentPage("home");
    try {
      localStorage.setItem("glowr.currentPage", "home");
    } catch (e) {
      /* ignore localStorage errors */
    }
  };

  if (currentPage === "product") {
    return (
      <Product onBackToHome={navigateToHome} productId={currentProductId} />
    );
  }

  return (
    <div className="App">
      <div className="Navbar">
        <NavBar onProductClick={navigateToProduct} />
      </div>
      <div className="PromoBoard">
        <PromoBoard />
      </div>
      <div id="top-ranking" className="TopRankSection">
        <h3>TOP RANKING</h3>
        <div className="TopRankingList">
          {sortedProducts.slice(0, 6).map((product, index) => (
            <TopRankedItem
              key={product.id}
              ranking={String(index + 1).padStart(2, "0")}
              image={<img src={product.image} alt="Product" />}
              brand={product.brand}
              product={product.name}
              rating={calculateAverageRating(product)}
              reviewCount={product.reviews ? product.reviews.length : 0}
              productId={product.id}
              onProductClick={navigateToProduct}
            />
          ))}
        </div>
      </div>
      <div id="for-you" className="ForYouSection">
        <div className="ForYouHeader">
          <h3>FOR YOU</h3>
          <a href="#" className="ViewMoreLink">
            view more →
          </a>
        </div>
        <div className="ForYouList">
          {sortedProducts.slice(0, 5).map((product) => (
            <ForYou
              key={product.id}
              image={<img src={product.image} width="100" alt={product.name} />}
              description={product.name}
              brand={product.brand}
              rating={calculateAverageRating(product)}
              reviewCount={product.reviews ? product.reviews.length : 0}
              productId={product.id}
              onProductClick={navigateToProduct}
            />
          ))}
        </div>
      </div>
      <div id="hit-ingredients" className="HitIngredientsSection">
        <h3>HIT INGREDIENTS THIS YEAR</h3>
        <div className="IngredientsList">
          <HitIngredients
            image={
              <img src="/round-retinoids.png" width="100" alt="Ingredient 1" />
            }
            name="Retinoids"
          />
          <HitIngredients
            image={
              <img src="/round-sunscreen.png" width="100" alt="Ingredient 2" />
            }
            name="Sunscreen"
          />
          <HitIngredients
            image={
              <img src="/round-vitaminc.png" width="100" alt="Ingredient 3" />
            }
            name="Vitamin C"
          />
          <HitIngredients
            image={
              <img src="/round-peptide.png" width="100" alt="Ingredient 4" />
            }
            name="Peptides"
          />
        </div>
      </div>
      <footer className="Footer">
        <div className="FooterTop"></div>
        <div className="FooterBottom">
          <p>© GLOWR, 2025. All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
