const input = document.getElementById("favchap");
const list = document.getElementById("list");
const addButton = document.getElementById("add");

//document.querySelector("input").addEventListener("keypress", function(e){ 
//    if(e.key === "Enter"){

addButton.addEventListener('click', function(){
    const userInput = input.value;

    if (userInput !== ""){
        const listElements = document.createElement("li");
        listElements.textContent = userInput;
        const removeItemButton = document.createElement("button");
        removeItemButton.textContent = "❌";
        removeItemButton.addEventListener('click', function() {
            listElements.remove();
            input.focus();
        });

    listElements.appendChild(removeItemButton);
    list.appendChild(listElements);
    input.value = '';
    input.focus();
    //}
    };

});

