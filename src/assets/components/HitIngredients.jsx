import "./HomeComponents.css"

function HitIngredients({image, name}) {
    return (
        <div className="Ingredient" >
            <div className="HitIngredientsImage">
                {image}
            </div>
            <div className="IngredientName">
                {name}
            </div>
        </div>
    )
}

export default HitIngredients;