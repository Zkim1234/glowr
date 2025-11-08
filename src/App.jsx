import "./App.css";
import { useState } from "react";
import NavBar from "./assets/components/NavBar";
import TopRankedItem from "./assets/components/TopRankedItem";
import ForYou from "./assets/components/ForYou";
import HitIngredients from "./assets/components/HitIngredients";
import PromoBoard from "./assets/components/PromoBoard";
import Product from "./assets/pages/Product";
import productsData from "../products.json";

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
        <NavBar />
      </div>
      <div className="PromoBoard">
        <PromoBoard />
      </div>
      <div className="TopRankSection">
        <h3>TOP RANKING</h3>
        <div className="TopRankingList">
          {/* Large #1 item on the left */}
          <div className="Top1Card">
            {sortedProducts[0] && (
              <div
                className="RankedItemTop1"
                onClick={() => navigateToProduct(sortedProducts[0].id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    navigateToProduct(sortedProducts[0].id);
                  }
                }}
              >
                <div className="Top1ImageContainer">
                  <img src={sortedProducts[0].image} alt={sortedProducts[0].name} />
                </div>
                <div className="Top1Description">
                  <span className="Top1RankingBox">1</span>
                  <span>Toleriane Hydrating Gentle Facial Cleanser</span>
                </div>
              </div>
            )}
          </div>
          
          {/* Items #2-#7 in two columns on the right */}
          <div className="Top2to7Container">
            <div className="TopColumn">
              {sortedProducts.slice(1, 4).map((product, index) => (
                <TopRankedItem
                  key={product.id}
                  ranking={index + 2}
                  image={<img src={product.image} alt="Product" />}
                  brand={product.brand}
                  product={product.name}
                  rating={product.rating}
                  reviewCount={product.reviewCount}
                  productId={product.id}
                  onProductClick={navigateToProduct}
                />
              ))}
            </div>
            <div className="TopColumn">
              {sortedProducts.slice(4, 7).map((product, index) => (
                <TopRankedItem
                  key={product.id}
                  ranking={index + 5}
                  image={<img src={product.image} alt="Product" />}
                  brand={product.brand}
                  product={product.name}
                  rating={product.rating}
                  reviewCount={product.reviewCount}
                  productId={product.id}
                  onProductClick={navigateToProduct}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="ForYouSection">
        <h3>For You</h3>
        <div className="ForYouList">
          {sortedProducts.slice(0, 5).map((product) => (
            <ForYou
              key={product.id}
              image={<img src={product.image} width="100" alt={product.name} />}
              description={product.name}
              brand={product.brand}
              productId={product.id}
              onProductClick={navigateToProduct}
            />
          ))}
        </div>
      </div>
      <div className="HitIngredientsSection">
        <h3>HIT INGREDIENTS THIS YEAR</h3>
        <div className="IngredientsList">
          <HitIngredients
            image={<img src="/retinoids.png" width="100" alt="Ingredient 1" />}
            name="Retinoids"
          />
          <HitIngredients
            image={<img src="/sunscreen.png" width="100" alt="Ingredient 1" />}
            name="Mineral Sunscreen"
          />
          <HitIngredients
            image={<img src="/vitaminc.png" width="100" alt="Ingredient 1" />}
            name="Vitamin C"
          />
        </div>
      </div>
      <footer className="Footer">
        <p>© 2025 Glowr. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
