let ctr = 1;

function addTodo() {
    const inputEl = document.querySelector("input");
    const value = inputEl.value;

    const newDivEl = document.createElement("div");

    newDivEl.setAttribute("id", ctr);
    newDivEl.setAttribute("style", "display: flex;");

    if (ctr%2 == 0) newDivEl.setAttribute("class", "todo-1");
    else newDivEl.setAttribute("class", "todo-2");
    
    const spanEl = document.createElement("span");
    const buttonEl = document.createElement("button");

    spanEl.innerHTML = ctr + '.' + value;
    buttonEl.textContent = 'Delete';
    buttonEl.setAttribute("onclick", "deleteTodo(" + ctr + ")");

    newDivEl.appendChild(spanEl);
    newDivEl.appendChild(buttonEl);
    
    // newDivEl.innerHTML = '<h4>' + ctr + '. ' + value + '</h4> <button onclick="deleteTodo(' + ctr + ')">delete</button>';
    document.querySelector("body").appendChild(newDivEl);

    ctr = ctr + 1;
}

function deleteTodo(index) {
    const element = document.getElementById(index);
    element.parentNode.removeChild(element);
    ctr = ctr - 1;
}