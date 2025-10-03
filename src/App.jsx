import './App.css';
import NavBar from "./assets/components/NavBar";
import TopRankedItem from "./assets/components/TopRankedItem";
import ForYou from "./assets/components/ForYou";
import HitIngredients from "./assets/components/HitIngredients";
import Footer from "./assets/components/Footer";

function App () {
    return (
        <div className='App'>
            <NavBar />
            <div className="TopRankSection">
                <h3>TOP RANKED</h3>
                <div className="TopRankingList">
                    <div className="Top1">
                        <TopRankedItem
                            ranking={1} 
                            image={<img src="/larocheposay.jpg" width="75" alt="Product" />} 
                            brand="La Roche-Posay" 
                            product="Toleriane Hydrating Gentle Facial Cleanser" 
                            rating={4.99}
                        />
                        <TopRankedItem
                            ranking={2} 
                            image={<img src="/larocheposay.jpg" width="75" alt="Product" />} 
                            brand="L'Oréal Paris" 
                            product="Revitalift Triple Power Moisturizer" 
                            rating={ 4.98 }
                        />
                        <TopRankedItem
                            ranking={3} 
                            image={<img src="/larocheposay.jpg" width="75" alt="Product" />} 
                            brand="CeraVe" 
                            product="Hydrating Facial Cleanser" 
                            rating={4.96}
                        />
                    </div>
                        <div className="Top4">
                        <TopRankedItem
                                ranking={4} 
                                image={<img src="/larocheposay.jpg" width="75" alt="Product" />} 
                                brand="Neutrogena" 
                                product="Rapid Wrinkle Repair Retinol Cream" 
                                rating={4.89}
                            />
                            <TopRankedItem
                                ranking={5} 
                                image={<img src="/larocheposay.jpg" width="75" alt="Product" />} 
                                brand="EltaMD" 
                                product="UV Lotion Broad-Spectrum SPF 30+" 
                                rating={4.87}
                            />
                            <TopRankedItem
                                ranking={6} 
                                image={<img src="/larocheposay.jpg" width="75" alt="Product" />} 
                                brand="Aveeno" 
                                product="Daily Moisturizing Face Lotion" 
                                rating={4.79}
                            />
                        </div>
                    </div>
                </div>
            <div className="ForYouSection">
                <h3>FOR YOU</h3>
                <div className="ForYouList">
                    <ForYou 
                        image={<img src="/larocheposay.jpg" width="100" alt="Example Image 1" />} 
                        description="This is a description for the first card." 
                    />   
                    <ForYou 
                        image={<img src="/larocheposay.jpg" width="100" alt="Example Image 1" />} 
                        description="This is a description for the first card." 
                    />   
                    <ForYou 
                        image={<img src="/larocheposay.jpg" width="100" alt="Example Image 1" />} 
                        description="This is a description for the first card." 
                    />   
                    <ForYou 
                        image={<img src="/larocheposay.jpg" width="100" alt="Example Image 1" />} 
                        description="This is a description for the first card." 
                    />    
                </div>
            </div>
            <div className="HitIngredientsSection">
                <h3>HIT INGREDIENTS THIS YEAR</h3>
                <div className="IngredientsList">
                    <HitIngredients 
                        image={<img src="/larocheposay.jpg" width="100" alt="Ingredient 1" />} 
                        name="Ingredient 1"
                    />
                    <HitIngredients 
                        image={<img src="/larocheposay.jpg" width="100" alt="Ingredient 1" />} 
                        name="Ingredient 1"
                    />
                    <HitIngredients 
                        image={<img src="/larocheposay.jpg" width="100" alt="Ingredient 1" />} 
                        name="Ingredient 1"
                    />
                </div>
            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default App;
