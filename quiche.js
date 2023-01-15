let ingredientsQuiche = []
const checkboxIngredients = document.getElementById("checkbox-ingredients")
const addBtn = document.getElementById("add-btn")
const ulEl = document.getElementById("ul-el")

addBtn.addEventListener("click", function() {
    ingredientsQuiche.push(checkboxIngredients.value)
    checkboxIngredients.value = ""
    localStorage.setItem("ingredientsQuiche", JSON.stringify(ingredientsQuiche) )
    renderFood()
})

// Make sure it's only for the ticked items 
// Then linked to the Shopping list

function renderFood() {
    let listItems = ""
    for (let i = 0; i < ingredientsQuiche.length; i++) {
        listItems += "<li>" + ingredientsQuiche[i] + "</li>"
    }
    ulEl.innerHTML = listItems  
}