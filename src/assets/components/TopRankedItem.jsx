import './HomeComponents.css';

function TopRankedItem ({ranking, image, brand, product, rating}) {
    return (
        <div className='RankedItem'>
            <div className='RankingAndImg'>
                <div className="Ranking">{ranking}</div>
                <div>
                    {image}
                </div>
            </div>
            <div className="ProductInfo">
                <p className="BrandName">{brand}</p>
                <p className="ProductName">{product}</p>
                <div className="Rating">
                    <img src="/" width="100" alt="Star" />
                    <p>{rating}</p>
                </div>
            </div>
        </div>
    )
}



export default TopRankedItem;