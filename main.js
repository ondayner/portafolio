const ul = document.getElementById("ul")
const buttonAdapt = document.getElementById("nav-button")
const negro = document.getElementById("cap-n")
const equis = document.getElementById("equis")

buttonAdapt.addEventListener("click", function() {
    ul.style.right = "0"
    negro.style.display = "block"
})

equis.addEventListener("click", function() {
    ul.style.right = "100%"
    negro.style.display = "none"
})