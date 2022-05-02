document.addEventListener("keydown", (event) => {
    eventKey.textContent = event.key
    eventCode.textContent = event.code
    eventWhich.textContent = event.which
    eventKeyTitle.textContent = event.key
})


// document.addEventListener("keydown", (event) => {
//     let keyDown = event.key
//     let eventkeytitle = document.getElementById("eventKeyTitle")
//     eventKey.textContent = event.key
//     eventCode.textContent = event.code
//     eventWhich.textContent = event.which
//     eventkeytitle.textContent = event.key

//     eventKeyTitle.innerHTML = `<p plass = "pressedBtn> ${keyDown} was pressed</p>`


// })

// myDesc.addEventListener("keydown", () => {
//     let myDesc = document.getElementById("description")
//     if (myDesc.style.visibility == "hidden") {
//         myDesc.style.display = "visible"
//       } else {
//         myDesc.style.display = "hidden"
//       }
//     })
