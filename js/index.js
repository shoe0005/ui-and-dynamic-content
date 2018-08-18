// find the elements
let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let pg = document.querySelector("p");

function addItem() {
    
    if (input.value) {
        
        // Making sure error message is not displayed!
        pg.textContent = "";
        
        // create the elment
        let li = document.createElement("li");
        
        // assign the element with the value from the text field
        li.textContent = input.value;
        
        // add the list-item to the DOM
        ul.appendChild(li);
        
        // clear the text-field
        input.value = "";
        
        // bring the cursor back to the text field
        input.focus();
        
    } else {
        pg.textContent = "Nothing entered!";
    }
}

btn.addEventListener("click", addItem);