const container = document.querySelector(".container")



const printButton = (ammountOfButtons) => {


    for (let index = 1; index <= ammountOfButtons; index++) {

        const button = document.createElement("button")
        const value = document.createTextNode(`${index}`)
        button.appendChild(value)
        button.className = "btn"
        button.addEventListener("click", () => {
            alert(button.innerText)
        })
        container.appendChild(button)
    }


}
printButton(20)

