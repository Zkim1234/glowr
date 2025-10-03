import './App.css';
import NavBar from "./assets/components/NavBar";
import TopRankedItem from "./assets/components/TopRankedItem";
import ForYou from "./assets/components/ForYou";
import HitIngredients from "./assets/components/HitIngredients";

function App () {
    return (
        <div>
            <NavBar />
            <div className="TopRankSection">
                <h3>TOP RANKED</h3>
                <div className="TopRankingList">
                    <div className="Top1">
                        <TopRankedItem
                            ranking={1} 
                            image={<img src="/larocheposay.jpg" width="100" alt="Product" />} 
                            brand="BrandName" 
                            product="ProductName" 
                            rating={4.5}
                        />
                        <TopRankedItem
                            ranking={2} 
                            image={<img src="/larocheposay.jpg" width="100" alt="Product" />} 
                            brand="BrandName" 
                            product="ProductName" 
                            rating={4.5}
                        />
                        <TopRankedItem
                            ranking={3} 
                            image={<img src="/larocheposay.jpg" width="100" alt="Product" />} 
                            brand="BrandName" 
                            product="ProductName" 
                            rating={4.5}
                        />
                    </div>
                        <div className="Top4">
                        <TopRankedItem
                                ranking={4} 
                                image={<img src="/larocheposay.jpg" width="100" alt="Product" />} 
                                brand="BrandName" 
                                product="ProductName" 
                                rating={4.5}
                            />
                            <TopRankedItem
                                ranking={5} 
                                image={<img src="/larocheposay.jpg" width="100" alt="Product" />} 
                                brand="BrandName" 
                                product="ProductName" 
                                rating={4.5}
                            />
                            <TopRankedItem
                                ranking={5} 
                                image={<img src="/larocheposay.jpg" width="100" alt="Product" />} 
                                brand="BrandName" 
                                product="ProductName" 
                                rating={4.5}
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
            <div className="HitIngredientsScetion">
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
            <footer></footer>
        </div>
    )
}

export default App;
