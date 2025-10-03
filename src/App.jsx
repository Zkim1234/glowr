import './App.css';
import NavBar from "./assets/components/NavBar";
import TopRankedItem from "./assets/components/TopRankedItem";
import ForYou from "./assets/components/ForYou";

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
            <div className="ForYouSection">
                <h3>FOR YOU</h3>
                <div className="ForYouList">
                    <ForYou 
                        image={<img src="/" alt="Example Image 1" />} 
                        description="This is a description for the first card." 
                    />   
                    <ForYou 
                        image={<img src="/" alt="Example Image 1" />} 
                        description="This is a description for the first card." 
                    />   
                    <ForYou 
                        image={<img src="/" alt="Example Image 1" />} 
                        description="This is a description for the first card." 
                    />   
                    <ForYou 
                        image={<img src="/" alt="Example Image 1" />} 
                        description="This is a description for the first card." 
                    />    
                </div>
            </div>
        </div>
    )
}

export default App;
