document.querySelector("form").addEventListener("submit", evt => {
    evt.preventDefault()
    document.querySelector(".tasksBoard").style.display = "block"
    appendInput(document.querySelector("input"))
    document.querySelector("input").value = ""
  })


  function appendInput(input){
    if (input.value == "") return
    else {
      var newTask = document.createElement("li")
      newTask.innerHTML = `
        <button class="delete">x</button><input type="checkbox">${input.value}`
      newTask.querySelector("button").
        addEventListener("click", evt => {
          document.querySelector("ul").removeChild(evt.target.parentNode)
        })
      newTask.querySelector("input").
        addEventListener("click", evt => {
          if(evt.target.checked) {
            newTask.style.color="red"
            newTask.style.textDecoration="line-through" 
          }
          else {
            newTask.style.color="#2f4f4f"
            newTask.style.textDecoration="" 
          }
        })
      document.querySelector("ul").appendChild(newTask)

    }
  }

  document.querySelector("a").addEventListener("click", evt => {
    document.querySelector("ul").innerHTML = ""
    document.querySelector(".tasksBoard").style.display = "none"
  })

  document.querySelector("a").addEventListener("click", evt => {
    document.querySelector("ul").innerHTML = ""
  })