import "./HomeComponents.css"

function HitIngredients({image, name}) {
    return (
        <div className="Ingredient">
            <div className="HitIngredientsImage">
                {image}
            </div>
            <p className="IngredientName">{name}</p>
        </div>
    )
}

export default HitIngredients;