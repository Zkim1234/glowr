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
  const [currentPage, setCurrentPage] = useState("home");
  const [currentProductId, setCurrentProductId] = useState(1);

  // Sort products by ID to ensure correct ranking
  const sortedProducts = [...productsData].sort((a, b) => a.id - b.id);

  const navigateToProduct = (productId = 1) => {
    setCurrentProductId(productId);
    setCurrentPage("product");
  };

  const navigateToHome = () => {
    setCurrentPage("home");
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
        <h3>TOP RANKED</h3>
        <div className="TopRankingList">
          <div className="Top1">
            {sortedProducts.slice(0, 3).map((product, index) => (
              <TopRankedItem
                key={product.id}
                ranking={index + 1}
                image={<img src={product.image} width="75" alt="Product" />}
                brand={product.brand}
                product={product.name}
                rating={product.rating}
                productId={product.id}
                onProductClick={navigateToProduct}
              />
            ))}
          </div>
          <div className="Top4">
            {sortedProducts.slice(3, 6).map((product, index) => (
              <TopRankedItem
                key={product.id}
                ranking={index + 4}
                image={<img src={product.image} width="75" alt="Product" />}
                brand={product.brand}
                product={product.name}
                rating={product.rating}
                productId={product.id}
                onProductClick={navigateToProduct}
              />
            ))}
          </div>
          <div className="Top4">
            {sortedProducts.slice(6, 9).map((product, index) => (
              <TopRankedItem
                key={product.id}
                ranking={index + 7}
                image={<img src={product.image} width="75" alt="Product" />}
                brand={product.brand}
                product={product.name}
                rating={product.rating}
                productId={product.id}
                onProductClick={navigateToProduct}
              />
            ))}
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
        <p>© 2024 Glowr. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
