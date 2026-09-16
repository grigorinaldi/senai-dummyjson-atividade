import "./recipe.css";

export default function CardRecipe({ receita }) {
    return (
        <div className="card-recipe">

            <img
                src={receita.image}
                alt={receita.name}
                className="recipe-image"
            />

            <h2>{receita.name}</h2>

            <h3>Ingredientes:</h3>
            <ul>
                {receita.ingredients.map((ingrediente, idx) => (
                    <li key={idx}>{ingrediente}</li>
                ))}
            </ul>

            <p>
                <strong>Culinária:</strong> {receita.cuisine}
            </p>

            <p>
                <strong>Dificuldade:</strong> {receita.difficulty}
            </p>

            <p>
                <strong>Avaliação:</strong> {receita.rating}
            </p>

        </div>
    );
}