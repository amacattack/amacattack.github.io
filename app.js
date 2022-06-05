// Selectors 
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterSelector = document.querySelector('.filter-todo');

// API Selectors 
const quoteBtn = document.querySelector('.active-quote-btn');

// Event Listeners 
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
todoList.addEventListener('click', markCheck);
filterSelector.addEventListener('change', filterTodo);
document.addEventListener('DOMContentLoaded', getTodos);

// API Event Listeners 
quoteBtn.addEventListener('click', performGetRequest);

// Function for Adding a Todo Event to List 
function addTodo(event) {
    //Prevents Form From Submitting 
    event.preventDefault();
    //Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // Create Li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    // Create Check Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    // Create Trash Button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    // Append to list
    todoList.appendChild(todoDiv);
    // Save all todos to local storage
    saveTodoList(todoList);
    // Clear Todo Input Value 
    todoInput.value = "";
}

// Function Deletes a Todo Event 
function deleteCheck(event) {
    const item = event.target;

    // Delete Item
    if (item.classList[0] === "trash-btn") {
        // Deletes entire row, not just trash button 
        const todoItem = item.parentElement;
        // Animated deletion
        todoItem.classList.add("delete");
        todoItem.addEventListener('transitionend', function () {
            todoItem.remove();
            saveTodoList(todoList);
        });
    }
}

// Function Marks Item Complete
function markCheck(event) {
    const item = event.target;

    if (item.classList[0] === "complete-btn") {
        const todoItem = item.parentElement;
        todoItem.classList.toggle("completed");
    }
}

// Function Filters Events 
function filterTodo(event) {
    console.log(event.target.value);
    const todos = todoList.childNodes;

    todos.forEach(function (todo) {
        switch (event.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}

// Function Saves Todo Array To Local Storage
function saveTodoList(todoList) {
    let todoArray = todoList.children;
    todoItemsArray = [];

    for (i = 0; i < todoArray.length; i++) {
        let todoDiv = todoArray[i];
        let todoText = todoDiv.children[0].innerText;
        todoItemsArray.push(todoText);
    }
    localStorage.setItem('todos', JSON.stringify(todoItemsArray));
}

// Function Displays Saved Todos On Webpage
function getTodos() {

    const todos = JSON.parse(localStorage.getItem('todos'));

    todos.forEach(function (todo) {
        // Todo Div
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        // Create Li
        const newTodo = document.createElement('li');
        newTodo.innerText = todo;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);
        // Create Check Button
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add("complete-btn");
        todoDiv.appendChild(completedButton);
        // Create Trash Button
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add("trash-btn");
        todoDiv.appendChild(trashButton);
        // Append to list
        todoList.appendChild(todoDiv);
    });
}

// Function gets a random quote from zenquotes.io 
async function performGetRequest() {
    console.log('sending get req')
    var resultElement = document.getElementById('getResult');
    resultElement.innerHTML = '';

///////////////////////////////////////////////////////////////////////////
    // const resp = fetch("https://zenquotes.io/api/random", {
    //     mode: 'no-cors',
    // })
    //     .then((response) => response)
    //     .catch(error => console.error(error))

//////////////////////////////////////////////////////////////////////////////////////////
    try {
        const response = await fetch("https://api.themotivate365.com/stoic-quote")
        console.log('vanilla resp: ', response)
        // var data = await response.json();
        // console.log(data);        

        const newResponse = await fetch("https://api.themotivate365.com/stoic-quote", {
            "headers": {
                "accept": "*/*",
                "accept-language": "en-US,en;q=0.9",
                "if-none-match": "W/\"b5-6659y/NgZiUpPmjekLAc9mFgj1c\"",
                "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"102\", \"Google Chrome\";v=\"102\"",
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": "\"macOS\"",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "cross-site"
            },
            "referrer": "http://127.0.0.1:5500/",
            "referrerPolicy": "strict-origin-when-cross-origin",
            "body": null,
            "method": "GET",
            "mode": "cors",
            "credentials": "omit"
            });
        console.log("new resp:", newResponse);
    } catch (error) {
        console.error('error: ', error)
    }
}