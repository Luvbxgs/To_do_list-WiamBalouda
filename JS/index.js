const inputField = document.getElementById("inputField");
const container = document.getElementById("container-tasks"); 

function planning(){
    if(inputField === ''){
        alert("Please add your text!");
    } else{
        let li = document.createElement("li");
        li.innerHTML = inputField.value + '';
        container.appendChild(li);
    }
    
}