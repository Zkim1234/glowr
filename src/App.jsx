import "./App.css";
import NavBar from "./assets/components/NavBar";
import TopRankedItem from "./assets/components/TopRankedItem";
import ForYou from "./assets/components/ForYou";
import HitIngredients from "./assets/components/HitIngredients";
import Footer from "./assets/components/Footer";
import PromoBoard from "./assets/components/PromoBoard";

function App() {
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
            <TopRankedItem
              ranking={1}
              image={
                <img src="/larocheposaycleanser.jpg" width="75" alt="Product" />
              }
              brand="La Roche-Posay"
              product="Toleriane Hydrating Gentle Facial Cleanser"
              rating={4.99}
            />
            <TopRankedItem
              ranking={2}
              image={<img src="/loreal.jpg" width="75" alt="Product" />}
              brand="L'Oréal Paris"
              product="Revitalift Triple Power Moisturizer"
              rating={4.98}
            />
            <TopRankedItem
              ranking={3}
              image={<img src="/cerave.jpg" width="75" alt="Product" />}
              brand="CeraVe"
              product="Hydrating Facial Cleanser"
              rating={4.96}
            />
          </div>
          <div className="Top4">
            <TopRankedItem
              ranking={4}
              image={<img src="/neutrogena.jpg" width="75" alt="Product" />}
              brand="Neutrogena"
              product="Rapid Wrinkle Repair Retinol Cream"
              rating={4.89}
            />
            <TopRankedItem
              ranking={5}
              image={<img src="/eltamd.webp" width="75" alt="Product" />}
              brand="EltaMD"
              product="UV Lotion Broad-Spectrum SPF 30+"
              rating={4.87}
            />
            <TopRankedItem
              ranking={6}
              image={<img src="/aveeno.jpg" width="75" alt="Product" />}
              brand="Aveeno"
              product="Daily Moisturizing Face Lotion"
              rating={4.79}
            />
          </div>
          <div className="Top4">
            <TopRankedItem
              ranking={7}
              image={<img src="/caudalie.webp" width="75" alt="Product" />}
              brand="Caudalie"
              product="Vinoperfect Radiance Serum Vitamin C..."
              rating={4.55}
            />
            <TopRankedItem
              ranking={8}
              image={<img src="/tatcha.avif" width="75" alt="Product" />}
              brand="Tatcha"
              product="Clarifying Cleanse + Hydrate Duo"
              rating={4.51}
            />
            <TopRankedItem
              ranking={9}
              image={<img src="/fenty.webp" width="65" alt="Product" />}
              brand="Fenty Beauty"
              product="Butta Drop Refill Whipped Oil Body..."
              rating={4.46}
            />
          </div>
        </div>
      </div>
      <div className="ForYouSection">
        <h3>FOR YOU</h3>
        <div className="ForYouList">
          <ForYou
            image={
              <img
                src="/larocheposaycleanser.jpg"
                width="100"
                alt="Example Image 1"
              />
            }
            description="La Roche-Posay Revitalift Triple Power Moisturizer"
          />
          <ForYou
            image={<img src="/loreal.jpg" width="100" alt="Example Image 1" />}
            description="L'Oréal Paris Revitalift Triple Power Moisturizer"
          />
          <ForYou
            image={<img src="/cerave.jpg" width="100" alt="Example Image 1" />}
            description="CeraVe Hydrating Facial Cleanser"
          />
          <ForYou
            image={
              <img src="/neutrogena.jpg" width="100" alt="Example Image 1" />
            }
            description="Neutrogena Rapid Wrinkle Repair Retinol Cream"
          />
          <ForYou
            image={
              <img src="/caudalie.webp" width="100" alt="Example Image 1" />
            }
            description="Caudalie Vinoperfect Radiance Serum Vitamin C.."
          />
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
      {/* <Footer /> */}
    </div>
  );
}

export default App;
