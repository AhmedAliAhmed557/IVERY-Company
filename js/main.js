let toggleList = document.querySelector('.toggle-list')
let ul = document.querySelector("nav ul")
let closeBtn = document.querySelector(".close")

// function toggleElement() {
    toggleList.addEventListener("click" , () => {
        if (ul.classList.contains("hidden")) {
            ul.classList.remove("hidden")
            ul.classList.add("visible")
        } else {
            ul.classList.remove("visible")
            ul.classList.add("hidden")
        }
    })
// }
 
toggleList.addEventListener("click" , () => {
    if (closeBtn.classList.contains("hide")) {
        closeBtn.classList.remove("hide")
        closeBtn.classList.add("visible")
    } else {
        closeBtn.classList.remove("visible")
        closeBtn.classList.add("hide")
    }
})

closeBtn.addEventListener("click", () => {
    ul.classList.add("hidden")
    ul.classList.remove("visible")
    closeBtn.classList.add("hide")
})