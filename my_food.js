let myFood = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myFood.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myFood", JSON.stringify(myFood) )
    renderFood()


})

function renderFood() {
    let listItems = ""
    for (let i = 0; i < myFood.length; i++) {
        listItems += "<li>" + myFood[i] + "</li>"
    }
    ulEl.innerHTML = listItems  
}

// If linking to product using code below

// function renderFood() {
//     let listItems = ""
//     for (let i = 0; i < myFood.length; i++) {
//         listItems += `
//             <li>
//                 <a target='_blank' href='${myFood[i]}'>
//                     ${myFood[i]}
//                     </a>
//             </li>
//             `
//     }
//     ulEl.innerHTML = listItems  
// }
