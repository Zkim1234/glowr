import NavBar from "./assets/components/NavBar";
import TopRankedItem from "./assets/components/TopRankedItem";
import './App.css';

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
                            image={<img src="/" alt="Product" />} 
                            brand="BrandName" 
                            product="ProductName" 
                            rating={4.5}
                        />
                        <TopRankedItem
                            ranking={1} 
                            image={<img src="/" alt="Product" />} 
                            brand="BrandName" 
                            product="ProductName" 
                            rating={4.5}
                        />
                        <TopRankedItem
                            ranking={1} 
                            image={<img src="/" alt="Product" />} 
                            brand="BrandName" 
                            product="ProductName" 
                            rating={4.5}
                        />
                    </div>
                        <div className="Top4">
                        <TopRankedItem
                                ranking={1} 
                                image={<img src="/" alt="Product" />} 
                                brand="BrandName" 
                                product="ProductName" 
                                rating={4.5}
                            />
                            <TopRankedItem
                                ranking={1} 
                                image={<img src="/" alt="Product" />} 
                                brand="BrandName" 
                                product="ProductName" 
                                rating={4.5}
                            />
                            <TopRankedItem
                                ranking={1} 
                                image={<img src="/" alt="Product" />} 
                                brand="BrandName" 
                                product="ProductName" 
                                rating={4.5}
                            />
                        </div>
                </div>
                </div>
        </div>
    )
}

export default App;
