import './HomeComponents.css';

function ForYou({image, description }) {
    return (
        <div className="CardContainer">
            <div className="ForYouImage">
                {image}
            </div>
            <div className="ForYouDescription">
                <p>{description}</p>
            </div>
        </div>
    )
}


export default ForYou;