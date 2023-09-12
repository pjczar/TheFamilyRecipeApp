document.addEventListener("DOMContentLoaded", function () {
    const addIngredientButton = document.getElementById("add-ingredient");
    const ingredientsSection = document.getElementById("ingredientsSection");

    addIngredientButton.addEventListener("click", function () {
        const ingredientDiv = document.createElement("div");
        ingredientDiv.className = "ingredient";
        ingredientDiv.innerHTML = `
            <input type="number" class="ingredient-quantity" name="ingredient-quantity[]" placeholder="Quantity">
            <select class="ingredient-unit" name="ingredient-unit[]">
                <option value="cups">Cups</option>
                <option value="grams">Grams</option>
                <option value="ounces">Ounces</option>
                <option value="pounds">Pounds</option>
                <option value="milliliters">Milliliters (ml)</option>
                <option value="teaspoons">Teaspoons (tsp)</option>
                <option value="tablespoons">Tablespoons (tbsp)</option>
                <option value="fluid-drachms">Fluid Drachms (fl dr)</option>
                <option value="fluid-scruples">Fluid Scruples (fl sc)</option>
                <option value="fluid-minims">Fluid Minims (fl min)</option>
                <option value="pints">Pints (pt)</option>
                <option value="quarts">Quarts (qt)</option>
                <option value="gallons">Gallons (gal)</option>
                <option value="milligrams">Milligrams (mg)</option>
                <option value="kilograms">Kilograms (kg)</option>
                <option value="metric-cups">Metric Cups (mL)</option>
                <option value="metric-liters">Metric Liters (L)</option>
                <option value="imperial-cups">Imperial Cups (UK cup)</option>
                <option value="imperial-fluid-ounces">Imperial Fluid Ounces (UK fl oz)</option>
                <option value="imperial-pints">Imperial Pints (UK pt)</option>
                <option value="imperial-quarts">Imperial Quarts (UK qt)</option>
                <option value="imperial-gallons">Imperial Gallons (UK gal)</option>
                <!-- Add more options as needed -->
            </select>

            <input type="text" class="ingredient-name" name="ingredient-name[]" placeholder="Ingredient Name">
            <button type="button" class="remove-ingredient">Remove</button>
        `;

        ingredientsSection.appendChild(ingredientDiv);

        // Attach event listener to the "Remove" button
        const removeIngredientButton = ingredientDiv.querySelector(".remove-ingredient");
        removeIngredientButton.addEventListener("click", function () {
            ingredientsSection.removeChild(ingredientDiv);
        });
    });
});
